$(document).ready(function () {
  // console.log("ready");
  $("img").click(function () {
    $(this).hide();
  });
  $("button").click(function () {
    // console.log("c");
    $("img").show("slow");
  });
});
