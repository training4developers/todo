(function(angular) {

	filter.$inject = [];

	function filter() {
		return function(value) {
			switch(value) {
				case 10:
					return "High";
				case -10:
					return "Low";
				default:
					return "Normal";
			}
		};
	}

	angular.module("ToDo.Filters")
		.filter("priorityLabel", filter);

})(angular);
