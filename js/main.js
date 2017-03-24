// Toggle Classes with Click on buttons

$('.btn-menu').click(function(){
    $(this).toggleClass('is-open');
    $('.modal').toggleClass('is-open');
    $('body').toggleClass('is-open');
});

$('.btn-language').click(function(){
    $('.dropdown').toggleClass('is-open');
});


// Fading Scrolling

$(window).scroll(function(){
  $(".fadeout").css("opacity", 1 - $(window).scrollTop() / 400);
});


// Add/remove Class with scrolling

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".header").addClass("header-fixed");
    } else {
        $(".header").removeClass("header-fixed");
    }
});
