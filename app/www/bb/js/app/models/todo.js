(function(define) {

	"use strict";

	var deps = ["app/models/base"];

	function module(BaseModel) {

		return BaseModel.extend({
			idAttribute: "_id",
			urlRoot: "/api/todos",
			defaults: {
				task: undefined,
				priority: 0,
				dueDate: new Date(),
				completed: false
			}
		});

	}

	define(deps, module);

})(define);
