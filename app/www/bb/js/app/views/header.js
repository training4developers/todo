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

				var view = this;
				this.model.on("change:filterByTask", function(model, value) {
					view.trigger("find-todos-by-task", value);
				});

				this.on("update-find-by-task", function(taskFilter) {
					this.model.set("filterByTask", taskFilter);
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
