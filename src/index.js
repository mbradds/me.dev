import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/main.css";

function openTab(evt, sectionName) {
  evt.preventDefault(); // stops the page from autoscrolling to fit tab content.
  const requestedSectionId = evt.target.id;
  // unselect work dropdowns when moving to other tabs.
  const workDropdowns = [
    "work-articles-tab",
    "work-software-tab",
    "rfd-articles-tab",
  ];
  if (!workDropdowns.includes(requestedSectionId)) {
    document.querySelectorAll(".dropdown-item").forEach((drop) => {
      const d = drop;
      d.className = d.className.replace(" active", "");
    });
  }

  // only allow one drop down tab to be "active"
  workDropdowns.forEach((drop) => {
    if (drop !== requestedSectionId) {
      document.getElementById(drop).classList.remove("active");
    }
  });

  document.querySelectorAll(".section").forEach((section) => {
    section.style.display = "none";
  });
  Array.from(document.getElementsByClassName("nav-link")).forEach((tab) => {
    tab.className = tab.className.replace(" active", "");
  });

  document.getElementById(sectionName).style.display = "block";
  evt.target.className += " active";
}

function meOnLoad() {
  window.openTab = openTab;
}

meOnLoad();
