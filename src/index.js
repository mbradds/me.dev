import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

function openTab(evt, sectionName) {
  var i, tablinks;
  var sections = document.querySelectorAll(".section");
  for (var s = 0; s < sections.length; s++) {
    sections[s].style.display = "none";
  }
  tablinks = document.getElementsByClassName("nav-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(sectionName).style.display = "block";
  evt.target.className += " active";
}

window.openTab = openTab;
