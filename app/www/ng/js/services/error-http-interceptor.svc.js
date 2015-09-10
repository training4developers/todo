(function(angular) {

	"use strict";

	factory.$inject = ["$q", "$log"];

	function factory($q, $log) {

		return {

			responseError: function(rejection) {
		    if(rejection.status === 500){
					$log.log(JSON.stringify(rejection));
		    }
		    return $q.reject(rejection);
      }
		};

	}

	angular.module("ToDo.Services")
		.factory("ErrorHttpInterceptor", factory);

})(angular);
