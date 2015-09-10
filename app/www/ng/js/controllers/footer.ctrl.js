(function(angular) {

	controller.$inject = ["$scope", "CopyrightNotice"];

	function controller($scope, CopyrightNotice) {
		$scope.copyrightNotice = CopyrightNotice;
	}

	angular.module("ToDo.Controllers")
		.controller("footer", controller);

})(angular);
