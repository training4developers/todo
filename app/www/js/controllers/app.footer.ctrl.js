(function(angular) {

	footerCtrl.$inject = ["$scope", "CopyrightNotice"];

	function footerCtrl($scope, CopyrightNotice) {
		$scope.copyrightNotice = CopyrightNotice;
	}

	angular.module("ToDo.Controllers")
		.controller("FooterCtrl", footerCtrl);

})(angular);
