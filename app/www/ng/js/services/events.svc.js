(function(angular) {

	factory.$inject = [];

	function factory() {

		var events = [];

		return {
			trigger: function(eventName, eventArgs) {
				if (events[eventName]) {
					events[eventName].forEach(function(eventHandler) {
						eventHandler(eventArgs);
					});
				}
			},
			on: function(eventName, eventHandler) {
				if (!events[eventName]) {
					events[eventName] = [];
				}
				events[eventName].push(eventHandler);
			}
		}
	}

	angular.module("ToDo.Services")
		.factory("Events", factory);

})(angular);
