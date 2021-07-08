import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import articleInfo from "./articles.json";

function openTab(evt, sectionName) {
  const sections = document.querySelectorAll(".section");
  const tablinks = document.getElementsByClassName("nav-link");

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
}

function loadArticles() {
  let articleListHtml = ``;
  articleInfo.forEach((page) => {
    articleListHtml += `<div class="alert alert-primary mb-4" role="alert">
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
}

function meOnLoad() {
  window.openTab = openTab;
  loadArticles();
}

meOnLoad();
