


 $( ".open-close-btn" ).on('click touchstart', function(e) {

  e.preventDefault();
  $(".overlay").toggleClass("overlay-open");
  $("#hamburger-icon").toggleClass("hamburger-open");
});



$(function() {
    $('body').addClass('js');
  
    var $hamburger = $('.hamburger'),
        $nav = $('#site-nav'),
        $masthead = $('#masthead');
  
    $hamburger.click(function() {
      $(this).toggleClass('is-active');
      $nav.toggleClass('is-active');
      $masthead.toggleClass('is-active');
      return false; 
    })

    window.onscroll = function() {scrollFunction()};

    

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("hamburger-icon").style.display = "block";
  } else {
    document.getElementById("hamburger-icon").style.display = "none";
  }
}
});


$(window).scroll(function() {

  if ($(this).scrollTop()>0)
   {
      $('#konform_svg').fadeOut();
   }
  else
   {
    $('#konform_svg').fadeIn();
   }

   
});


$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

window.sr = new ScrollReveal()

sr.reveal("#video_alt_text" ,{
  delay:1000,
  distance:"70px"
});

sr.reveal("#arrow_link" ,{
  delay:1200,
  distance:"70px"
});

sr.reveal(".title" ,{
  delay:1000,
  distance:"70px"
});

sr.reveal(".image_animation" ,{
  delay:1000,
  origin:"top",
  distance:"80px",
  interval:300
}); 

sr.reveal(".card-body" ,{
  delay:1000,
  distance:"70px",
  interval:200
});

sr.reveal("#video" ,{
  delay:1500,
  origin:"left",
  distance:"100px"
});

sr.reveal("#ser_text" ,{
  delay:1200,
  distance:"70px"
});

sr.reveal("#cases_line" ,{
  delay:1000,
  origin:"right",
  distance:"70px"
});

sr.reveal("#video_left" ,{
  delay:200,
  origin:"top",
  distance:"70px"
});

sr.reveal("#musteri_left" ,{
  delay:2000,
  origin:"right",
  distance:"70px"
});

sr.reveal(" #musteri_right p" ,{
  delay:1000,
  distance:"70px"
});

sr.reveal("#must_logo img" ,{
  delay:1000,
  origin:"top",
  distance:"80px",
  interval:100
});