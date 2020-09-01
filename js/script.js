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

  /* Mobile navigation */
  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('fa-bars')) {
      icon.addClass('fa-times');
      icon.removeClass('fa-bars');
    } else {
      icon.addClass('fa-bars');
      icon.removeClass('fa-times');
    }
  });
	
$(window).on("load", function () {

    $(".loader .inner").fadeOut(200, function () {
        $(".loader").fadeOut(450);
    });

    var $container = $('.items');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

});
	
});

//function load(url) {
//    // display loading image here...
//    document.getElementById('loadingImg').visible = true;
//    // request your data...
//    var req = new XMLHttpRequest();
//    req.open("POST", url, true);
//
//    req.onreadystatechange = function () {
//        if (req.readyState == 4 && req.status == 200) {
//            // content is loaded...hide the gif and display the content...
//            if (req.responseText) {
//                document.getElementById('content').innerHTML = req.responseText;
//                document.getElementById('loadingImg').visible = false;
//            }
//        }
//    };
//    request.send(vars);
//}
