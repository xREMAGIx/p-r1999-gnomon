import { character, artefact, effect, material } from "./plops/index.js";

export default function (plop) {
  plop.setGenerator("Character content", character);
  plop.setGenerator("Artefact content", artefact);
  plop.setGenerator("Effect content", effect);
  plop.setGenerator("Material content", material);
}
