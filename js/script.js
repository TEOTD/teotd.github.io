$(document).ready(function () {

  /* For the sticky navigation */
  $('.js--section-about').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });


  /* Scroll on buttons */
  $('.js--scroll-to-about').click(function () {
    $('html, body').animate({
      scrollTop: $('.js--section-about').offset().top
    }, 1000);
  });

  $('.js--scroll-to-popup').click(function () {
    document.querySelector('.popup').style.opacity = '1';
    document.querySelector('.popup').style.visibility = 'visible';
  });

  $('.popup__close').click(function () {
    document.querySelector('.popup').style.opacity = '0';
    document.querySelector('.popup').style.visibility = 'hidden';
  });


  /* Navigation scroll */
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
});
