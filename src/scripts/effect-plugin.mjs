import { visit, CONTINUE } from "unist-util-visit";
import { h } from "hastscript";

const visitor = (node) => {
  if (
    node.type === "containerDirective" ||
    node.type === "leafDirective" ||
    node.type === "textDirective"
  ) {
    const data = node.data || (node.data = {});
    const hast = h(node.name, node.attributes || {});

    data.hName = hast.tagName;
    data.hProperties = hast.properties;
  }

  return CONTINUE;
};

export const effectPlugin = () => (ast) => visit(ast, visitor);
