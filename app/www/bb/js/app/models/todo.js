(function(define) {

	var dependencies = ["underscore", "backbone", "app/models/base"];

	function module(_, Backbone, BaseModel) {

		return BaseModel.extend({

			defaults: {
				task: undefined,
				priority: 0,
				dueDate: new Date(),
				completed: false
			}

		});

	}

	define(dependencies, module);

})(define);
