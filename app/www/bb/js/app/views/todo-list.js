(function(define) {

	"use strict";

	var deps = ["marionette", "app/views/todo-list-item", "app/views/todo-no-list-items"];

	function module(Marionette, ToDoListItem, ToDoNoListItems) {

		return Marionette.CompositeView.extend({

			template: "todo-list",

			childView: ToDoListItem,

			emptyView: ToDoNoListItems,

			childViewContainer: "[todo-rows]",

			childEvents: {
    		"save-todo": function(e, todo) {
					this.trigger("save-todo",  todo);
				},
				"edit-todo": function(e, todo) {
					this.trigger("edit-todo",  todo);
				}
  		},

		});

	}

	define(deps, module);

})(define);
