$(function () {
    // set main content area to same height as dashboard menu
    $('#main').css('min-height', ($('#dashboard-menu').height() - 50) + 'px');

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
    $('.checker').parent('div').css('margin-bottom', '10px');

    // bootstrap alert injection
    $('.message-Information').addClass('alert alert-success');
    $('.message-Warning').addClass('alert');
    $('.message-Error').addClass('alert alert-error');
});

// sidebar menu dropdown toggle
$("#dashboard-menu .dropdown-toggle").closest('li').hover(function (e) {
    e.preventDefault();
    var $item = $(this);
    $item.toggleClass("active");
    if ($item.hasClass("active")) {
        $item.find(".submenu").slideDown("fast");
        $item.find(".icon-chevron-right").removeClass("icon-chevron-right").addClass("icon-chevron-down");
    } else {
        $item.find(".submenu").slideUp("fast");
        $item.find(".icon-chevron-down").removeClass("icon-chevron-down").addClass("icon-chevron-right");
    }
});

// add arrow and dropdown functionality to side menu items with children-WOULD LIKE TO REWRITE THIS USING BOOTSTRAP DROPDOWN
(function ($) {
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