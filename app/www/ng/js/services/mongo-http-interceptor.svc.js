(function(angular) {

	"use strict";

	factory.$inject = [];

	function factory() {

		return {
			request: function(config) {

				if (config.url.startsWith("/api/todos")) {

					config.transformRequest.unshift(function(data) {

						function transformTodo(todo) {
							todo._id = todo.id;
							delete todo.id;
						}

						if (data instanceof Array) {
							data.forEach(transformTodo);
						} else if(data instanceof Object) {
							transformTodo(data);
						}

						return data;

					});

					config.transformResponse.push(function(data) {

						function transformTodo(todo) {
							delete todo.__v;
							todo.id = todo._id;
							delete todo._id;
						}

						if (data instanceof Array) {
							data.forEach(transformTodo);
						} else if(data instanceof Object) {
							transformTodo(data);
						}

						return data;

					});

				}

      	return config;
    	}
		};

	}

	angular.module("ToDo.Services")
		.factory("MongoHttpInterceptor", factory);

})(angular);
