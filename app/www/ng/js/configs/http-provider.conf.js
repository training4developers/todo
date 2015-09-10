(function(angular) {

	config.$inject = ["$httpProvider"];

	function config($httpProvider) {
		$httpProvider.interceptors.push('MongoHttpInterceptor');

		if (!angular.isArray($httpProvider.defaults.transformResponse)) {
			$httpProvider.defaults.transformResponse = [
				$httpProvider.defaults.transformResponse
			];
		}

		$httpProvider.defaults.transformResponse.push(function(data, getHeaders, statusCode) {

			if (statusCode != 200) {
				$log.log(statusCode);
				$log.log(JSON.stringify(data));
			};

			return data;

		});
	}

	angular.module("ToDo.Services").config(config);

})(angular);
