import { micromark } from "micromark";
import { directive, directiveHtml } from "micromark-extension-directive";
import { h } from "hastscript";
import { visit } from "unist-util-visit";

export function markdownParser(text: string) {
  const output = micromark(text, {
    extensions: [directive()],
    htmlExtensions: [directiveHtml({ abbr, effect })],
  });

  return output;
}
function abbr(d) {
  if (d.type !== "textDirective") return false;

  this.tag("<abbr");

  if (d.attributes && "title" in d.attributes) {
    this.tag(' title="' + this.encode(d.attributes.title) + '"');
  }

  this.tag(">");
  this.raw(d.label || "");
  this.tag("</abbr>");
}

function effect(d) {
  if (d.type !== "textDirective") return false;

  this.tag("<effect");

  if (d.attributes && "title" in d.attributes) {
    this.tag(' title="' + this.encode(d.attributes.title) + '"');
  }

  this.tag(">");
  this.raw(d.label || "");
  this.tag("</effect>");
}
