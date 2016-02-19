(function() {

  'use strict';


  function off() {
      document.getElementById("blink").style.visibility="hidden";
      setTimeout(on, 500);
  }

  function on() {
      document.getElementById("blink").style.visibility="visible";
      setTimeout(off, 500);
  }

  off();

  $(window).scroll(function(){
      $(".intro").css("opacity", 1 - $(window).scrollTop() / 300);
    });

  /*win.scroll(function(){
    scrollPosition = win.scrollTop();
    scrollRatio = 1 - scrollPosition / 300;
    $(".top").css("opacity", scrollRatio);
  */

  $(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: "#main-nav", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $("#main-nav a, #home a").on('click', function(event) {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    });
  });

  $(function() {
    $('body').removeClass('fade-out');
  });


}());
