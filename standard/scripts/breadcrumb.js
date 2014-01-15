/*
* this does some javascript
*/
var mobileBreadcrumb = {
	init: function() {
		var $parentLink = $("#bd .nav--breadcrumb--aa .breadcrumb--current").prev(),
			$backTo = $("<span>", {
				"class": "mobileBackTo",
				"text": "back to "
			});

		$parentLink.addClass("breadcrumb--parent").find("a").prepend($backTo);
	}
};