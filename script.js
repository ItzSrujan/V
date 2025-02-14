$(document).ready(function () {
  $(".title").click(function () {
      $(".container").addClass("open");
      $(".endtext").fadeIn(1000); // Smooth fade-in effect for message
  });

  $(".close").click(function () {
      $(".container").removeClass("open");
      $(".endtext").fadeOut(500); // Smooth fade-out effect
  });
});
