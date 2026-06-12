import React from "react";
import styles from "./CharacterSheet.module.scss";
import { useOutletContext } from "react-router-dom";
import { Character } from "../../types/character";
import {
  abilityScoreModifier,
  formatSigned,
} from "../../utils/abilityScoreModifier";
import SavingThrowsTable from "./components/SavingThrowsTable/SavingThrowsTable";
import WeaponsTable from "./components/WeaponsTable/WeaponsTable";
import SpellsTable from "./components/SpellsTable/SpellsTable";
import InfusionsTable from "./components/InfusionsTable/InfusionsTable";
import SkillsTable from "./components/SkillsTable/SkillsTable";
import {
  ABILITIES,
  CORE_STATS,
  CORE_STAT_VARIANTS,
  PROFICIENCY_ROWS,
  renderList,
} from "./CharacterSheet.config";

const CharacterSheet = () => {
  const {
    abilityScores,
    stats,
    equipment,
    proficiencies,
    spells,
    infusions,
  } = useOutletContext<Character>();

  return (
    <div className="page-container">
      <article>
        <div className={styles.divider}>
          <p>Abiltiy Scores</p>
          <hr />
        </div>
        <section className={styles.abilityScoresContainer}>
          {ABILITIES.map(([key, label]) => {
            const score = abilityScores[key];

            return (
              <div className={styles.abilityScore} key={key}>
                <p className={styles.abilityScoreName}>{label}</p>
                <p className={styles.abilityScoreValue}>{score}</p>
                <p className={styles.abilityScoreModifier}>
                  {formatSigned(abilityScoreModifier(score))}
                </p>
              </div>
            );
          })}
        </section>
      </article>

      <article>
        <div className={styles.divider}>
          <p>Core Stats</p>
          <hr />
        </div>
        <section className={styles.coreStatsContainer}>
          {CORE_STATS.map((stat) => {
            return (
              <div
                className={`${styles.coreStat} ${CORE_STAT_VARIANTS[stat.key]}`}
                key={stat.key}
              >
                <p className={styles.coreStatName}>{stat.label}</p>
                <p className={styles.coreStatValue}>
                  {stat.value({ abilityScores, stats, equipment })}
                </p>
                <p className={styles.coreStatDesc}>
                  {typeof stat.description === "function"
                    ? stat.description({ abilityScores, stats, equipment })
                    : stat.description}
                </p>
              </div>
            );
          })}
        </section>
      </article>

      <article>
        <div className={styles.divider}>
          <p>Saving Throws & Skills</p>
          <hr />
        </div>
        <div className={styles.abilitiesPanel}>
          <div className={styles.skillsLeftColumn}>
            <SavingThrowsTable
              abilityScores={abilityScores}
              stats={stats}
              savingThrows={proficiencies.savingThrows}
            />
            <SkillsTable
              abilityScores={abilityScores}
              stats={stats}
              skills={proficiencies.skills}
            />
          </div>
          <div className={styles.skillsRightColumn}>
            <WeaponsTable
              weapons={equipment.weapons}
              abilityScores={abilityScores}
              proficiencyBonus={stats.proficiencyBonus}
            />
            <SpellsTable spells={spells} />
            <InfusionsTable infusions={infusions} />
          </div>
        </div>
      </article>
      <article>
        <div className={styles.divider}>
          <p>Proficiencies</p>
          <hr />
        </div>
        <div className={styles.profRows}>
          {PROFICIENCY_ROWS.map(({ label, key }) => (
            <div className={styles.profRow} key={key}>
              <div className={styles.profType}>{label}</div>
              <div className={styles.profList}>
                {renderList(proficiencies[key])}
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default CharacterSheet;
