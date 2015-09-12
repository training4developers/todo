(function(define) {

	"use strict";

	var deps = ["marionette"];

	function module(Marionette) {

		return Marionette.ItemView.extend({
			template: "todo-no-list-items"
		});

	}

	define(deps, module);

})(define);
