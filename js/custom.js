/**
 * Updated Alex Baker 2021
 * jquery 3.6.0
 * 
 */

$(window).on("load", function () {

    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(550).css({
        'overflow': 'visible'
    });


    // input
    $(".input-contact input, .textarea-contact textarea").on("focus", function () {
        $(this).next("span").addClass("active");
    });
    $(".input-contact input, .textarea-contact textarea").on("blur", function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });

});