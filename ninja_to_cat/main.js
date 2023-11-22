$(document).ready(function () {
  // var init = "";
  $("img").click(function () {
    // console.log("data-alt-src value is", $(this).attr("data-alt-src"));
    // var x = $(this).attr("data-alt-src");

    // var init = $(this).attr("src");
    // $(this).attr("src", $(this).attr("data-alt-src"));
    // $(this).attr("data-alt-src", init);

    $(this).attr({
      src: $(this).attr("data-alt-src"),
      "data-alt-src": $(this).attr("src"),
    });
  });
});
