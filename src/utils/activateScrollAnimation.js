import $ from 'jquery'; 

export function activateScrollAnimation(selector) {
  $(window).scroll(function () {
    var windowScroll = $(this).scrollTop();
    var windowHeight = $(window).height();
    $(selector).each(function () {
      var elementOffset = $(this).offset().top;
      var distance = elementOffset - windowScroll;
      if (distance < windowHeight / 2) {
        $(this).addClass('active');
      }
    });
  });
}
