(function(define) {

	var deps = ["underscore", "Backbone", "Marionette"];

	function module(_, Backbone, Marionette) {

		return Marionette.ItemView.extend({
			template: "todo-edit"
		});

	}

	define(deps, module);

})(define);
