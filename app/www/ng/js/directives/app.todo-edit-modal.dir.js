(function(angular) {

	todoEditModalDir.$inject = ["$templateRequest", "$compile", "ToDoApi", "$q", "Events"];

	function todoEditModalDir($templateRequest, $compile, ToDoApi, $q, Events) {

		function cleanUpModal(rootElement, completedFn) {
			$(rootElement).foundation('reveal', 'close');
			$(rootElement).remove();
			//Events.trigger("refresh-todo");
			completedFn();
		}

		return {
			scope: {
				todoId: "@elcTodoEditModal",
				completed: "&elcTodoEditModalComplete"
			},
			compile: function(tElement, tAttrs) {

				var templateUrl = "partials/todo.edit.html";

				return function(scope, element, attrs) {

					var rootElement;

					if (scope.todoId) {
						scope.modalHeader = "Edit ToDo";
					} else {
						scope.modalHeader = "New ToDo";
					}

					scope.saveToDo = function(todo) {
						if (todo.id) {
							ToDoApi.update(todo);
						} else {
							ToDoApi.insert(todo);
						}
						cleanUpModal(rootElement, scope.completed);
					};

					scope.cancelToDo = function(todo) {
						cleanUpModal(rootElement, scope.completed);
					};

					scope.deleteToDo = function(todo) {
						if (confirm("Are you sure you are a quitter?")) {
							ToDoApi.delete(todo.id);
							cleanUpModal(rootElement, scope.completed);
						}
					};

					function runModal() {

						var todoAPIPromise;

						if (scope.todoId) {
							todoAPIPromise = ToDoApi.get(scope.todoId);
						} else {
							todoAPIPromise = {
								data: {
									due_date: new Date(),
									priority: 0,
									completed: false
								}
							};
						}

						var templatePromise = $templateRequest(templateUrl);

						$q.all([todoAPIPromise, templatePromise]).then(function(results) {

							scope.todo = results[0].data;
							if (!(scope.todo.due_date instanceof Date)) {
								scope.todo.due_date = new Date(scope.todo.due_date);
							}
							rootElement = $compile(results[1])(scope);

							scope.priorityList = [
								{ value:10, caption:"High" },
								{ value:0, caption:"Normal" },
								{ value:-10, caption:"Low" },
							];

							$("body").append(rootElement);
							$(rootElement).foundation('reveal', 'open');

						});
					};

					element.on("click", runModal);

					// remove event handler when scope is being destroyed
					scope.$on("$destroy", function() {
						element.off("click", runModel);
					});

				};
			}

		};

	}

	angular.module("ToDo.Directives")
		.directive("elcTodoEditModal", todoEditModalDir);

})(angular);
