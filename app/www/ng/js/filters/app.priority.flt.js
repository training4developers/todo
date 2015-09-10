(function(angular) {

	priorityFlt.$inject = [];

	function priorityFlt() {

		return function(value) {

			switch(value) {
				case 10:
					return "High";
				case -10:
					return "Low";
				default:
					return "Normal";
			}

		}

	}

	angular.module("ToDo.Filters")
		.filter("priorityLabel", priorityFlt);

})(angular);
