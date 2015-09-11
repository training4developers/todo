(function(define) {

	"use strict";

	var deps = ["underscore", "Backbone", "Marionette"];

	function module(_, Backbone, Marionette) {

		return Marionette.CollectionView.extend({
			template: "main"
		});

	}

	define(deps, module);

})(define);
