import { EquippedArmor } from "../types/character";

//TODO: account for infusion when they're implemented
const getArmorClass = (
  armor: EquippedArmor,
  dexMod: number,
  shield = false,
) => {
  const dexBonus =
    armor.dexCap == null ? dexMod : Math.min(dexMod, armor.dexCap);

  return armor.acBase + dexBonus + (shield ? 2 : 0);
};

const getToHitBonus = (
  proficiencyBonus: number,
  abilityBonus: number,
  miscBonus?: number,
) => {
  return proficiencyBonus + abilityBonus + (miscBonus ?? 0);
};

export { getArmorClass, getToHitBonus };
