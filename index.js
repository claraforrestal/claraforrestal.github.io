$(document).ready(function(){

    // Transition effect for navbar 
    $(window).scroll(function() {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if($(this).scrollTop() > 51) { 
            $('nav.navbar.transparent').removeClass('transparent');
        } else {
            $('nav.navbar').addClass('transparent');
        }
      });
  });