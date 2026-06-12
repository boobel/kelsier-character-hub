import styles from "./SkillsTable.module.scss";
import {
  abilityScoreModifier,
  formatSigned,
} from "../../../../utils/abilityScoreModifier";
import type { Character } from "../../../../types/character";
import { SKILLS } from "../abilityChecks";

type Props = {
  abilityScores: Character["abilityScores"];
  stats: Character["stats"];
  skills: Character["proficiencies"]["skills"];
};

const getProficiencyMultiplier = (
  level: Character["proficiencies"]["skills"][keyof Character["proficiencies"]["skills"]],
) => {
  if (level === "expertise") return 2;
  if (level === "proficient") return 1;
  if (level === "half") return 0.5;
  return 0;
};

const SkillsTable = ({ abilityScores, stats, skills }: Props) => {
  return (
    <section className={styles.checkList}>
      <div className={styles.checkTitle}>Skills</div>
      {SKILLS.map(({ key, label, ability }) => {
        const multiplier = getProficiencyMultiplier(skills[key]);
        const abilityMod = abilityScoreModifier(abilityScores[ability]);
        const total =
          abilityMod +
          (multiplier === 0.5
            ? Math.floor(stats.proficiencyBonus / 2)
            : stats.proficiencyBonus * multiplier);

        return (
          <div className={styles.checkItem} key={key}>
            <span
              className={`${styles.checkDot} ${
                multiplier === 2
                  ? styles.expertise
                  : multiplier === 1
                    ? styles.proficient
                    : multiplier === 0.5
                      ? styles.half
                      : ""
              }`}
              aria-hidden="true"
            />
            <span>{label}</span>
            <span className={styles.checkBonus}>{formatSigned(total)}</span>
          </div>
        );
      })}
    </section>
  );
};

export default SkillsTable;
