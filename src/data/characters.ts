import { CHARACTERS_ID, RARITY, VERSION } from "@config/constants";

export const CARD_TYPE = {
  ATTACK: "attack",
  DEBUFF: "debuff",
  HEAL: "heal",
  BUFF: "buff",
  CHANNEL: "channel",
  COUNTER: "counter",
};

export const AFFLATUS_TYPES = {
  MINERAL: "mineral",
  STAR: "star",
  PLANT: "plant",
  BEAST: "beast",
  SPIRIT: "spirit",
  INTELLECT: "intellect",
};

export const AFFLATUS_TYPE = {
  MINERAL: {
    title: "Mineral",
    assetCode: "mineral",
    styleCode: "mineral",
  },
  STAR: {
    title: "Star",
    assetCode: "star",
    styleCode: "star",
  },
  PLANT: {
    title: "Plant",
    assetCode: "plant",
    styleCode: "plant",
  },
  BEAST: {
    title: "Beast",
    assetCode: "beast",
    styleCode: "beast",
  },
  SPIRIT: {
    title: "Spirit",
    assetCode: "spirit",
    styleCode: "spirit",
  },
  INTELLECT: {
    title: "Intellect",
    assetCode: "intellect",
    styleCode: "intellect",
  },
};

export const DMG_TYPES = {
  REALITY: "reality",
  MENTAL: "mental",
};

export const DMG_TYPE = {
  REALITY: {
    title: "Reality",
    assetCode: "reality",
  },
  MENTAL: {
    title: "Mental",
    assetCode: "mental",
  },
};

export const SPECIALTIES = {
  DPS: "dps",
  SUPPORT: "support",
  FOLLOW_UP_ATTACK: "Follow-up Attack",
};

export const SPECIALTY = {
  DPS: {
    title: "DPS",
  },
  SUPPORT: {
    title: "Support",
  },
  FOLLOW_UP_ATTACK: {
    title: "Follow-up Attack",
  },
};

export const CHARACTERS = [
  {
    id: CHARACTERS_ID.ISOLDE,
    title: "Isolde",
    rare: RARITY.SIX_STAR,
    afflatusType: AFFLATUS_TYPES.SPIRIT,
    dmgType: DMG_TYPES.MENTAL,
    isLimited: false,
    version: VERSION.V1_7,
  },
  {
    id: CHARACTERS_ID[37],
    title: "Thirty Seven",
    rare: RARITY.SIX_STAR,
    afflatusType: AFFLATUS_TYPES.STAR,
    dmgType: DMG_TYPES.MENTAL,
    isLimited: false,
    version: VERSION.V1_2,
  },
  {
    id: CHARACTERS_ID.MATILDA,
    title: "Matilda",
    rare: RARITY.FIVE_STAR,
    afflatusType: AFFLATUS_TYPES.STAR,
    dmgType: DMG_TYPES.MENTAL,
    isLimited: false,
    version: VERSION.V1_0,
  },
  {
    id: CHARACTERS_ID.SONETTO,
    title: "Sonetto",
    rare: RARITY.FIVE_STAR,
    afflatusType: AFFLATUS_TYPES.MINERAL,
    dmgType: DMG_TYPES.REALITY,
    isLimited: false,
    version: VERSION.V1_0,
  },
];
