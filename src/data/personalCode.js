import { applyColors } from "../util.js";

const projectList = [
  {
    title: "me.dev",
    links: [
      {
        display: "GitHub Repository",
        link: "https://github.com/mbradds/me.dev",
      },
      { display: "Azure Static Website", link: "https://www.gmoss.dev/" },
    ],
    role: "This website!",
    text: [
      "Bootstrap 5 front end, created with node.js, hosted on Azure static websites. Completely server side rendered.",
    ],
    languages: ["Handlebars", "JavaScript", "CSS"],
    frameworks: "Bootstrap 5",
  },
  {
    title: "datestone",
    links: [
      {
        display: "GitHub Repository",
        link: "https://github.com/mbradds/datestone",
      },
      { display: "NPM", link: "https://www.npmjs.com/package/datestone" },
    ],
    role: "npm i datestone",
    text: [
      "Inspired by my work with large time-series datasets, I created this package to massively reduce the network transfer size associated with with visualizing huge datasets client side. By taking advantage of predictable time intervals, datestone dynamically adds a date column at run time, helping to cut down the size of a dataset by over 50%.",
    ],
    languages: ["TypeScript"],
    frameworks: "",
  },
  {
    title: "highseries",
    links: [
      {
        display: "GitHub Repository",
        link: "https://github.com/mbradds/highseries",
      },
      { display: "NPM", link: "https://www.npmjs.com/package/highseries" },
    ],
    role: "npm i highseries",
    text: [
      "Inspired by my work on the CER's transportation report, I created this package as kind of an automated data engineering tool for translating spreadsheet style data into the required format for a JavaScript chart. Very useful for projects with lots of data in various tidy/non-tidy formats.",
    ],
    languages: ["JavaScript"],
    frameworks: "",
  },
];

export function personalCode() {
  return applyColors(projectList);
}
