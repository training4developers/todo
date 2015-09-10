(function(angular) {

	controller.$inject = ["$scope", "SiteName", "Events"];

	function controller($scope, SiteName, Events) {
		$scope.siteName = SiteName;

		$scope.refreshToDos = function() {
			Events.trigger("refresh-todos");
		};		
	}

	angular.module("ToDo.Controllers")
		.controller("header", controller);

})(angular);
