$(function() {
  stickyNav();
  mobileNav();

  $('.js--scroll-to-plans').click(() => {
    $('html, body').animate({
      scrollTop: $('.section-plans').offset().top
    }, 1000);
  })

  $('.js--scroll-to-works').click(() => {
    $('html, body').animate({
      scrollTop: $('.section-steps').offset().top
    }, 1000);
  })

  $('.js--scroll-to-cities').click(() => {
    $('html, body').animate({
      scrollTop: $('.section-cities').offset().top
    }, 1000);
  })

  $('.js--animate-1').waypoint(function() {
    $('.js--animate-1').addClass('animated fadeIn')
  }, {
    offset: '50%'
  })

  $('.js--animate-2').waypoint(function() {
    $('.js--animate-2').addClass('animated fadeInLeft')
  }, {
    offset: '50%'
  })

  $('.js--animate-3').waypoint(function() {
    $('.js--animate-3').addClass('animated fadeIn')
  }, {
    offset: '50%'
  })

  $('.js--animate-4').waypoint(function() {
    $('.js--animate-4').addClass('animated bounce')
  }, {
    offset: '35%'
  })


});



function stickyNav() {
  const features = $('.section-features');
  const nav = $('nav');
  
  features.waypoint(function(direction) {
    if(direction == 'down') {
      nav.addClass('sticky');
    } else {
      nav.removeClass('sticky');
    }
  }, {
    offset: '10%'
  });
}

function mobileNav() {
  const mobileNavIcon = $('.js--nav-icon');
  const icon = $('.js--nav-icon i');
  const mainNav = $('.main-nav');

  mobileNavIcon.click( () => {
    mainNav.slideToggle(200);

    if(icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.removeClass('ion-close-round');
      icon.addClass('ion-navicon-round');
    }
  });

}