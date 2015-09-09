(function(angular) {

	headerCtrl.$inject = ["$scope", "SiteName", "Events"];

	function headerCtrl($scope, SiteName, Events) {
		$scope.siteName = SiteName;

		//$scope.$watch("findToDos", function(newValue) {
		//	Events.trigger("find-todos", newValue);
		//});

	}

	angular.module("ToDo.Controllers")
		.controller("HeaderCtrl", headerCtrl);

})(angular);
