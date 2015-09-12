(function(define) {

	"use strict";

	var deps = ["marionette"];

	function module(Marionette) {

		return Marionette.ItemView.extend({

			template: "header",

			events: {
				"keyup input" : "findToDosByTaskName"
			},

			findToDosByTaskName: function(e) {
				this.trigger("find-todos-by-task-name", e.target.value);
			}

		});

	}

	define(deps, module);

})(define);
