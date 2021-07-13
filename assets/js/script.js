AOS.init();

// Position Changing Function
var positions = ["a web developer", "a data analyst", "a cloud engineer", "a graphics designer"];
var position = document.getElementById("position");
var i = 0;
function positionChange() {
  if (i < positions.length + 1) {
    $("#position").html(positions[i]);
    setTimeout(positionChange, 1500);
    i++;
    if (i == positions.length) {
      i = 0;
    }
  }
}

positionChange();

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

console.log("Glad to see you here!");