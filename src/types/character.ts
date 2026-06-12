type Ability =
  | "strength"
  | "dexterity"
  | "constitution"
  | "intelligence"
  | "wisdom"
  | "charisma";

type Skill =
  | "acrobatics"
  | "animalHandling"
  | "arcana"
  | "athletics"
  | "deception"
  | "history"
  | "insight"
  | "intimidation"
  | "investigation"
  | "medicine"
  | "nature"
  | "perception"
  | "performance"
  | "persuasion"
  | "religion"
  | "sleightOfHand"
  | "stealth"
  | "survival";

export type EquipmentRarity =
  | "common"
  | "uncommon"
  | "rare"
  | "veryRare"
  | "legendary";

export type EquipmentActivation =
  | "passive"
  | "action"
  | "bonusAction"
  | "reaction";

export type EquipmentEffect = {
  name: string;
  description: ContentBlock[];
  activation?: EquipmentActivation;
};

export type EquippedItem = {
  id: string;
  name: string;
  description: ContentBlock[];
  rarity?: EquipmentRarity;
  attuned?: boolean;
  effects?: EquipmentEffect[];
};

export type EquippedArmor = EquippedItem & {
  acBase: number;
  dexCap?: number;
  acBonus?: number;
};

export type EquippedWeapon = EquippedItem & {
  weaponClass: "simple" | "martial";
  weaponType: "melee" | "ranged";
  damage: {
    dice: string;
    type: "piercing" | "slashing" | "bludgeoning" | "force";
  };
  range?: {
    normal: number;
    long: number;
  };
  abilityScore: Ability;
  properties: string[];
  notes?: string[];
};

export type EquippedGear = EquippedItem & {
  kind: "gear";
};

export type CharacterEquipment = {
  weapons: EquippedWeapon[];
  armor: EquippedArmor;
  attuned: EquippedGear[];
  other: EquippedGear[];
};

type SpellBase = {
  name: string;
  metadata: string[];
  description: ContentBlock[];
  duration: string;
  castingTime: number | string;
};

export type Spell =
  | (SpellBase & { level: "Cantrip"; prepared?: boolean })
  | (SpellBase & { level: number; prepared: boolean });

type spellSlots = {
  firstLevel: number;
  secondLevel: number;
  thirdLevel: number;
  fourthLevel: number;
  fifthLevel: number;
};

export type InventoryItem = {
  name: string;
  description: string;
  quantity: number;
  weight: number;
  type: "Weapon" | "Armor" | "Adventuring Gear" | "Tools" | "Material";
};

export type ProficiencyLevel = "none" | "half" | "proficient" | "expertise";

type Profieciencies = {
  savingThrows: Partial<Record<Ability, true>>;
  skills: Partial<Record<Skill, ProficiencyLevel>>;
  languages: string[];
  armor: string[];
  weapons: string[];
  tools: string[];
  other: string[];
};

export type Infusion = {
  name: string;
  description: ContentBlock[];
  tag: string;
  active: boolean;
};

export type ContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "note";
      text: string;
    };

export type Character = {
  identity: {
    name: string;
    class: string;
    subclass: string;
    level: number;
    background: string;
    race: string;
    alignment: string;
    religion: string;
    age: number;
  };
  abilityScores: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  stats: {
    hitPoints: number;
    speed: number;
    proficiencyBonus: number;
    hitDice: string;
  };
  equipment: CharacterEquipment;
  currency: {
    platinum: number;
    gold: number;
    silver: number;
    copper: number;
  };
  proficiencies: Profieciencies;
  spells: Spell[];
  spellSlotsMax: spellSlots;
  inventory: InventoryItem[];
  infusions: Infusion[];
  infusionsActiveMax: number;
};
