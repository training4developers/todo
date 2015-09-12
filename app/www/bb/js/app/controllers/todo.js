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
				todos = new ToDos();

			headerRegion.show(new HeaderView({
				model: new Backbone.Model({
					siteName: "ToDos"
				})
			}));

			controller.listenTo(headerRegion.currentView, "find-todos-by-task-name", function(taskName) {
				console.log("todo ctrl taskname: " + taskName);
			});

			controller.listenTo(headerRegion.currentView, "new-todo", function() {
				console.log("new todo ctrl");
			});

			footerRegion.show(new FooterView({
				model: new Backbone.Model({
					copyrightNotice: "&copy; " + new Date().getFullYear() + " Training 4 Developers, Inc."
				})
			}));

			this.showToDos = function() {
				todos.fetch().then(function(collection) {

					contentRegion.show(new ToDoListView({
						collection: collection
					}));

					controller.listenTo(contentRegion.currentView, "save-todo", function(todo) {
						console.log("todo ctrl save todo: " + JSON.stringify(todo));
					});

					controller.listenTo(contentRegion.currentView, "edit-todo", function(todo) {
						console.log("todo ctrl edit todo: " + JSON.stringify(todo));
					});

				});
			};

		};

	}

	define(deps, module);

})(define);
