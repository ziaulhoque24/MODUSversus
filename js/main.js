$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 500,
        dots: false,
        responsiveClass:true,
        responsive : {
            0 : {
               items : 1,
            },

            480 : {
                items: 3,

            },

            768 : {
               items: 5,
            },
            991 : {
                items: 6,
            }
        }

    });
    var owl = $('.owl-carousel');
    owl.owlCarousel();
// Go to the next item
    $('.nexticon3').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.prveicon3').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
// for drop down menu
    let ismenuopen = false;
$('.togglebtn').on('click' , function () {
$('.togglebtn').children('span').fadeToggle();
$('.menu').slideToggle();
 ismenuopen= !ismenuopen;
})
$(window).on('resize', function () {
if ($(window).width() > 991.98){
    $('.menu').show();
}
else {
    if (ismenuopen){
        $('.menu').show();
    }else {
        $('.menu').hide();
    }
}
})
    // for search box
    $('.search-icon').on('click', function () {
        $('.searchbox').slideToggle();
        $('.protfolio-content').hide();
    })
    // dropdown menu
    $('.protfoliobtn').click(function () {
$('.protfolio-content').slideToggle();
        $('.searchbox').hide();
    })

});


