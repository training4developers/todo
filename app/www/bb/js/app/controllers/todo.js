(function(define) {

	"use strict";

	var deps = [
		"underscore",
		"backbone",
		"app/models/todo",
		"app/collections/todos",
		"app/views/header",
		"app/views/footer",
		"app/views/todo-list",
		"app/views/todo-edit"
	];

	function module(_, Backbone, ToDo, ToDos, HeaderView, FooterView,
		ToDoListView, ToDoEditView) {

		return function(app) {

			_.extend(this, Backbone.Events);

			var
				controller = this,
				headerRegion = app.rootView.getRegion("header"),
				footerRegion = app.rootView.getRegion("footer"),
				contentRegion = app.rootView.getRegion("content"),
				modalRegion = app.rootView.getRegion("modal"),
				todos = new ToDos(),
				currentTodosFilter = undefined;

			headerRegion.show(new HeaderView({
				model: new Backbone.Model({
					siteName: "ToDos"
				})
			}));

			controller.listenTo(headerRegion.currentView, "find-todos-by-task",
				function(taskFilter) {
					currentTodosFilter = {
						task: taskFilter
					};
					controller.showToDos({ filter: currentTodosFilter, refresh: false });
				});

			controller.listenTo(headerRegion.currentView, "new-todo", function() {
				this.showEditTodo();
			});

			footerRegion.show(new FooterView({
				model: new Backbone.Model({
					copyrightNotice: "&copy; " + new Date().getFullYear() + " Training 4 Developers, Inc."
				})
			}));

			this.showToDos = function(options) {

				if (!options) options = {};

				function fillList(collection) {

					if (options.filter && options.filter.task) {
						collection = new ToDos(_.filter(collection.toJSON(), function(todo) {
							return todo.task.startsWith(options.filter.task);
						}));
					}

					contentRegion.show(new ToDoListView({
						collection: collection
					}));

					controller.listenTo(contentRegion.currentView, "save-todo", function(todo) {
						todo.save();
					});

					controller.listenTo(contentRegion.currentView, "edit-todo", function(todo) {
						this.showEditTodo(todo);
					});

				}

				if (typeof options.refresh === "boolean" && !options.refresh) {
					fillList(todos);
				} else {
					todos.fetch().then(fillList);
				}

			};

			this.showEditTodo = function(todo) {

				var newToDo = todo ? false : true;

				modalRegion.show(new ToDoEditView({
					model: todo ? todo : new ToDo()
				}));

				controller.listenTo(modalRegion.currentView, "save-todo", function(todo) {
					todo.save().then(function() {
						modalRegion.empty();
						if (newToDo) {
							controller.showToDos();
						} else {
							controller.showToDos({ filter: currentTodosFilter, refresh: false });
						}
					});
				});

				controller.listenTo(modalRegion.currentView, "cancel-todo", function() {
					modalRegion.empty();
					console.log(JSON.stringify(todos.toJSON()));
					controller.showToDos({ filter: currentTodosFilter, refresh: false });
				});

				controller.listenTo(modalRegion.currentView, "delete-todo", function(todo) {
					todo.destroy().then(function() {
						modalRegion.empty();
						controller.showToDos({ filter: currentTodosFilter, refresh: false });
					});
				});

			};

		};

	}

	define(deps, module);

})(define);
