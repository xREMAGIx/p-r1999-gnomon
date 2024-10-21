import { AFFLATUS_TYPE, DMG_TYPE, RARITY } from "../src/data/character.js";

export default {
  description: "Create a character content mdx file",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Character name:",
    },
    {
      type: "list",
      name: "star",
      message: "Character star:",
      choices: Object.values(RARITY).map((ele) => ele.value),
    },
    {
      type: "list",
      name: "afflatus",
      message: "Character afflatus:",
      choices: Object.keys(AFFLATUS_TYPE),
    },
    {
      type: "list",
      name: "dmgType",
      message: "Character damage type:",
      choices: Object.keys(DMG_TYPE),
    },
    {
      type: "input",
      name: "version",
      message: "Character in version:",
    },
    {
      type: "confirm",
      name: "isLimited",
      message: "Is character limited?",
    },
  ],
  actions: (data) => {
    let defaultFolderPath = "content/characters";
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
