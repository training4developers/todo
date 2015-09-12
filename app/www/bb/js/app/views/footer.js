(function(define) {

	"use strict";

	var deps = ["marionette"];

	function module(Marionette) {

		return Marionette.ItemView.extend({
			template: "footer"
		});

	}

	define(deps, module);

})(define);
