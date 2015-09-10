$(function() {

  $(document).foundation();

	var todoDetailsModal = $("#todoDetails");

	todoDetailsModal.on("click", "button", function() {
		todoDetailsModal.foundation('reveal', 'close');
	});

	angular.bootstrap($("body"), ["ToDo"]);

});
