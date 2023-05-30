var cursor = document.querySelector(".cursor");
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

document.addEventListener("mousemove", function(e) {
  var x = e.pageX;
  var y = e.pageY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  cursor.style.background = "linear-gradient(to right, " + randomColor + ")";
});
