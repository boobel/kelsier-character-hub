const spellSaveDC = (
  proficiencyBonus: number,
  spellCastingAbilityBonus: number,
) => {
  return 8 + proficiencyBonus + spellCastingAbilityBonus;
};

const spellAttackModifier = (
  proficiencyBonus: number,
  spellCastingAbilityBonus: number,
) => {
  return proficiencyBonus + spellCastingAbilityBonus;
};

const preparedSpellsMax = (spellCastingAbilityBonus: number, level: number) => {
  return spellCastingAbilityBonus + Math.floor(level / 2);
};

const SLOT_LEVELS = [
  { key: "firstLevel", label: "1st Level" },
  { key: "secondLevel", label: "2nd Level" },
  { key: "thirdLevel", label: "3rd Level" },
  { key: "fourthLevel", label: "4th Level" },
  { key: "fifthLevel", label: "5th Level" },
] as const;

export { spellSaveDC, spellAttackModifier, preparedSpellsMax, SLOT_LEVELS };
