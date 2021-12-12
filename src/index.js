// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import articleInfo from "./data/articles.json";
import workCodingInfo from "./data/workCode.json";
import personalCodingInfo from "./data/personalCode.json";
import "./css/main.css";

function openTab(evt, sectionName) {
  evt.preventDefault(); // stops the page from autoscrolling to fit tab content.
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

  document.querySelectorAll(".section").forEach((section) => {
    section.style.display = "none";
  });
  Array.from(document.getElementsByClassName("nav-link")).forEach((tab) => {
    tab.className = tab.className.replace(" active", "");
  });

  document.getElementById(sectionName).style.display = "block";
  evt.target.className += " active";
}

function loadArticles() {
  let articleListHtml = ``;
  let [minorCount, majorCount] = [0, 0];
  articleInfo.forEach((page) => {
    let colorClass = "text-secondary";
    let articleType = "Market Snapshot";
    if (page.type === "minor") {
      minorCount += 1;
    } else if (page.type === "major") {
      colorClass = "text-success";
      articleType = "Major Report";
      majorCount += 1;
    }
    articleListHtml += `<div class="card mb-4"><div class="card-body">
    <h4 class="card-title mb-3">${page.name}</h4>
    <h6 class="card-subtitle mb-2 ${colorClass}">${articleType}</h6>
    <p class="lead">Keywords: ${page.keyWords}</p>`;
    if (page.note) {
      articleListHtml += `<p class="lead">Note: ${page.note}</p>`;
    }
    articleListHtml += `<hr />
    <div class="d-flex justify-content-between">
      <a class="mb-0" href="${page.link}" target="_blank">Read in new tab</a>
      <span>Release Date: <strong>${page.releaseDate}</strong></span>
    </div></div>
  </div>`;
  });

  document.getElementById("articles-flags").innerHTML = articleListHtml;
  document.getElementById(
    "minor-articles-count"
  ).innerHTML = `<strong>${minorCount}</strong> Market Snapshots released`;
  document.getElementById(
    "major-articles-count"
  ).innerHTML = `<strong>${majorCount}</strong> Major Reports released`;
}

function loadCodingWork(projectList, div) {
  const languageColors = {
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Handlebars: "#f7931e",
    CSS: "#563d7c",
    HTML: "#e34c26",
    TSQL: "#ccc",
    Shell: "#89e051",
    TypeScript: "#2b7489",
  };
  let codeListHtml = ``;
  projectList.forEach((project) => {
    codeListHtml += `<div class="card mb-4"><div class="card-body">`;
    codeListHtml += `<div class="d-flex justify-content-between"><h3 class="card-title">${project.title}</h3>`;
    codeListHtml += `<div>`;
    project.links.forEach((link, i) => {
      if (i === project.links.length - 1) {
        codeListHtml += `<a class="link-divider-last" href="${link[1]}" target="_blank"><span>${link[0]}</span></a>`;
      } else {
        codeListHtml += `<a class="link-divider" href="${link[1]}" target="_blank"><span>${link[0]}</span></a>`;
      }
    });
    codeListHtml += `</div></div>`;
    codeListHtml += `<h6 class="card-subtitle mb-2 text-muted">${project.role}</h6>`;
    project.text.forEach((p) => {
      codeListHtml += `<p class="card-text"> ${p}</p>`;
    });
    codeListHtml += `<hr /><span>Frameworks:&nbsp;&nbsp;${project.frameworks}</span><hr />`;
    codeListHtml += `<span">Languages:&nbsp;&nbsp;&nbsp;&nbsp;`;
    project.languages.forEach((lang) => {
      codeListHtml += `<span style="color:${languageColors[lang]};">&#11044;&nbsp;</span><span>${lang}</span>&nbsp;&nbsp;`;
    });
    codeListHtml += `</span></div></div></div>`;
  });

  document.getElementById(div).innerHTML = codeListHtml;
}

function meOnLoad() {
  window.openTab = openTab;
  loadArticles();
  loadCodingWork(workCodingInfo, "work-coding-projects-list");
  loadCodingWork(personalCodingInfo, "personal-coding-projects-list");
}

meOnLoad();
