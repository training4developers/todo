(function(angular) {

	directive.$inject = [
		"$templateRequest", "$compile", "ToDosRepository",
		"$q", "Events", "TemplateBaseURL"
	];

	function directive(
		$templateRequest, $compile, ToDosRepository,
		$q, Events, TemplateBaseURL
	) {

		function cleanUpModal(rootElement, completedFn) {
			console.dir(rootElement.foundation('reveal', 'close'));
			rootElement.remove();
			completedFn();
		}

		return {
			scope: {
				todoId: "@todoEdit",
				completed: "&todoEditComplete"
			},
			link: function(scope, element, attrs) {

				var rootElement;

				scope.modalHeader = scope.todoId ? "Edit ToDo" : "New ToDo";

				scope.saveToDo = function(todo) {
					if (todo.id) {
						ToDosRepository.update(todo);
					} else {
						ToDosRepository.insert(todo);
					}
					cleanUpModal(rootElement, scope.completed);
				};

				scope.cancelToDo = function(todo) {
					cleanUpModal(rootElement, scope.completed);
				};

				scope.deleteToDo = function(todo) {
					if (confirm("Are you sure you are a quitter?")) {
						ToDosRepository.delete(todo.id);
						cleanUpModal(rootElement, scope.completed);
					}
				};

				function runModal() {

					function getTodo() {
						if (scope.todoId) {
							return ToDosRepository.get(scope.todoId);
						} else {
							return {
								data: {
									dueDate: new Date(),
									priority: 0,
									completed: false
								}
							};
						}
					}

					$q.all([
						getTodo(),
						$templateRequest(TemplateBaseURL + "todo-edit.html")
					]).then(function(results) {

						scope.todo = results[0].data;
						if (!(scope.todo.dueDate instanceof Date)) {
							scope.todo.dueDate = new Date(scope.todo.dueDate);
						}
						rootElement = $compile(results[1])(scope);

						scope.priorityList = [
							{ value:10, caption:"High" },
							{ value:0, caption:"Normal" },
							{ value:-10, caption:"Low" },
						];

						$("body").append(rootElement);
						rootElement.foundation('reveal', 'open');

					});
				};

				element.on("click", runModal);

				scope.$on("$destroy", function() {
					element.off("click", runModal);
				});

			}

		};

	}

	angular.module("ToDo.Directives")
		.directive("todoEdit", directive);

})(angular);
