(function(angular) {

	triggerEventDir.$inject = ["Events"]

	function triggerEventDir(Events) {

		return {
			require: "ngModel",
			link: function(scope, element, attrs, ctrl) {
				ctrl.$parsers.push(function(value) {
					Events.trigger(attrs["elcTriggerEvent"], value);
					return value;
				});
			}
		};

	}

	angular.module("ToDo.Directives")
		.directive("elcTriggerEvent", triggerEventDir);

})(angular);
