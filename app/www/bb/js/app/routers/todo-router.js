(function(define) {

	var deps = ["backbone"];

	function module(Backbone) {

		return Backbone.Router.extend({

			routes: {
				"find-by-task/:taskFilter": "findToDosByTask",
				"": "showToDos",
			},

			showToDos: function() {
				console.log("router: showtodos");
				this.trigger("show-todos");
			},

			findToDosByTask: function(taskFilter) {
				console.log("router: " + taskFilter);
				this.trigger("find-todos-by-task", taskFilter);
			},

			testRoute: function() {
				console.log("test route");
			}

		});

	}

	define(deps, module);

})(define);
