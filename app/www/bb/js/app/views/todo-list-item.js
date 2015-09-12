(function(define) {

	"use strict";

	var deps = ["marionette"];

	function module(Marionette) {

		return Marionette.ItemView.extend({
			template: "todo-list-item"
		});

	}

	define(deps, module);

})(define);
