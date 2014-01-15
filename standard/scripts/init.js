// Code for generic (shared) functionality...
// Specific control functionality MUST be kept inside the .ascx
// Ensure code inside doc.ready is SHORT.
// If it needs to be long (>5 lines) split it out into a function and put the function at the bottom of this script file
$(document).ready(function () {
	// get the body once as a global so we can reference it in any function
	$body = $("body");
	
	wsHelpers.init();

	// global nav
	cr03.init();

	mobileBreadcrumb.init();
});