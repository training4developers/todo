(function(define) {

	"use strict";

	var deps = ["marionette"];

	function module(Marionette) {

		return Marionette.ItemView.extend({

			template: "header",

			events: {
				"keyup input" : "findToDosByTask",
				"click #new-todo-action": "newToDo"
			},

			findToDosByTask: function(e) {

				var ignoreKeys = [13,16,17,18,20,27,37,40,41,42,91];

				if (ignoreKeys.indexOf(e.keyCode) === -1) {
					this.trigger("find-todos-by-task", e.target.value);
				}
			},

			newToDo: function() {
				this.trigger("new-todo");
			}

		});

	}

	define(deps, module);

})(define);
