$(function() {
  $("body").on("click", ".nav>li", function() {
    if ($(this).hasClass("active")) {
      $(".nav>li").removeClass("active");
    } else {
      $(".nav>li").removeClass("active");
      $(this).addClass("active");
    }
  });

  $("body").on("click", ".menu", function() {
    $(this).toggleClass("open");
    $("body")
      .find(".nav")
      .toggleClass("open");
  });

  $(".logo").on("click", function() {
    window.location.href = "/";
  });
});
