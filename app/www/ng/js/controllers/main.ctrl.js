(function(angular) {

	controller.$inject = ["$scope", "ToDosRepository", "Events"];

	function controller($scope, ToDosRepository, Events) {

		$scope.saveToDo = function(todo) {
			ToDosRepository.update(todo);
		};

		$scope.refreshToDos = function() {
			Events.trigger("refresh-todos");
		};

		Events.on("refresh-todos", function() {
			ToDosRepository.getAll().then(function(result) {
				$scope.todos = result.data;
			});
		});

		Events.on("find-todos-by-task", function(findToDosByTask) {
			$scope.findToDosByTask = findToDosByTask;
		});

		$scope.refreshToDos();
	}

	angular.module("ToDo.Controllers")
		.controller("main", controller);

})(angular);
