import type { Character } from "../types/character";
import { attuned, chainShirt, other, weapons } from "./gear";
import { infusions } from "./infusions";
import { inventory } from "./inventory";
import { spells } from "./spells";

export const character = {
  identity: {
    name: "Kelsier",
    class: "Artificier",
    subclass: "Resonant Gunslinger",
    level: 3,
    background: "Clockwork Tinkerer",
    race: "Variant Human",
    alignment: "Chaotic Good",
    religion: "Gond",
    age: 26,
  },
  abilityScores: {
    strength: 10,
    dexterity: 14,
    constitution: 14,
    intelligence: 18,
    wisdom: 12,
    charisma: 14,
  },
  stats: {
    hitPoints: 24,
    speed: 30,
    proficiencyBonus: 2,
    hitDice: "1d8",
  },
  proficiencies: {
    savingThrows: {
      constitution: true,
      intelligence: true,
    },
    skills: {
      arcana: "proficient",
      investigation: "proficient",
      nature: "proficient",
      perception: "proficient",
      persuasion: "proficient",
      sleightOfHand: "proficient",
    },
    languages: ["Common", "Gnomish", "Dwarvish"],
    armor: ["light armor", "medium armor"],
    weapons: ["simple", "resonant firearms"],
    tools: ["tinkerer's tools", "smith's tools"],
    other: [],
  },
  spells: spells,
  spellSlotsMax: {
    firstLevel: 3,
    secondLevel: 0,
    thirdLevel: 0,
    fourthLevel: 0,
    fifthLevel: 0,
  },
  equipment: {
    weapons: weapons,
    armor: chainShirt,
    attuned: attuned,
    other: other,
  },
  currency: {
    platinum: 0,
    gold: 10,
    silver: 0,
    copper: 0,
  },
  inventory: inventory,
  infusions: infusions,
  infusionsActiveMax: 2,
} satisfies Character;
