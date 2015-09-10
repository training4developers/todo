(function(angular) {

	if (!String.prototype.startsWith) {
	  String.prototype.startsWith = function(searchString, position) {
	    position = position || 0;
	    return this.indexOf(searchString, position) === position;
	  };
	}

	angular.module("ToDo.Constants", []);
	angular.module("ToDo.Services", ["ToDo.Constants"]);
	angular.module("ToDo.Filters", ["ToDo.Constants"]);
	angular.module("ToDo.Controllers", ["ToDo.Constants"]);
	angular.module("ToDo.Directives", ["ToDo.Constants"]);
	angular.module("ToDo", [
		"ngSanitize",
		"ToDo.Services",
		"ToDo.Filters",
		"ToDo.Controllers",
		"ToDo.Directives"
	]);

})(angular);
