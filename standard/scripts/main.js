$(document).ready(function() {
    $body = $("body"), wsHelpers.init(), cr03.init(), mobileBreadcrumb.init();
});

var wsHelpers = {
    init: function() {
        $body = $("body"), console.log("inited");
    },
    getPseudoContent: function() {
        var pseudoContent = "wsDesktop";
        return window.getComputedStyle && window.getComputedStyle(document.body, "::after") && (pseudoContent = window.getComputedStyle(document.body, "::after").content), 
        this.removeQuotes(pseudoContent);
    },
    isMobile: function() {
        return "wsMobile" == this.getPseudoContent();
    },
    isTablet: function() {
        return "wsTablet" == this.getPseudoContent();
    },
    isDesktop: function() {
        return "wsDesktop" == this.getPseudoContent();
    },
    removeQuotes: function(string) {
        return ("string" == typeof string || string instanceof String) && (string = string.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, "")), 
        string;
    }
}, cr03 = {
    openClass: "isNavOpen",
    $elem: {},
    $toggle: {},
    init: function() {
        this.$elem = $("#hd .nav--global").on("click", function(event) {
            event && $body.hasClass(cr03.openClass) && event.stopPropagation();
        }), $body = $body || $("body"), this.$toggle = $("<button>", {
            "class": "nav__toggle"
        }).on("click", function(event) {
            event && (event.stopPropagation(), event.preventDefault()), $body.hasClass(cr03.openClass) ? cr03.closeNav() : cr03.openNav();
        }).insertBefore(this.$elem), $("<i>", {
            "class": "icon-reorder"
        }).prependTo(this.$toggle), $("<span>", {
            "class": "offScreen"
        }).appendTo(this.$toggle), $("#hd .sfsearchBox").on("click", function(event) {
            event && event.stopPropagation();
        }), $body.on("click", function(event) {
            event && $body.hasClass(cr03.openClass) && event.preventDefault(), cr03.closeNav();
        }), this.applyHomeIcon(), console.log("derp");
    },
    closeNav: function() {
        wsHelpers.isDesktop() || $body.removeClass(cr03.openClass);
    },
    openNav: function() {
        $body.addClass(cr03.openClass);
    },
    applyHomeIcon: function() {
        var $icon = $("<i>", {
            "class": "icon-home"
        }), $span = $("<span>", {
            "class": "home__text"
        }), $home = this.$elem.find("a[href$='home']");
        $home.wrapInner($span).prepend($icon);
    }
}, mobileBreadcrumb = {
    init: function() {
        var $parentLink = $("#bd .nav--breadcrumb--aa .breadcrumb--current").prev(), $backTo = $("<span>", {
            "class": "mobileBackTo",
            text: "back to "
        });
        $parentLink.addClass("breadcrumb--parent").find("a").prepend($backTo);
    }
};
//# sourceMappingURL=main.js.map