$(function() {
  console.log("123");
  $(".switch_btn").on("click", "p", function() {
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
    $(".veiw").toggleClass("active");
  });
});
