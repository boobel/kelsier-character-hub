import { ContentBlock, Infusion } from "../types/character";

const enhancedDefenseDescription: ContentBlock[] = [
  {
    type: "paragraph",
    text: "A creature gains a +1 bonus to Armor Class while wearing (armor) or wielding (shield) the infused item.",
  },
];
const bagOfHoldingDescription: ContentBlock[] = [
  {
    type: "paragraph",
    text: "holds up to 500 lbs across 64 cubic feet, but always weighs just 15 lbs. Retrieving items costs an action. Don't pierce it, overfill it, or stuff it inside another extradimensional item unless you want your belongings lost in the Astral Plane forever.",
  },
];
const enhancedWeaponDescription: ContentBlock[] = [
  {
    type: "paragraph",
    text: "This magic weapon grants a +1 bonus to attack and damage rolls made with it.",
  },
];
const enhancedArcaneFocusDescription: ContentBlock[] = [
  {
    type: "paragraph",
    text: "While holding this item, a creature gains +1 bonus to spell attack rolls. In addition, the creature ignores half cover when making a spell attack.",
  },
];

export const infusions: Infusion[] = [
  {
    name: "Enhanced Defense",
    description: enhancedDefenseDescription,
    tag: "Armor/Shield",
    active: true,
  },
  {
    name: "Enhanced Weapon",
    description: enhancedWeaponDescription,
    tag: "Weapon",
    active: false,
  },
  {
    name: "Bag of Holding",
    description: bagOfHoldingDescription,
    tag: "Replicated Item",
    active: false,
  },
  {
    name: "Enhanced Arcane Focus",
    description: enhancedArcaneFocusDescription,
    tag: "Arcane Focus (requieres attunement)",
    active: false,
  },
];
