(function(define) {

	"use strict";

	var deps = ["backbone","marionette", "knockout", "knockback"];

	function module(Backbone, Marionette, ko, kb) {

		return Marionette.ItemView.extend({

			id: "todoDetails",
			tagName: "div",
			className: "reveal-modal",

			template: "todo-edit",

			events: {
				"click [save-todo-action]": "saveToDo",
				"click [cancel-todo-action]": "cancelToDo",
				"click [delete-todo-action]": "deleteToDo"
			},

			onRender: function() {

				function ViewModel(model) {
					this.task = kb.observable(model, "task");
					this.priority = kb.observable(model, "priority");
					this.dueDate = kb.observable(model, "dueDate");
					this.completed = kb.observable(model, "completed");
				}

				this.$el.attr("data-reveal", "");
				this.$el.attr("aria-labelledby", "modalTitle");
				this.$el.attr("aria-hidden", "true");
				this.$el.attr("role", "dialog");

				this.viewModel = new ViewModel(this.model);

				ko.applyBindings(this.viewModel, this.el);
			},

			onAttach: function() {
				this.$el.foundation('reveal', 'open');
			},

			onBeforeDestroy: function() {
				this.$el.foundation('reveal', 'close');
			},

			saveToDo: function() {
				this.trigger("save-todo", this.model);
			},

			cancelToDo: function() {
				this.trigger("cancel-todo");
			},

			deleteToDo: function() {
				this.trigger("delete-todo", this.model);
			}

		});

	}

	define(deps, module);

})(define);
