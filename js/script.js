$(document).ready(function() {  
  // TypewriterJS 
  typing = document.getElementById('typing');

  let typewriter = new Typewriter(typing, {
      loop: true
  });

  typewriter.typeString('Technology.')
      .pauseFor(2500)
      .deleteAll()
      .pauseFor(500)
      .typeString('Inovation.')
      .pauseFor(2500)
      .deleteAll()
      .pauseFor(500)
      .typeString('Quality.')
      .pauseFor(2500)
      .deleteAll()
      .pauseFor(500)
      .start();  
  
  // Activate animation when user scroll down the page. 
  // Same when scroll to top.
  let scroll_start = 0;
  let startchange = $('#header');
  let offset = startchange.offset();

  if (startchange.length) {
    $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();

      if(scroll_start > offset.top) {
        $('.navbar').css('animation-name', 'navbar-fill');
        $('.navbar-logo').css('animation-name', 'logo-small');
        $('.navbar-brand').css('animation-name', 'brand-small');
      } else {
        $('.navbar').css('animation-name', 'navbar-transparent');
        $('.navbar-logo').css('animation-name', 'logo-big');
        $('.navbar-brand').css('animation-name', 'brand-big');
      }
    });
  }

  // Init Scrollspy
  $('body').scrollspy({ target: '#main-nav', offset: 50 });

  // Smooth Scrolling
  $("#main-nav a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        window.location.hash = hash;
      });
    }
  });

  // Disable hover pause in Bootstrap Carousel
  $('.carousel').carousel({ pause: false });
});

