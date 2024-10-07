export const ARTEFACTS_TYPE = {
  WEAPON: "Weapon",
  CURIO: "Curio",
  ACCESSORY: "Accessory",
  MEDICATION: "Medication",
  DISK: "Disk",
};

export const ARTEFACT_TAGS = {
  SUPPORT: "Support",
  RITUAL: "Ritual",
  CRAFT: "Craft",
  SYNTONY: "Syntony",
  RESONANCE: "Resonance",
  ABUNDANCE: "Abundance",
  EXTRA_ACTION: "Extra Action",
  VOLTAIC: "Voltaic",
};

export const ARTEFACTS_RARITY = {
  COMMON: "Common",
  RARE: "Rare",
  EPIC: "Epic",
};

export const ARTEFACTS = {
  CRUDE_STAFF: {
    index: "1",
    name: "Crude Staff",
    type: ARTEFACTS_TYPE.WEAPON,
    rarity: ARTEFACTS_RARITY.COMMON,
    description:
      "Critical Rate **+5%**. Each Crude Staff within range grants an additional Critical Rate **+5%.**",
    shape: [[1, 1]],
    tags: [],
  },
  WRYM_TOE: {
    index: "2",
    name: "Wrym Toe",
    type: ARTEFACTS_TYPE.WEAPON,
    rarity: ARTEFACTS_RARITY.COMMON,
    description:
      "When triggering Incantation Syntony, **50%** chance to inflict 2 stacks of [Gash] on all enemies for 1 round.",
    shape: [[1], [1]],
    tags: [ARTEFACT_TAGS.SYNTONY],
  },
  WOOL_SHEARS: {
    index: "3",
    name: "Wool Shears",
    type: ARTEFACTS_TYPE.WEAPON,
    rarity: ARTEFACTS_RARITY.COMMON,
    description:
      "Attacks have a **50%** chance to inflict an additional (held Goldfinch Coins *2) Genesis DMG, up to 2000.",
    shape: [[1, 1]],
    tags: [ARTEFACT_TAGS.ABUNDANCE],
  },
  GOLDEN_PIN: {
    index: "4",
    name: "Golden Pin",
    type: ARTEFACTS_TYPE.WEAPON,
    rarity: ARTEFACTS_RARITY.COMMON,
    description:
      "Can be tempered with Bloodthirsty Hammer. At the start of the round, for every 3 incantations in the Spelldock, grant 2 stacks of [Verve] to all allies.",
    shape: [[1], [1], [1]],
    tags: [ARTEFACT_TAGS.CRAFT],
  },
  CROOKED_GUN: {
    index: "5",
    name: "Crooked Gun",
    type: ARTEFACTS_TYPE.WEAPON,
    rarity: ARTEFACTS_RARITY.COMMON,
    description:
      "Right after casting a 1-target Ultimate, **50%** chance to inflict [Blind] on the target for 1 round; **50%** chance to inflict [Mis-aim] on the target for 1 round.",
    shape: [[1, 1, 1]],
    tags: [ARTEFACT_TAGS.RITUAL],
  },
  BONE_ARROW: {
    index: "6",
    name: "Bone Arrow",
    type: ARTEFACTS_TYPE.WEAPON,
    rarity: ARTEFACTS_RARITY.COMMON,
    description:
      "After launching a 1-target attack, deal (the attacker's ATK x**100%**) Genesis DMG to a random enemy.",
    shape: [
      [1, 1],
      [1, 1],
    ],
    tags: [],
  },
  PICKFORK: {
    index: "7",
    name: "Pickfork",
    type: ARTEFACTS_TYPE.WEAPON,
    rarity: ARTEFACTS_RARITY.COMMON,
    description:
      "When attacking an enemy in [Neg Status], inflict [Bleed] on the target for 2 rounds.",
    shape: [
      [1, 1],
      [1, 1],
    ],
    tags: [],
  },
  OLD_CRUTCH: {
    index: "8",
    name: "Old Crutch",
    type: ARTEFACTS_TYPE.WEAPON,
    rarity: ARTEFACTS_RARITY.COMMON,
    description:
      "After an ally takes an action, gain 5 stacks of [Ceremonious].",
    shape: [
      [1, 1],
      [1, 1],
    ],
    tags: [ARTEFACT_TAGS.RITUAL],
  },
  SCARY_FORCEPS: {
    index: "9",
    name: "Scary Forceps",
    type: ARTEFACTS_TYPE.WEAPON,
    rarity: ARTEFACTS_RARITY.COMMON,
    description:
      "Can be tempered with Bloodthirsty Hammer. When casting a rank 2/3 incantation, DMG Bonus **+20%**.",
    shape: [
      [1, 1],
      [1, 1],
    ],
    tags: [ARTEFACT_TAGS.CRAFT],
  },
  BEAR_PAW: {
    index: "10",
    name: "Bear Paw",
    type: ARTEFACTS_TYPE.WEAPON,
    rarity: ARTEFACTS_RARITY.COMMON,
    description:
      "After launching the first attack of each round, inflict 1 stack of [Gash] on the target for 2 rounds. If the attack is an extra action, **50%** chance to inflict another stack of [Gash] on the target for 2 rounds.",
    shape: [
      [1, 1],
      [1, 1],
    ],
    tags: [ARTEFACT_TAGS.EXTRA_ACTION],
  },
};

export const ARTEFACTS_EFFECTS = {
  GASH: {
    name: "Gash",
    description:
      "When attacked, take additional (own ATK x**20%**) Genesis DMG.",
  },
  VERVE: {
    name: "Verve",
    description:
      " Incantation Might **+2%** (stackable up to 100 times, undispellable, disappears after casting a basic incantation).",
  },
  BLIND: {
    name: "Blind",
    description: "DMG Bonus **-30%** when attacking 1 target.",
  },
  MIS_AIM: {
    name: "Mis-aim",
    description: "DMG Bonus **-30%** when attacking multiple targets.",
  },
  BLEED: {
    name: "Bleed",
    description: "After action, takes (the casters ATK **100%**) Genesis DMG.",
  },
  CEREMONIOUS: {
    name: "Ceremonious",
    description:
      "Ultimate Might **+3%** (up to 100 stacks, undispellable, disappears after casting an Ultimate).",
  },
};
