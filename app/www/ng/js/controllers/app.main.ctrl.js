(function(angular) {

	mainCtrl.$inject = ["$scope", "ToDoApi", "Events"];

	function mainCtrl($scope, ToDoApi, Events) {

		$scope.saveToDo = function(todo) {
			ToDoApi.update(todo);
		};

		Events.on("refresh-todo", function() {
			ToDoApi.getAll().then(function(result) {
				$scope.todos = result.data;
			});
		});

		Events.on("find-todos", function(findToDos) {
			$scope.findToDos = findToDos;
		});


		$scope.refreshToDo = function() {
			Events.trigger("refresh-todo");
		}

		$scope.refreshToDo();
	}

	angular.module("ToDo.Controllers")
		.controller("MainCtrl", mainCtrl);

})(angular);
