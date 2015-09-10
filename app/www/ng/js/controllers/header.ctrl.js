(function(angular) {

	controller.$inject = ["$scope", "SiteName", "Events"];

	function controller($scope, SiteName, Events) {
		$scope.siteName = SiteName;
	}

	angular.module("ToDo.Controllers")
		.controller("header", controller);

})(angular);
