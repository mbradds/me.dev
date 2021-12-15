import { resume } from "./data/resume.js";
import { personalCode } from "./data/personalCode.js";
import { workCode } from "./data/workCode.js";
import { articles } from "./data/articles.js";

export function pageData() {
  const htmlText = {};
  htmlText.resume = resume;
  htmlText.personalCode = personalCode();
  htmlText.workCode = workCode();
  htmlText.articles = articles();
  return htmlText;
}
