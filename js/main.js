var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

// Script for showing arrow-to-top
   
$(document).ready(function(){
        

        $(window).scroll(function(){
          if($(this).scrollTop()> 680){
            $('.arrow-to-top').fadeIn();
          }else{
            $('.arrow-to-top').fadeOut();
          }
        });



// sroll up after click on arrow

     $('.arrow-to-top').click(function(event){
      event.preventDefault();
    $('html').animate({scrollTop: 0}, 400)});

  $('.icon-bottom').on('click',function(){
    var pos= $(window).scrollTop() + $('.content-wrap').height();
    $('html').animate({'scrollTop' : pos},1000);
  });

});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
