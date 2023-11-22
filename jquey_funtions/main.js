$(document).ready(function () {
  // $("#addclass button").click(function() {
  //     $('#addclass p').addClass('red')
  // })

  let count = 0;

  $("#addclass button").click(function () {
    // if ($('.first_p').hasClass('red')) {
    //   $(".first_p").removeClass("red");
    //   $(".first_p").addClass("yellow");
    // } else {
    //   $(".first_p").removeClass("yellow");
    //   $(".first_p").addClass("red");
    // }

    if (count === 0) {
      // $(".first_p").removeClass("yellow");
      $(".first_p").addClass("red");
      $("#append").append(`<p>My count is ${count}</p>`);
      count += 1;
    } else {
      $(".first_p").removeClass("red");
      $("#append").append(`<p>My count is ${count}</p>`);
      // $(".first_p").addClass("yellow");
      count = 0;
    }
  });
  $("#slidetoggle button").click(function () {
    $(".second_p").toggle();
    // $("#append p").fadeOut();
  });
  $("#append button").click(function () {
    $("#append").append("<p>My name is John</p>");
  });

  var x = $("#html").html();
  //   console.log(x);
  $("#slidetoggle button").click(function () {
    $("#html label").html("my form label");
  });
  $("#append button").click(function () {
    $("#addclass img").attr({ alt: "test png", src: "test.pg" });
    // $("#addclass img").hide();
  });
  $("#append button").click(function () {
    $("#html input").val("john doen");
  });
});
