import { EFFECT_TYPE } from "../src/data/effect.js";

export default {
  description: "Create a effect content mdx file",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Effect name:",
    },
    {
      type: "list",
      name: "type",
      message: "Effect type:",
      choices: Object.keys(EFFECT_TYPE),
    },
  ],
  actions: (data) => {
    let defaultFolderPath = "content/effects";
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
