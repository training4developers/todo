(function(define) {

	"use strict";

	var deps = [
		"underscore",
		"backbone",
		"app/collections/todos",
		"app/views/header",
		"app/views/footer",
		"app/views/todo-list"];

	function module(_, Backbone, ToDos, HeaderView, FooterView, ToDoListView) {

		return function(app) {

			_.extend(this, Backbone.Events);

			var
				controller = this,
				headerRegion = app.rootView.getRegion("header"),
				footerRegion = app.rootView.getRegion("footer"),
				contentRegion = app.rootView.getRegion("content"),
				todos = new ToDos(),
				taskNameFilter = undefined;

			headerRegion.show(new HeaderView({
				model: new Backbone.Model({
					siteName: "ToDos"
				})
			}));

			controller.listenTo(headerRegion.currentView, "find-todos-by-task", function(taskFilter) {
				controller.showToDos({ filter: { task: taskFilter }, refresh: false });
			});

			controller.listenTo(headerRegion.currentView, "new-todo", function() {
				console.log("new todo ctrl");
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
						console.log("todo ctrl edit todo: " + JSON.stringify(todo));
					});

				}

				if (typeof options.refresh === "boolean" && !options.refresh) {
					fillList(todos);
				} else {
					todos.fetch().then(fillList);
				}

			};

		};

	}

	define(deps, module);

})(define);
