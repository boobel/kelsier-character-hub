import type {
  ContentBlock,
  EquippedArmor,
  EquippedGear,
  EquippedWeapon,
} from "../types/character";

const p = (text: string): ContentBlock[] => [{ type: "paragraph", text }];

const chainShirt: EquippedArmor = {
  id: "chain-shirt",
  name: "Chain Shirt",
  description: p("Interlinked steel rings over a padded underlayer."),
  acBase: 13,
  dexCap: 2,
  rarity: "uncommon",
};

const dagger: EquippedWeapon = {
  id: "dagger",
  name: "Dagger",
  description: p("A simple dagger."),
  weaponClass: "simple",
  weaponType: "melee",
  damage: {
    dice: "1d4",
    type: "piercing",
  },
  range: {
    normal: 20,
    long: 60,
  },
  abilityScore: "dexterity",
  properties: ["finesse", "light"],
};

const needle: EquippedWeapon = {
  id: "needle",
  name: "Needle",
  description: p(
    "Sleek needle sewn into Kelsier's right shoe, for emergencies only.",
  ),
  weaponClass: "simple",
  weaponType: "melee",
  damage: {
    dice: "1d4",
    type: "piercing",
  },
  range: {
    normal: 20,
    long: 60,
  },
  abilityScore: "dexterity",
  properties: ["finesse", "light"],
};

const runicRepeater: EquippedWeapon = {
  id: "runic-repeater",
  name: "Runic Repeater",
  description: p(
    "Runic pistol built for tight, force-fed shots and magnetic trick work.",
  ),
  weaponClass: "martial",
  weaponType: "ranged",
  damage: {
    dice: "1d10",
    type: "piercing",
  },
  range: {
    normal: 60,
    long: 180,
  },
  abilityScore: "intelligence",
  properties: ["light", "loading", "ranged"],
  effects: [
    {
      name: "Loading",
      description: p("1 shot. Action to reload."),
    },
    {
      name: "Resonance Overload",
      description: p(
        "Natural 1: take 1d4 force damage. Bonus action to vent the weapon.",
      ),
    },
    {
      name: "Magnetic Anchor",
      description: [
        {
          type: "paragraph",
          text: "On hit, the metallic projectile lodges in target and makes them a magnetic anchor. Only one anchor can be active at a time.",
        },
        {
          type: "list",
          items: [
            "Magnetic Pull: Until the start of your next turn or until the bullet is destroyed, you can roughly ascertain the target's location within 15 ft. Attacks against it ignore half cover.",
            "Kinetic Velocity: Subsequent hits on the same anchored target this turn deal +1d4 force damage.",
            "Anchor Detonation (Bonus Action): Deal 1d8 force damage, reduce the target's speed by 10 ft. until the end of its next turn, then destroy the bullet and end the anchor.",
          ],
        },
      ],
    },
  ],
  rarity: "rare",
};

const tassleCoat: EquippedGear = {
  id: "tasselcoat",
  kind: "gear",
  name: "TassleCoat",
  description: p(
    "Deep charcoal coat with golden geometric embroidery and weighted metal tassels.",
  ),
  rarity: "uncommon",
};

const weapons: EquippedWeapon[] = [runicRepeater, dagger, needle];
const attuned: EquippedGear[] = [];
const other: EquippedGear[] = [tassleCoat];

export { weapons, chainShirt, attuned, other };
