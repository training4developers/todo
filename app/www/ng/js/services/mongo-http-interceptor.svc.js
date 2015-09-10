(function(angular) {

	"use strict";

	factory.$inject = [];

	function factory() {

		return {
			request: function(config) {

				if (config.url.startsWith("/api/todos")) {

					function transformTodo(todo) {
						todo._id = todo.id;
						delete todo.id;
					}

					if (config.data instanceof Array) {
						config.data.forEach(transformTodo);
					} else if(config.data instanceof Object) {
						transformTodo(config.data);
					}

				}

      	return config;
				
    	},
			response: function(response) {

				if (response.config.url.startsWith("/api/todos")) {
					function transformTodo(todo) {
						delete todo.__v;
						todo.id = todo._id;
						delete todo._id;
					}

					if (response.data instanceof Array) {
						response.data.forEach(transformTodo);
					} else if(response.data instanceof Object) {
						transformTodo(response.data);
					}
				}

				return response;

			}
		};

	}

	angular.module("ToDo.Services")
		.factory("MongoHttpInterceptor", factory);

})(angular);
