(function(angular) {

	config.$inject = ["$httpProvider"];

	function config($httpProvider) {
		$httpProvider.interceptors.push('ErrorHttpInterceptor');
		$httpProvider.interceptors.push('MongoHttpInterceptor');
	}

	angular.module("ToDo.Services").config(config);

})(angular);
