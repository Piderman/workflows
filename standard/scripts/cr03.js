/*
* mobile nav guy, also handles the home icon
* also more about what this does
*/
var cr03 = {
	openClass : "isNavOpen",
	$elem : {},
	$toggle : {},

	init: function() {
		this.$elem = $("#hd .nav--global").on("click", function(event) {

			// stop this bubbling up and closing the nav again lol
			if (event && $body.hasClass(cr03.openClass)) {
				event.stopPropagation();
			}
		});

		// fallback incase it doesn't exist
		$body = $body || $("body");

		this.$toggle = $("<button>", {
			"class" : "nav__toggle"
		}).on("click", function(event) {
			if (event) {
				event.stopPropagation();
				event.preventDefault();
			}

			// @todo: move out of here
			($body.hasClass(cr03.openClass)) ? cr03.closeNav() : cr03.openNav();
		}).insertBefore(this.$elem);

		// add the icon
		$("<i>", {
			"class" : "icon-reorder"
		}).prependTo(this.$toggle);

		// add text helper
		$("<span>", {
			"class" :"offScreen"
		}).appendTo(this.$toggle)


		// forgot the search
		$("#hd .sfsearchBox").on("click", function(event){
			if (event) event.stopPropagation();
		});

		// close when clicking off
		$body.on("click", function(event) {

			// make sure we cant do anything in the body when open
			if (event && $body.hasClass(cr03.openClass)) {
				event.preventDefault();
			}
			
			cr03.closeNav();

		});



		this.applyHomeIcon();

		console.log("derp");
	},

	closeNav : function() {
		if (!wsHelpers.isDesktop()) {
			$body.removeClass(cr03.openClass);
		}
	},

	openNav : function() {
		$body.addClass(cr03.openClass);
	},

	// makes an icon and wraps the text of hidding when needed
	applyHomeIcon : function () {
		var $icon = $("<i>", {
				"class" : "icon-home"
			}),
			$span = $("<span>", {
				"class" : "home__text"
			}),
			$home = this.$elem.find("a[href$='home']");

		$home.wrapInner($span).prepend($icon);
	}
};