import materials from "./materials.json";

export const MATERIALS = materials;
export type Material = keyof typeof materials;
