(function(angular) {

	mainCtrl.$inject = ["$scope", "ToDoApi", "Events"];

	function mainCtrl($scope, ToDoApi, Events) {

		$scope.saveToDo = function(todo) {
			ToDoApi.update(todo);
		};

		ToDoApi.getAll().then(function(result) {
			$scope.todos = result.data;
		});

		Events.on("find-todos", function(findToDos) {
			$scope.findToDos = findToDos;
		});

	}

	angular.module("ToDo.Controllers")
		.controller("MainCtrl", mainCtrl);

})(angular);
