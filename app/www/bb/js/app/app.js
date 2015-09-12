(function(define) {

	"use strict";

	var deps = [
		"backbone",
		"marionette",
		"handlebars",
		"app/controllers/todo",
		"app/templates.hbs",
		"app/views/todo-layout",
	];

	function configure(Marionette, Handlebars, Templates) {

		Marionette.TemplateCache.prototype.loadTemplate =
			function(templateId, options){
		  	return Templates[templateId];
			};

		Marionette.TemplateCache.prototype.compileTemplate =
			function(rawTemplate, options) {
		  	return rawTemplate;
			};

		Marionette.Renderer.render = function(template, data){
			return Marionette.TemplateCache.get(template)(data);
		};

		Handlebars.registerHelper('priorityLabel', function(priority) {
  		switch(priority) {
				case 10:
					return "High";
				case 0:
					return "Normal";
				case -10:
					return "Low";
			}
		});

		Handlebars.registerHelper("formatDate", function(date) {
			if (!(date instanceof Date)) {
				date = new Date(date);
			}
			return date.toLocaleDateString()
		});

	}

	function module(Backbone, Marionette, Handlebars,
		ToDoController, Templates, ToDoLayoutView) {

		configure(Marionette, Handlebars, Templates);

		var ToDosApp = Marionette.Application.extend({

			initialize: function() {

				var app = this;

				this.on("start", function() {

					app.rootView = new ToDoLayoutView();
					app.rootView.render();

					app.todoController = new ToDoController(app);
					app.todoController.showToDos();

				});
			}

		});

		$(function() {
			var todosApp = new ToDosApp();
			todosApp.start();
		});

	}

	define(deps, module);

})(define);
