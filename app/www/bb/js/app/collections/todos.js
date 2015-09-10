(function(define) {

	var dependencies = ["underscore", "backbone", "app/collections/base", "app/models/todo"];

	function module(_, Backbone, BaseCollection, ToDo) {

		return BaseCollection.extend({
			model: ToDo
		});

	}

	define(dependencies, module);

})(define);
