(function(angular) {

	factory.$inject = ["$http", "$log", "ToDosRepositoryURL"];

	function handleResponse(results) {
		return results.data;
	}

	function factory($http, $log, ToDosRepositoryURL) {

		return {
			getAll: function() {
				return $http.get(ToDosRepositoryURL).then(handleResponse);
			},
			get: function(id) {
				return $http.get(ToDosRepositoryURL + "/" + encodeURIComponent(id)).then(handleResponse);
			},
			insert: function(todo) {
				return $http.post(ToDosRepositoryURL, todo).then(handleResponse);
			},
			update: function(todo) {
				console.log("update: " + JSON.stringify(todo));
				return $http.put(ToDosRepositoryURL + "/" + encodeURIComponent(todo.id), todo).then(handleResponse);
			},
			save: function(todo) {
				return todo.id ? this.update(todo) : this.insert(todo);
			},
			delete: function(id) {
				return $http.delete(ToDosRepositoryURL + "/" + encodeURIComponent(id)).then(handleResponse);
			}
		};
	}

	angular.module("ToDo.Services")
		.factory("ToDosRepository", factory);

})(angular);
