// Scripts for My Portfolio

$(document).ready(function(){

  $("#down-arrow-desktop").hide().delay(5000).fadeIn(500);
  $("#down-arrow-tablet").hide().delay(3000).fadeIn(500);
  $("#down-arrow-mobile").hide().delay(3000).fadeIn(500);

  // Pulse animation on mouse hover for img links and buttons
  $(".pulse-on-mouseenter").on("mouseenter", function() {
    $(this).toggleClass("animated pulse");
  }).on("mouseleave", function() {
    $(this).toggleClass("animated pulse");
  });

  // Pulse btn on mouse enter for project cards
  // $(".pulse-activator").on("mouseenter", function() {
  //   $(this).find(".launch-btn").toggleClass("animated pulse");
  // }).on("mouseleave", function() {
  //   $(this).find(".launch-btn").toggleClass("animated pulse");
  // });

  // Parallax Effect
  $('.parallax').parallax();

  // Scrollspy Effect
  $('.scrollspy').scrollSpy();

}); // end document ready function