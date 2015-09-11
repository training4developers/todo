(function(define) {

	"use strict";

	var deps = ["app/collections/base", "app/models/todo"];

	function module(BaseCollection, ToDo) {

		return BaseCollection.extend({
			model: ToDo,
			url: "/api/todos"
		});

	}

	define(deps, module);

})(define);
