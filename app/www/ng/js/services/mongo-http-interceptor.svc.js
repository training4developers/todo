(function(angular) {

	"use strict";

	factory.$inject = [];

	function factory() {

		return {
			request: function(config) {

				if (config.method !== "GET" && config.url.startsWith("/api/todos")) {

					function transformTodo(todo) {

						// transform id to underscore id for mongo
						todo["_id"] = todo.id;
						delete todo.id;

						// added by ng-repeat for iterating
						delete todo["$$hashKey"];
					}

					// clone the object to destroy the underlying scope model
					var cloneData = angular.copy(config.data);

					if (cloneData instanceof Array) {
						cloneData.forEach(transformTodo);
					} else if(cloneData instanceof Object) {
						transformTodo(cloneData);
					}

					// set cleaned up clone data to config data for the request
					config.data = cloneData;
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
					} else if (response.data instanceof Object) {
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
