/*
* @todo: science dog 
* wat
*/
var wsHelpers = {
	init : function() {
		// cache le body
		$body = $("body");
	},

    getPseudoContent: function () {
        //IE8 can't do getoOmputedStyle and is useless, and i'd like a default anyway
        //So default to "desktop"
        var pseudoContent = "wsDesktop";

        if ( window.getComputedStyle && window.getComputedStyle(document.body, '::after') ) {
            pseudoContent = window.getComputedStyle(document.body, '::after').content;
        }

        return this.removeQuotes(pseudoContent);
    },
	
	isMobile : function() {
		return this.getPseudoContent() == "wsMobile";
	},
	isTablet : function() {
		return this.getPseudoContent() == "wsTablet";
	},
	isDesktop : function() {
		return this.getPseudoContent() == "wsDesktop";
	},

	// @fixme: what's happening here?
    removeQuotes: function(string) {
        if (typeof string === 'string' || string instanceof String) {
            string = string.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');
        }

        return string;
    }
}