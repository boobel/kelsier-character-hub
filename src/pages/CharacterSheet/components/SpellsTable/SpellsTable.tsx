import React from "react";
import { Spell } from "../../../../types/character";
import sharedStyles from "../../CharacterSheet.module.scss";
import styles from "./SpellsTable.module.scss";

type Props = {
  spells: Spell[];
};

const SpellsTable = ({ spells }: Props) => {
  const cantrips = spells.filter((spell) => spell.level === "Cantrip");
  return (
    <article>
      <div className={sharedStyles.tableShell}>
        <div className={sharedStyles.tableGroupTitle}>Spells</div>
        <div className={styles.statsSpellsTable}>
          <section className={styles.statsSpellGroup}>
            <div className={styles.statsSpellGroupTitle}>Known Cantrips</div>
            <div
              className={`${styles.statsSpellRow} ${styles.statsSpellHeader}`}
            >
              <span>Spell</span>
              <span>Casting Time</span>
              <span>Duration</span>
            </div>
            <div aria-hidden="true">
              {cantrips.map((cantrip) => {
                return (
                  <div className={styles.spellRow} key={cantrip.name}>
                    <span>{cantrip.name}</span>
                    <span>{cantrip.castingTime}</span>
                    <span>{cantrip.duration}</span>
                  </div>
                );
              })}
            </div>
          </section>
          <section className={styles.statsSpellGroup}>
            <div className={styles.statsSpellGroupTitle}>Prepared Spells</div>
            <div
              className={`${styles.statsSpellRow} ${styles.statsSpellHeader} ${styles.statsSpellRowHasLevel}`}
            >
              <span>Spell</span>
              <span>Casting Time</span>
              <span>Duration</span>
              <span>Level</span>
            </div>
            <div aria-hidden="true"></div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default SpellsTable;
