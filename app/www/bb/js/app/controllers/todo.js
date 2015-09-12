(function(define) {

	"use strict";

	var deps = ["underscore", "backbone", "app/collections/todos", "app/views/todo-list"];

	function module(_, Backbone, ToDos, ToDoListView) {

		return function(app) {

			_.extend(this, Backbone.Events);

			var controller = this;

			var todos = new ToDos();

			this.showToDos = function() {
				todos.fetch().then(function(collection) {
					app.rootView.getRegion("content").show(new ToDoListView({
						collection: collection
					}));
				});
			};

		};

	}

	define(deps, module);

})(define);
