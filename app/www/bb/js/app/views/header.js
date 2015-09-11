(function(define) {

	"use strict";
	
	var deps = ["underscore", "Backbone", "Marionette"];

	function module(_, Backbone, Marionette) {

		return Marionette.ItemView.extend({
			template: "header"
		});

	}

	define(deps, module);

})(define);
