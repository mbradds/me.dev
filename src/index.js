import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import articleInfo from "./articles.json";

function openTab(evt, sectionName) {
  evt.preventDefault(); // stops the page from autoscrolling to fit tab content.
  const sections = document.querySelectorAll(".section");
  const tablinks = document.getElementsByClassName("nav-link");
  const requestedSectionId = evt.target.id;

  // unselect work dropdowns when moving to other tabs.
  if (
    requestedSectionId !== "work-articles-tab" &&
    requestedSectionId !== "work-software-tab"
  ) {
    document.querySelectorAll(".dropdown-item").forEach((drop) => {
      const d = drop;
      d.className = d.className.replace(" active", "");
    });
  }

  // only allow one drop down tab to be "active"
  if (requestedSectionId === "work-articles-tab") {
    document.getElementById("work-software-tab").classList.remove("active");
  }

  if (requestedSectionId === "work-software-tab") {
    document.getElementById("work-articles-tab").classList.remove("active");
  }

  sections.forEach((section) => {
    const s = section;
    s.style.display = "none";
  });
  tablinks.forEach((tab) => {
    const t = tab;
    t.className = tab.className.replace(" active", "");
  });

  document.getElementById(sectionName).style.display = "block";
  const e = evt;
  e.target.className += " active";
  return false;
}

function loadArticles() {
  let articleListHtml = ``;
  let [minorCount, majorCount] = [0, 0];
  articleInfo.forEach((page) => {
    let colorClass = "alert-secondary";
    if (page.type === "minor") {
      colorClass = "alert-secondary";
      minorCount += 1;
    } else if (page.type === "major") {
      colorClass = "alert-success";
      majorCount += 1;
    }
    articleListHtml += `<div class="alert ${colorClass} mb-4" role="alert">
    <h4 class="alert-heading mb-3">${page.name}</h4>
    <p class="lead">Keywords: ${page.keyWords}</p>`;
    if (page.note) {
      articleListHtml += `<p class="lead">Note: ${page.note}</p>`;
    }
    articleListHtml += `<hr />
    <div class="d-flex justify-content-between">
      <a
        class="mb-0"
        href="${page.link}"
        target="_blank"
      >Read in new tab</a>
      <span>Release Date: ${page.releaseDate}</span>
    </div>
  </div>`;
  });

  document.getElementById("articles-flags").innerHTML = articleListHtml;
  document.getElementById(
    "minor-articles-count"
  ).innerHTML = `<strong>${minorCount}</strong> minor articles released`;
  document.getElementById(
    "major-articles-count"
  ).innerHTML = `<strong>${majorCount}</strong> major articles released`;
}

function meOnLoad() {
  window.openTab = openTab;
  loadArticles();
}

meOnLoad();
