(function(define) {

	"use strict";

	var deps = [
		"marionette",
		"app/templates.hbs",
		"app/views/todo-layout",
		"app/views/header",
		"app/views/footer",
		"app/views/todo-list",
		"app/views/todo-list-item",
		"app/views/todo-no-list-items"
	];

	function configure(Marionette, Templates) {

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

	}

	function module(Marionette, Templates, ToDoLayoutView, HeaderView, FooterView,
			ToDoListView, ToDoListItemView, ToDoNoListItemsView) {

		configure(Marionette, Templates);

		var ToDosApp = Marionette.Application.extend({

			initialize: function() {

				var app = this;

				this.on("start", function() {
					app.rootView = new ToDoLayoutView();
					app.rootView.render();
					app.rootView.getRegion("header").show(new HeaderView());
					app.rootView.getRegion("footer").show(new FooterView());

					//app.accountController = new AccountController(app);
					//app.accountController.showAccounts();
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
