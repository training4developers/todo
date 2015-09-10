(function(angular) {

	angular.module("ToDo.Constants")
		.constant("TemplateBaseURL", "/ng/partials/")
		.constant("ToDosRepositoryURL", "/api/todos")
		.constant("SiteName", "ToDos")
		.constant("CopyrightNotice", "&copy; " + new Date().getFullYear() + " Training 4 Developers, Inc.");

})(angular);
