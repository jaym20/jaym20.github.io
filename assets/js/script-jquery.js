window.onload = function () {
  $('.preloader-wrapper').fadeOut();
  $('body').removeClass('overflow-hidden');
  $("#bounce")
  .delay(500)
    .slideUp()
    .slideDown()
    .animate({ fontSize: "100px" }, 500)
    .animate({ fontSize: "50px" });
  $("#name")
    .delay(1000)
    .slideUp()
    .slideDown()
    .animate({ fontSize: "50px" }, "fast")
    .animate({ fontSize: "70px" });
  $("#positionBox")
    .delay(1500)
    .slideUp()
    .slideDown()
    .animate({ fontSize: "70px" }, "fast")
    .animate({ fontSize: "50px" });
};

// $(document).keydown(function (event) {
//     if (event.keyCode == 123) { // Prevent F12
//         return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
//         return false;
//     }
// });

$("#mob-icon").click(() => {
  if ($("#mob-icon").html() == "×") {
    $("#mob-icon").html("+");
    $(".pop-nav").fadeToggle("fast");
  } else {
    $("#mob-icon").html("×");
    $(".pop-nav").fadeToggle("fast");
  }
});
