$(document).ready(function () {
  /*   For the sticky navigation   */

  var waypoint = new Waypoint({
    element: document.querySelector(".section-features"),
    handler: function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    offset: 60,
  });

  /*   Scroll on button   */

  $(".js--scroll-to-plan").click(function () {
    $("html, body").animate(
      { scrollTop: $(".section-plans").offset().top - 50 },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".section-features").offset().top - 50 },
      500
    );
  });

  $(".js--scroll-to-sign-up").click(function () {
    $("html, body").animate(
      { scrollTop: $(".section-sign-up").offset().top - 50 },
      1500
    );
  });

  $(".js--scroll-to-cities").click(function () {
    $("html, body").animate(
      { scrollTop: $(".section-sities").offset().top - 50 },
      1000
    );
  });
  $(".js--scroll-to-how").click(function () {
    $("html, body").animate(
      { scrollTop: $(".section-steps").offset().top - 50 },
      1000
    );
  });
  $(".js--scroll-to-meals").click(function () {
    $("html, body").animate(
      { scrollTop: $(".section-meals").offset().top - 50 },
      1000
    );
  });
  $(".js--scroll-to-home").click(function () {
    $("html, body").animate(
      { scrollTop: $(".section-home").offset().top },
      1000
    );
  });

  /*   Animation on scroll   */

  $(".js--wp-1").waypoint(
    function () {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    { offset: "50%" }
  );

  $(".js--wp-2").waypoint(
    function () {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "50%" }
  );

  $(".js--wp-3").waypoint(
    function () {
      $(".js--wp-3").addClass("animate__animated animate__pulse");
    },
    { offset: "50%" }
  );

  /*   Mobile Nav   */

  $(".js--nav--icon").click(function () {
    var nav = $(".main-nav");
    var icon = $(".js--nav--icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-md-menu")) {
      icon.removeClass("ion-md-menu");
      icon.addClass("ion-md-close");
    } else {
      icon.removeClass("ion-md-close");
      icon.addClass("ion-md-menu");
    }
  });
});
