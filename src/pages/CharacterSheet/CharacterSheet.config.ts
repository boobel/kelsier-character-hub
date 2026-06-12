import { Character } from "../../types/character";
import {
  abilityScoreModifier,
  formatSigned,
} from "../../utils/abilityScoreModifier";
import { getArmorClass } from "../../utils/equipment";
import styles from "./CharacterSheet.module.scss";

type CoreStatContext = {
  abilityScores: Character["abilityScores"];
  stats: Character["stats"];
  equipment: Character["equipment"];
};

type CoreStatKey =
  | "hitPoints"
  | "armorClass"
  | "initiative"
  | "speed"
  | "proficiencyBonus"
  | "passivePerception";

type CoreStat = {
  key: CoreStatKey;
  label: string;
  description: string | ((ctx: CoreStatContext) => string);
  value: (ctx: CoreStatContext) => string | number;
};

const ABILITIES = [
  ["strength", "Strength"],
  ["dexterity", "Dexterity"],
  ["constitution", "Constitution"],
  ["intelligence", "Intelligence"],
  ["wisdom", "Wisdom"],
  ["charisma", "Charisma"],
] as const;

const CORE_STATS: CoreStat[] = [
  {
    key: "hitPoints",
    label: "Hit Points",
    description: (ctx: CoreStatContext) =>
      `${ctx.stats.hitDice}${formatSigned(abilityScoreModifier(ctx.abilityScores.constitution))}`,
    value: (ctx: CoreStatContext) => ctx.stats.hitPoints,
  },
  {
    key: "armorClass",
    label: "Armor Class",
    description: (ctx: CoreStatContext) =>
      `${ctx.equipment.armor.name} (AC: ${ctx.equipment.armor.acBase}) + Dex Mod (Max: ${ctx.equipment.armor.dexCap})`,
    value: (ctx: CoreStatContext) =>
      getArmorClass(
        ctx.equipment.armor,
        abilityScoreModifier(ctx.abilityScores.dexterity),
      ),
  },
  {
    key: "initiative",
    label: "Initiative",
    description: "Dexterity Modifier",
    value: (ctx: CoreStatContext) =>
      formatSigned(abilityScoreModifier(ctx.abilityScores.dexterity)),
  },
  {
    key: "speed",
    label: "Speed",
    description: "Walking",
    value: (ctx: CoreStatContext) => ctx.stats.speed,
  },
  {
    key: "proficiencyBonus",
    label: "Proficiency Bonus",
    description: "Based on character level",
    value: (ctx: CoreStatContext) => formatSigned(ctx.stats.proficiencyBonus),
  },
  {
    key: "passivePerception",
    label: "Passive Perception",
    description: "10 + Perception Bonus",
    value: (ctx: CoreStatContext) =>
      10 + abilityScoreModifier(ctx.abilityScores.wisdom) + ctx.stats.proficiencyBonus,
  },
] as const;

const CORE_STAT_VARIANTS = {
  hitPoints: styles.coreStatHp,
  armorClass: styles.coreStatAc,
  initiative: styles.coreStatInit,
  speed: styles.coreStatSpeed,
  proficiencyBonus: styles.coreStatProf,
  passivePerception: styles.coreStatPerception,
} as const;

const renderList = (items: string[]) => items.join(", ");

const PROFICIENCY_ROWS = [
  { label: "Armor", key: "armor" },
  { label: "Weapons", key: "weapons" },
  { label: "Tools", key: "tools" },
  { label: "Languages", key: "languages" },
] as const;

export {
  ABILITIES,
  CORE_STATS,
  CORE_STAT_VARIANTS,
  PROFICIENCY_ROWS,
  renderList,
};
