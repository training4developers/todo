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

		return function(app, router) {

			_.extend(this, Backbone.Events);

			var
				controller = this,
				headerRegion = app.rootView.getRegion("header"),
				footerRegion = app.rootView.getRegion("footer"),
				contentRegion = app.rootView.getRegion("content"),
				modalRegion = app.rootView.getRegion("modal"),
				todos = new ToDos(),
				currentTodosFilter = undefined;


			function filterToDos(taskFilter, refresh) {
				currentTodosFilter = {
					task: taskFilter
				};
				controller.showToDos({ filter: currentTodosFilter, refresh: refresh });
			}

			headerRegion.show(new HeaderView({
				model: new Backbone.Model({
					siteName: "ToDos"
				})
			}));

			controller.listenTo(router, "show-todos", function() {
				this.showToDos();
			});

			controller.listenTo(router, "find-todos-by-task", function(taskFilter) {
				filterToDos(taskFilter, true);
				headerRegion.currentView.trigger("update-find-by-task", taskFilter);
			});

			controller.listenTo(headerRegion.currentView, "find-todos-by-task", function(taskFilter) {
				filterToDos(taskFilter, false);
				router.navigate("find-by-task/" + encodeURIComponent(taskFilter));
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

				console.dir(options);

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
