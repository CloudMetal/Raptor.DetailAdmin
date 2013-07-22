$(function () {
    // sidebar arrow injection
    $('#dashboard-menu > li.active > a').append('<div class="pointer"><div class="arrow"></div><div class="arrow_border"></div></div>');

    // bootstrap tab injection
    $('ul.localmenu > li.first').parent('ul').addClass('nav nav-tabs');

    // select2 injection
    $('select').select2({
        width: 'element'
    });

    // uniform injection
    $('input[type="checkbox"], input[type="file"], input[type="radio"]').uniform();

    // bootstrap alert injection
    $('.message-Information').addClass('alert alert-success');
    $('.message-Warning').addClass('alert');
    $('.message-Error').addClass('alert alert-error');
});

// add arrow and dropdown functionality to side menu items with children-WOULD LIKE TO REWRITE THIS USING BOOTSTRAP DROPDOWN
(function ($) {
    $.fn.extend({
        expandoControl: function (getControllees, options) {
            if (typeof getControllees !== "function")
                return this;

            var _this = $(this);
            var __cookieName = "Exp";
            var settings = $.extend({
                path: "/",
                key: _this.selector,
                collapse: false,
                remember: true
            }, options);
            _this.each(function (index, element) {
                var controller = $(element);
                var glyph = $("<i class=\"icon-chevron-right\"></i>");

                glyph.data("controllees", getControllees(controller));

                if (glyph.data("controllees").length === 0 || glyph.data("controllees").height() < 1) {
                    return;
                }

                if ((settings.remember && "closed" === $.orchard.setting(__cookieName, { key: settings.key + "-" + controller.text(), path: settings.path }))
                    || settings.collapse
                    || (controller.closest("li").hasClass("collapsed") && !(settings.remember && "open" === $.orchard.setting(__cookieName, { key: settings.key + "-" + controller.text(), path: settings.path })))) {
                    glyph.addClass("closed").data("controllees").hide();
                }
                else if (settings.collapse) {

                }

                glyph.click(function () {
                    var __this = $(this);

                    if (settings.remember && !settings.collapse) { // remembering closed state as true because that's not the default - doesn't make sense to remember if the controllees are always to be collapsed by default
                        // need to allow specified keys since these selectors could get *really* long
                        $.orchard.setting(__cookieName, !__this.hasClass("closed") ? "closed" : "open", { key: settings.key + "-" + controller.text(), path: settings.path });
                    }

                    if (__this.hasClass("closed") || __this.hasClass("closing")) {
                        __this.data("controllees").slideDown(300, function () { __this.removeClass("opening").removeClass("closed").addClass("open"); });
                        __this.addClass("opening");
                        __this.removeClass("icon-chevron-right").addClass("icon-chevron-down");
                        __this.closest('a').css('border-bottom', '0px').css('box-shadow', 'none');
                    }
                    else {
                        __this.data("controllees").slideUp(300, function () { __this.removeClass("closing").removeClass("open").addClass("closed"); });
                        __this.addClass("closing");
                        __this.removeClass("icon-chevron-down").addClass("icon-chevron-right");
                        __this.closest('a').css('border-bottom', '1px solid #dae1e8').css('box-shadow', '0 2px 1px -1px #FFFFFF');
                    }

                    return false;
                });

                controller.prepend(glyph);
            });

            return this;
        }
    });

    $(".bulk-actions-auto select").change(function () {
        $(this).closest("form").find(".apply-bulk-actions-auto:first").click();
    });

    $("[itemprop~='RemoveUrl']").on("click", function (event) {
        // don't show the confirm dialog if the link is also UnsafeUrl, as it will already be handled in base.js
        if ($(this).filter("[itemprop~='UnsafeUrl']").length == 1) {
            return false;
        }

        return confirm(confirmRemoveMessage);
    });
})(jQuery);