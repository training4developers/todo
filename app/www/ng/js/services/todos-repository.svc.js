(function(angular) {

	factory.$inject = ["$http", "$log", "ToDosRepositoryURL"];

	function factory($http, $log, ToDosRepositoryURL) {

		function handleError(result) {
			$log.log(JSON.stringify(result));
			return result;
		}

		return {

			getAll: function() {
				return $http.get(ToDosRepositoryURL)
					.catch(handleError).then(function(results) {
						return results;
					});
			},

			update: function(todo) {
				return $http.put(ToDosRepositoryURL + "/" + encodeURIComponent(todo.id), todo)
					.catch(handleError);
			},

			insert: function(todo) {
				return $http.post(ToDosRepositoryURL, todo)
					.catch(handleError);
			},

			delete: function(id) {
				return $http.delete(ToDosRepositoryURL + "/" + encodeURIComponent(id))
					.catch(handleError);
			},

			get: function(id) {
				return $http.get(ToDosRepositoryURL + "/" + encodeURIComponent(id))
					.catch(handleError);
			}

		};

	}

	angular.module("ToDo.Services")
		.factory("ToDosRepository", factory);

})(angular);
