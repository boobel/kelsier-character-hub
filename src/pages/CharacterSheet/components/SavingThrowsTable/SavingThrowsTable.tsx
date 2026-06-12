import styles from "./SavingThrowsTable.module.scss";
import {
  abilityScoreModifier,
  formatSigned,
} from "../../../../utils/abilityScoreModifier";
import type { Character } from "../../../../types/character";
import { SAVES } from "../abilityChecks";

type Props = {
  abilityScores: Character["abilityScores"];
  stats: Character["stats"];
  savingThrows: Character["proficiencies"]["savingThrows"];
};

const SavingThrowsTable = ({ abilityScores, stats, savingThrows }: Props) => {
  return (
    <section className={styles.checkList}>
      <div className={styles.checkTitle}>Saving Throws</div>
      {SAVES.map(({ key, label }) => {
        const proficient = Boolean(savingThrows[key]);
        const total =
          abilityScoreModifier(abilityScores[key]) +
          stats.proficiencyBonus * (proficient ? 1 : 0);

        return (
          <div className={styles.checkItem} key={key}>
            <span
              className={`${styles.checkDot} ${proficient ? styles.proficient : ""}`}
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

export default SavingThrowsTable;
