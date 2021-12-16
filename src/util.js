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

export function applyColors(projectList) {
  return projectList.map((project) => {
    project.languages = project.languages.map((lang) => ({
      display: lang,
      color: languageColors[lang],
    }));
    return project;
  });
}
