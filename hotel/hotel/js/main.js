$(".slider").slick({
  arrows: false,
  dots: true,
  dotsClass: "slick-dots slider__dots",
  customPaging: function (slick, index) {
    var image = $(slick.$slides[index]).find(".slider__img").attr("src");
    return '<img src="' + image + '" alt="" /> ';
  },
});

$(document).ready(function () {

  $(".cross").hide();
  $(".menu").hide();
  $(".hamburger").click(function () {
    $(".menu").slideToggle("slow", function () {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });

  $(".cross").click(function () {
    $(".menu").slideToggle("slow", function () {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });

});