(function(define) {

	var deps = ["underscore", "Backbone", "Marionette"];

	function module(_, Backbone, Marionette) {

		return Marionette.ItemView.extend({
			template: "footer"
		});

	}

	define(deps, module);

})(define);
