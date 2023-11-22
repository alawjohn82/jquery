$(document).ready(function () {
  var init = "";
  $("img").hover(
    function () {
      init = $(this).attr("src");
      $(this).attr("src", $(this).attr("data-alt-src"));
    },
    function () {
      $(this).attr("src", init);
    }
  );
});

// Tablesorter
// A jQuery Plugin that allows you to sort table data. It's an awesome tool!
// https://mottie.github.io/tablesorter/docs/
// Tipped
// Tipped allows you to easily create beautiful tooltips using the jQuery Javascript library.
// https://www.tippedjs.com/documentation
// Tipsy
// Another tooltip plugin that imitates the Facebook tooltip using CSS and jQuery.
// https://github.com/jaz303/tipsy
