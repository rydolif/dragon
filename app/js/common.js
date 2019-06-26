$(function() {


//------------------------------slider menu-----------------------------
  var swiper = new Swiper('.menu__slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    993: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
  });

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('.nav').toggleClass('nav--active');
    $('.header').toggleClass('header--menu');
  });


//------------------------------гамбургер-----------------------------
  $('.navigation__hamburger').click(function() {
    $(this).toggleClass('navigation__hamburger--active');
    $('.navigation').toggleClass('navigation--active');
  });

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>10){
          $('.header').addClass('header--active');
      }
      else if ($(this).scrollTop()<10){
          $('.header').removeClass('header--active');
      }
  });

  if($(this).scrollTop()>10){
      $('.header').addClass('header--active');
  }

//-------------------------скорость якоря---------------------------------------
  $(".header__list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 60}, 'slow', 'swing');
  });


  
});
