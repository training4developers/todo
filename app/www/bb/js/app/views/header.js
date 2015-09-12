(function(define) {

	"use strict";

	var deps = ["marionette"];

	function module(Marionette) {

		return Marionette.ItemView.extend({

			template: "header",

			events: {
				"keyup input" : "findToDosByTaskName",
				"click #new-todo-action": "newToDo"
			},

			findToDosByTaskName: function(e) {
				this.trigger("find-todos-by-task-name", e.target.value);
			},

			newToDo: function() {
				this.trigger("new-todo");
			}

		});

	}

	define(deps, module);

})(define);
