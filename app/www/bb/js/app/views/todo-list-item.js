(function(define) {

	"use strict";

	var deps = ["marionette"];

	function module(Marionette) {

		return Marionette.ItemView.extend({

			template: "todo-list-item",

			events: {
				"change input" : "toggleToDoCompleted",
				"click [edit-todo-action]": "editToDo"
			},

			toggleToDoCompleted: function(e) {
				this.model.set("completed", e.target.checked);
				this.trigger("save-todo", this.model);
			},

			editToDo: function() {
				this.trigger("edit-todo", this.model);
			}

		});

	}

	define(deps, module);

})(define);
