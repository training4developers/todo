(function(define) {

	"use strict";

	var dependencies = ["app/models/todo","app/collections/todos"];

	function module(ToDo, ToDos) {

		var todo = new ToDo({
			_id: "55f0e702dd7ee9e82caf4458"
		});

		todo.fetch().then(function(model) {
			console.dir(model.toJSON());
		}).catch(function(xhr) {
			console.dir(xhr);
		});

		var todos = new ToDos();
		todos.fetch().then(function(collection) {

			collection.forEach(function(model) {
				console.dir(model.toJSON());
			});

		});

	}

	define(dependencies, module);

})(define);
