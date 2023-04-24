//hjelp fra chagpt
// Get the button that opens the menu
var btn = document.getElementById("add-to-cart");

// Get the menu itself
var menu = document.getElementById("see-cart");

// When the user clicks the button, toggle the menu visibility
btn.onclick = function() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}