$(function() {
  $(".switch_btn").on("click", "p", function() {
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
    $(".veiw").toggleClass("active");
  });

  $("body").on("click", ".nav>li", function() {
    $(".nav>li").removeClass("active");
    $(this).addClass("active");
  });
});
