import { createRequire } from "module"; // construct the require method
import { applyColors } from "./util.js";

const require = createRequire(import.meta.url);
const personalCodeData = require("./data/personalCode.json");
const workCodeData = require("./data/workCode.json");
const articleData = require("./data/articles.json");
const resumeData = require("./data/resume.json");
const rfdData = require("./data/rfd.json")

function articles(list) {
  let [minorCount, majorCount] = [0, 0];
  const articleInfo = list.map((page) => {
    if (page.type === "minor") {
      minorCount += 1;
      page.display = { name: "Market Snapshot", class: "text-secondary" };
    } else if (page.type === "major") {
      majorCount += 1;
      page.display = { name: "Major Report", class: "text-success" };
    } else if (page.type === "rfd") {
      page.display = { name: "Reasons for Decision", class: "text-warning" };
    }
    return page;
  });
  return { articleInfo, minorCount, majorCount };
}

export function pageData() {
  const htmlText = {};
  htmlText.resume = resumeData;
  htmlText.personalCode = applyColors(personalCodeData);
  htmlText.workCode = applyColors(workCodeData);
  htmlText.articles = articles(articleData);
  htmlText.rfd = articles(rfdData);
  return htmlText;
}
