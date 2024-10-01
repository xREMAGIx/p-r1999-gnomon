import {
  CHARACTERS_ID,
  DMG_TYPE,
  AFFLATUS_TYPE,
  RARITY,
  VERSION,
} from "@config/constants";

export const CHARACTERS = [
  {
    id: CHARACTERS_ID.ISOLDE,
    title: "Isolde",
    rare: RARITY.SIX_STAR,
    afflatusType: AFFLATUS_TYPE.SPIRIT,
    dmgType: DMG_TYPE.MENTAL,
    isLimited: false,
    version: VERSION.V1_7,
  },
  {
    id: CHARACTERS_ID[37],
    title: "Thirty Seven",
    rare: RARITY.SIX_STAR,
    afflatusType: AFFLATUS_TYPE.STAR,
    dmgType: DMG_TYPE.MENTAL,
    isLimited: false,
    version: VERSION.V1_2,
  },
  {
    id: CHARACTERS_ID.MATILDA,
    title: "Matilda",
    rare: RARITY.FIVE_STAR,
    afflatusType: AFFLATUS_TYPE.STAR,
    dmgType: DMG_TYPE.MENTAL,
    isLimited: false,
    version: VERSION.V1_0,
  },
  {
    id: CHARACTERS_ID.SONETTO,
    title: "Sonetto",
    rare: RARITY.FIVE_STAR,
    afflatusType: AFFLATUS_TYPE.MINERAL,
    dmgType: DMG_TYPE.REALITY,
    isLimited: false,
    version: VERSION.V1_0,
  },
];
