$(document).ready(function () {
    $('a:nth-child(1)').click(function () {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 600);
    });
    $('a:nth-child(2)').click(function () {
        $('html, body').animate({
            scrollTop: $(".work-container").offset().top
        }, 600);
    });
    $('a:nth-child(3)').click(function () {
        $('html, body').animate({
            scrollTop: $(".Contact").offset().top
        }, 600);
    });
    $('body').addClass('js');
    var $menu = $('#menu'),
        $menulink = $('.menu-link');

    $menulink.click(function () {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    }
    )
});