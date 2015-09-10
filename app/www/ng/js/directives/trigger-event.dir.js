(function(angular) {

	directive.$inject = ["Events"]

	function directive(Events) {

		return {
			require: "ngModel",
			link: function(scope, element, attrs, ctrl) {
				ctrl.$parsers.push(function(value) {
					Events.trigger(attrs["triggerEvent"], value);
					return value;
				});
			}
		};

	}

	angular.module("ToDo.Directives")
		.directive("triggerEvent", directive);

})(angular);
