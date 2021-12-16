import { applyColors } from "../util.js";

const projectList = [
  {
    title: "pipeline-profiles",
    links: [
      {
        display: "GitHub Repository",
        link: "https://github.com/mbradds/pipeline-profiles",
      },
      {
        display: "Heroku WebApp",
        link: "https://pipeline-profiles.herokuapp.com/",
      },
      {
        display: "Production Site",
        link: "https://www.cer-rec.gc.ca/en/data-analysis/facilities-we-regulate/pipeline-profiles/index.html",
      },
    ],
    role: "Creator, lead-designer, lead-developer",
    text: [
      "Major technology initative adding new data-visualization, interactivity, and safety &amp; environment content to the CER's highly popular pipeline profiles webpages. Previous to this, we relied on tableau (not the right tool for the job) to share data externally. The tableau was very slow, didnt always work, and required alot of manual work. Switching to the JavaScript ecosystem has allowed for previously impossible interactivity, such as allowing the user to find pipeline incidents near them on a leaflet map.",
      "With over 700 commits, this is my largest software/data project to date. I've worked hard on the code to make it easily maintainable and general purpose into the future.",
    ],
    languages: [
      "JavaScript",
      "Python",
      "Handlebars",
      "CSS",
      "HTML",
      "TSQL",
      "Shell",
    ],
    frameworks: "Highcharts, Leaflet, Web Experience Toolkit",
  },
  {
    title: "reconciliation-strategic-priority",
    links: [
      {
        display: "GitHub Repository",
        link: "https://github.com/mbradds/reconciliation-strategic-priority",
      },
      {
        display: "Heroku WebApp",
        link: "https://reconciliation-priority.herokuapp.com/",
      },
    ],
    role: "Lead-developer &amp; designer",
    text: [
      "Reconciliation is one of the Canada Energy Regulator's four strategic priorities. For me, this means applying my skills &amp; innovations towards new products that feature an Indigenous first perspective on pipeline infrastructure projects.",
      "This web app shows the overlap of regulated pipeline assets with First Nations Reserves as well as Historic Treaty Lands. I've only scratched the surface here, and there is potential to build this out into a major platform.",
      "The massive scale of pipeline shapefiles makes this analysis difficult. I used python's multiprocessing functionality to split GIS calculations among the considerable number of cores on my computer to make the back-end GIS process run fast.",
    ],
    languages: ["JavaScript", "Python", "CSS", "HTML", "Shell"],
    frameworks: "Leaflet, Web Experience Toolkit, Python Geopandas",
  },
  {
    title: "transportation-report",
    links: [
      {
        display: "GitHub Repository",
        link: "https://github.com/mbradds/transportation-report",
      },
      {
        display: "Github Pages",
        link: "https://mbradds.github.io/transportation-report/",
      },
      {
        display: "Production Site",
        link: "https://www.cer-rec.gc.ca/en/data-analysis/facilities-we-regulate/canadas-pipeline-system/2021/index.html",
      },
    ],
    role: "Lead-developer, data-analyst, data-viz designer",
    text: [
      "My first major JavaScript/web-development project. This was a major initiative, and the first report released by the CER to feature JavaScript based interactive charts.",
      "With 27 individual dashboards, many featuring advanced functionaltiy with multiple charts, maps, and filters, this one was a challenge. I put in alot of effort to ensure that the charts loaded fast in both official languages.",
    ],
    languages: ["JavaScript", "HTML", "Python", "CSS", "Shell", "TSQL"],
    frameworks: "Highcharts, Web Experience Toolkit",
  },
  {
    title: "crude-runs",
    links: [
      {
        display: "GitHub Repository",
        link: "https://github.com/mbradds/crude-runs",
      },
      { display: "Heroku WebApp", link: "https://crude-runs.herokuapp.com/" },
      {
        display: "Production Site",
        link: "https://www.cer-rec.gc.ca/en/data-analysis/energy-commodities/crude-oil-petroleum-products/statistics/weekly-crude-run-summary-data.html",
      },
    ],
    role: "Lead-developer &amp; designer",
    text: [
      "Clean, easy to use dashboard showcasing the CER's crude runs dataset.",
      "This dashboard is a replacement of a previous version done in tableau. This one is obviously much faster, more responsive &amp; professional. By switching from Tableau to JavaScript, the total network transfer size of the page dropped by 87% (from 4500KB to 596KB), massively improving the experience for users.",
    ],
    languages: ["JavaScript", "CSS", "Handlebars", "Python", "HTML", "Shell"],
    frameworks: "Highcharts, Web Experience Toolkit",
  },
  {
    title: "new-cer-project",
    links: [
      {
        display: "GitHub Repository",
        link: "https://github.com/mbradds/new-cer-project",
      },
    ],
    role: "Developer and maintainer",
    text: [
      "One of the hardest parts about learning JavaScript for me was configuring my projects to actually work. This public template repo is the product of countless YouTube and online tutorials on getting started with node.js, npm, and JavaScript.",
      "My hope is that others, including myself, can use this template when starting a new project to hit the ground running, and remain focused on the code + product design instead of anoying configuration issues.",
    ],
    languages: ["CSS", "JavaScript", "Handlebars"],
    frameworks: "node.js, npm",
  },
  {
    title: "ccei-presentation",
    links: [
      {
        display: "GitHub Repository",
        link: "https://github.com/mbradds/ccei-presentation",
      },
      {
        display: "Heroku WebApp",
        link: "https://ccei-presentation.herokuapp.com/",
      },
    ],
    role: "Lead-developer &amp; presenter/speaker",
    text: [
      "Our federal partners (Canada Center for Energy Information, Statistics Canada, and Natural Resources Canada) asked me to provide a presentation on my work with the Highcharts framework. I'm always looking to take these kinds of things to the next level, so I developed a custom website instead of a Power Point presentation!",
    ],
    languages: ["HTML", "JavaScript", "CSS"],
    frameworks: "Highcharts",
  },
  {
    title: "cer_python_training",
    links: [
      {
        display: "GitHub Repository",
        link: "https://github.com/mbradds/cer_python_training",
      },
    ],
    role: "Lead-developer &amp; presenter/speaker",
    text: [
      "My three part python training curriculum starting with basic programming concepts and moving into automated data processing and analytics.",
      "I've enjoyed alot of freedom in my career to innovate and do things my way. Running these kinds of training sessions regularly is my way of giving back. I enjoy the rewarding aspects of teaching and sharing knowledge about the tools that have allowed me to accomplish so much.",
      "I'm hoping to eventually build one of these for basic JavaScript/web-development principles. Stay tuned!",
    ],
    languages: ["Python"],
    frameworks: "Jupyter Notebook",
  },
  {
    title: "ne2",
    links: [
      {
        display: "GitHub Repository",
        link: "https://github.com/mbradds/ne2",
      },
    ],
    role: "Developer",
    text: [
      "Automated ETL for the net energy daily settlement price API, and web scraping with selenium for daily trade volumes from the net energy platform.",
      "Contains extensive automation for calculating daily spot prices and forward curves used at the CER for price projections, assumptions, and regulatory analysis of Canadian crude oil markets.",
    ],
    languages: ["Python"],
    frameworks: "",
  },
];

export function workCode() {
  return applyColors(projectList);
}
