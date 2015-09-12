(function(define) {

	"use strict";

	var deps = ["marionette"];

	function module(Marionette) {

		return Marionette.LayoutView.extend({
			el: "body",
			template: "todo-layout",
			regions: {
				header: "header",
				footer: "footer",
				content: "main",
				modal: "[modal]",
			}
		});

	}

	define(deps, module);

})(define);
