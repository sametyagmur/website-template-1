$(document).ready(function(){
    $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });




  
  });


  $('.js-scroll-trigger').click(function () {
      var linkHref = $("this").attr("href");
    $("html, body").animate(
        {
            scrollTop: $("this").offset().top - 0,
        },
        
        1000
        
    );
});

