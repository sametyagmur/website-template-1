$(document).ready(function(){
    $('.portfolio').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  });


  $('.js-scroll-trigger').click(function () {
    $("html, body").animate(
        {
            scrollTop: $("#services").offset().top - 0,
        },
        1000
        
    );
});