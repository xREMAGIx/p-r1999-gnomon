import {
  ARTEFACT_TYPE,
  ARTEFACT_TAG,
  ARTEFACT_RARITY,
} from "../src/data/artefact.js";

export default {
  description: "Create a artefact content mdx file",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Artefact name:",
    },
    {
      type: "list",
      name: "type",
      message: "Artefact type:",
      choices: Object.keys(ARTEFACT_TYPE),
    },
    {
      type: "list",
      name: "rarity",
      message: "Artefact rarity:",
      choices: Object.keys(ARTEFACT_RARITY),
    },
    {
      type: "checkbox",
      name: "tags",
      message: "Artefact tags:",
      choices: Object.keys(ARTEFACT_TAG).map((item) => ({ name: item })),
    },
    {
      type: "number",
      name: "diskSlot",
      message: "Artefact disk slots:",
    },
    {
      type: "confirm",
      name: "canExchange",
      message: "Artefact can be crafted by exchange?",
    },
  ],
  actions: (data) => {
    let defaultFolderPath = "content/artefacts";
    return [
      {
        type: "add",
        path: `src/${defaultFolderPath}/{{dashCase name}}.mdx`,
        templateFile: `plop-templates/${defaultFolderPath}/index.mdx.hbs`,
        abortOnFail: true,
        skipIfExists: true,
      },
    ];
  },
};
