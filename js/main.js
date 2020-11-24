$(function() {
	'use strict'
	var winH = $(window).height();
	    $('.style').height(winH);		
});


$('.carousel-about').carousel({
  interval: 2000
});


$('.carousel-cv').carousel({
  interval: 11000
});

$('.carousel-main').carousel({
  interval: 11000
})



$(function () {
  var lastScrollTop = 0;
  var $navbar = $('.navbar');
  var navbarHeight = $navbar.outerHeight();
  var movement = 0;
  var lastDirection = 0;

  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    movement += st - lastScrollTop;

    if (st > lastScrollTop) { // scroll down
      if (lastDirection != 1) {
        movement = 0;
      }
      var margin = Math.abs(movement);
      if (margin > navbarHeight) {
        $('.navbar-collapse').collapse('hide');
        margin = navbarHeight;
      }
      margin = -margin;
      $navbar.css('margin-top', margin+"px")

      lastDirection = 1;
    } else { // scroll up
      if (lastDirection != -1) {
        movement = 0;
      }
      var margin = Math.abs(movement);
      if (margin > navbarHeight) {
      	$('.navbar-collapse').collapse('hide');

        margin = navbarHeight;
      }
      margin = margin-navbarHeight;
      $navbar.css('margin-top', margin+"px")

      lastDirection = -1;
    }
    lastScrollTop = st;
    // console.log(margin);
  });
});
//hide nav
$(window,"nav a").on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$(function () {
//scroll coler
    function scrollSpy() {
      var sections = ['home', 'cv', 'mapping', 'Portfolio','services','blog','about', 'contact'];
      var current;
      for (var i = 0; i < sections.length; i++) {
        if ( $('#'+sections[i]).offset().top <= $(window).scrollTop() ) {
          current = sections[i];
        }
      }
      $("nav a[href='#"+current+"']").addClass('active');
      $("nav a").not("a[href='#"+current+"']").removeClass('active');      
    }
    //scroll top$down
    $("nav a, .main a").click( function() { 
      var target = $(this).attr("href");
      $("body, html").animate({
        scrollTop: $(target).offset().top
      }, 1000);
      return false;
    });
  //scrollSpy call
    $(document).ready( function() {
      scrollSpy();
    });

    $(window).scroll( function() {
      scrollSpy();
    });
});



var $btnTop = $(".scrol")
$(window).on("scroll", function() {
  if ($(window).scrollTop() >= $(window).height()) {
    $btnTop.fadeIn();
  } else {
    $btnTop.fadeOut();
  }
});

$btnTop.on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});

//uplod
$(document).on('change', '.btn-file :file', function() {
  var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  input.trigger('fileselect', [numFiles, label]);
});

$(document).ready( function() {
    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
        
        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;
        
        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
        
    });
});
