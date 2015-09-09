(function(angular) {

	todoSvc.$inject = ["$http", "$log"];

	function todoSvc($http, $log) {

		function handleError(result) {
			$log.log(JSON.stringify(result));
			return result;
		}

		return {

			getAll: function() {
				return $http.get("/api/todos")
					.catch(handleError);
			},

			update: function(todo) {
				return $http.put("/api/todos/" + encodeURIComponent(todo.id), todo)
					.catch(handleError);
			},

			insert: function(todo) {
				return $http.post("/api/todos", todo)
					.catch(handleError);
			},

			delete: function(todo) {
				return $http.delete("/api/todos/" + encodeURIComponent(todo.id))
					.catch(handleError);
			},

			get: function(todo) {
				return $http.get("/api/todos/" + encodeURIComponent(todo.id))
					.catch(handleError);
			}

		};

	}

	angular.module("ToDo.Services")
		.factory("ToDoApi", todoSvc);

})(angular);
