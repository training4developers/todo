(function(define) {

	"use strict";

	var deps = ["marionette"];

	function module(Marionette) {

		return Marionette.ItemView.extend({
			template: "header"
		});

	}

	define(deps, module);

})(define);
