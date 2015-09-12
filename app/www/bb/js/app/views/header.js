(function(define) {

	"use strict";

	var deps = ["marionette", "knockout", "knockback"];

	function module(Marionette, ko, kb) {

		return Marionette.ItemView.extend({

			template: "header",

			events: {
				"click [new-todo-action]": "newToDo"
			},

			initialize: function() {
				var controller = this;
				this.model.on("change:filterByTask", function(model, value) {
					controller.trigger("find-todos-by-task", value);
				});
			},

			onRender: function() {

				function ViewModel(model) {
					this.filterByTask = kb.observable(model, "filterByTask");
				}

				this.viewModel = new ViewModel(this.model);

				ko.applyBindings(this.viewModel, this.el);
			},

			newToDo: function() {
				this.trigger("new-todo");
			}

		});

	}

	define(deps, module);

})(define);
