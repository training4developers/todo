(function(define) {

	"use strict";

	var deps = ["marionette"];

	function module(Marionette) {

		return Marionette.ItemView.extend({
			template: "todo-edit"
		});

	}

	define(deps, module);

})(define);
