// Define a media query for screens less than 360px
var mediaQuery = window.matchMedia("(max-width: 160px)");

// Define a function to handle the media query change
function handleViewportChange(mediaQuery) {
  if (mediaQuery.matches) {
    alert("The device size is less than 360px! Nothing will show on the screen.");
  }
}

//  Sticky navigation
window.onscroll = function () {myFunction()};
var navbar = document.getElementById("navs-area");
var sticky = navbar.offsetTop;
function myFunction() {
  if(window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    navbar.style.width = "100%";
  }
  else {
    navbar.classList.remove("sticky");
    navbar.style.width = "85%";
  }
}