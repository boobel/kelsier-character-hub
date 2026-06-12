import React, { useState } from "react";
import styles from "./Spells.module.scss";
import { useOutletContext } from "react-router-dom";
import { renderContentBlock } from "../../utils/renderContentBlock";
import { Character, ContentBlock, Spell } from "../../types/character";
import {
  spellAttackModifier,
  spellSaveDC,
  preparedSpellsMax,
  SLOT_LEVELS,
} from "./Spells.config";
import {
  abilityScoreModifier,
  formatSigned,
} from "../../utils/abilityScoreModifier";

const Spells: React.FC = () => {
  const {
    identity,
    spells: initialSpells,
    stats,
    abilityScores,
    spellSlotsMax,
  } = useOutletContext<Character>();
  const [spells, setSpells] = useState<Spell[]>(initialSpells);
  const proficiencyBonus = stats.proficiencyBonus;
  const intelligence = abilityScores.intelligence;
  const characterLevel = identity.level;
  const intelligenceModifier = abilityScoreModifier(intelligence);
  const currentPreparedSpells = spells.filter(
    (spell) => spell.level !== "Cantrip" && spell.prepared,
  ).length;
  const maxPreparedSpells = preparedSpellsMax(
    intelligenceModifier,
    characterLevel,
  );
  const [expandedSpells, setExpandedSpells] = useState<Record<string, boolean>>(
    {},
  );
  const [expendedSlots, setExpendedSlots] = useState<
    Partial<Record<keyof Character["spellSlotsMax"], number>>
  >({});

  const togglePrepared = (spellName: string) => {
    setSpells((current) =>
      current.map((spell) => {
        if (spell.name !== spellName) return spell;
        if (spell.level === "Cantrip") return spell;

        return {
          ...spell,
          prepared: !spell.prepared,
        };
      }),
    );
  };

  const toggleDescription = (spellName: string) => {
    setExpandedSpells((current) => ({
      ...current,
      [spellName]: !current[spellName],
    }));
  };

  const toggleSlot = (
    slotLevel: keyof Character["spellSlotsMax"],
    pipIndex: number,
  ) => {
    setExpendedSlots((current) => {
      const currentUsed = current[slotLevel] ?? 0;
      const nextUsed = pipIndex + 1 === currentUsed ? pipIndex : pipIndex + 1;

      return {
        ...current,
        [slotLevel]: nextUsed,
      };
    });
  };

  const cantrips = spells.filter((spell) => spell.level === "Cantrip");
  const prepared = spells.filter(
    (spell) => spell.level !== "Cantrip" && spell.prepared,
  );
  const firstLevel = spells.filter(
    (spell) => spell.level === 1 && !spell.prepared,
  );

  return (
    <div className="page-container">
      <div className={styles.spellsPage}>
        <article>
          <div className={styles.divider}>
            <p>Spellcasting Summary</p>
            <hr />
          </div>
          <section className={styles.summary}>
            <div className={styles.slotGrid} aria-label="Spell slots">
              {SLOT_LEVELS.map((slot) => {
                const maxSlots = spellSlotsMax[slot.key];
                const usedSlots = expendedSlots[slot.key] ?? 0;

                return (
                  <div className={styles.slotBlock} key={slot.key}>
                    <div className={styles.slotHeader}>
                      <div className={styles.slotLabel}>{slot.label}</div>
                      <div className={styles.slotCount}>
                        {usedSlots}/{maxSlots}
                      </div>
                    </div>
                    <div
                      className={styles.slotPips}
                      role="group"
                      aria-label={`${slot.label} level spell slots`}
                    >
                      {Array.from({ length: maxSlots }, (_, index) => {
                        const expended = index < usedSlots;

                        return (
                          <button
                            key={`${slot.key}-${index}`}
                            type="button"
                            className={`${styles.slotPip} ${styles.slotPipActive} ${expended ? styles.slotPipExpended : ""}`}
                            onClick={() => {
                              toggleSlot(slot.key, index);
                            }}
                            aria-label={`${slot.label} level slot ${index + 1} ${expended ? "expended" : "available"}`}
                            aria-pressed={expended}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.summaryCard}>
              <div className={styles.summaryLabel}>Spell Save DC</div>
              <div className={styles.summaryValue}>
                {spellSaveDC(proficiencyBonus, intelligenceModifier)}
              </div>
              <div className={styles.summaryMeta}>
                8 + prof {formatSigned(intelligenceModifier)}
              </div>
            </div>
            <div className={styles.summaryCard}>
              <div className={styles.summaryLabel}>Spell Attack</div>
              <div className={styles.summaryValue}>
                {formatSigned(
                  spellAttackModifier(proficiencyBonus, intelligenceModifier),
                )}
              </div>
              <div className={styles.summaryMeta}>
                prof {formatSigned(proficiencyBonus)} + INT{" "}
                {formatSigned(intelligenceModifier)}
              </div>
            </div>
            <div className={styles.summaryCard}>
              <div className={styles.summaryLabel}>Prepared Spells</div>
              <div className={styles.summaryValue}>
                {currentPreparedSpells}/{maxPreparedSpells}
              </div>
              <div className={styles.summaryMeta}>Artificer prep cap</div>
            </div>
          </section>
        </article>
        <article>
          <div className={styles.divider}>
            <p>Spells</p>
            <hr />
          </div>
          <section className={styles.list}>
            <p className={styles.subTitle}>Cantrips</p>
            <div className={styles.cards}>
              {cantrips.map((spell) => {
                const isExpanded = !!expandedSpells[spell.name];

                return (
                  <article
                    key={spell.name}
                    className={styles.card}
                    onClick={() => toggleDescription(spell.name)}
                  >
                    <div className={styles.info}>
                      <div className={styles.name}>{spell.name}</div>
                      <div className={styles.meta}>
                        {spell.metadata.join(" | ")}
                      </div>
                      <div
                        className={`${styles.description} ${!isExpanded ? styles.descriptionHidden : ""}`}
                      >
                        <div className={styles.descriptionInner}>
                          {spell.description.map((block: ContentBlock, index) =>
                            renderContentBlock(block, index),
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
          <section>
            <p className={styles.subTitle}>Prepared</p>
            <div className={styles.cards}>
              {prepared.map((spell) => {
                const isExpanded = !!expandedSpells[spell.name];

                return (
                  <article
                    key={spell.name}
                    className={styles.card}
                    onClick={() => toggleDescription(spell.name)}
                  >
                    <div className={styles.info}>
                      <div className={styles.name}>{spell.name}</div>
                      <div className={styles.meta}>
                        {spell.metadata.join(" | ")}
                      </div>
                      <div
                        className={`${styles.description} ${!isExpanded ? styles.descriptionHidden : ""}`}
                      >
                        <div className={styles.descriptionInner}>
                          {spell.description.map((block: ContentBlock, index) =>
                            renderContentBlock(block, index),
                          )}
                        </div>
                      </div>
                    </div>
                    <label
                      className={styles.toggle}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <input
                        className={styles.checkbox}
                        type="checkbox"
                        checked={!!spell.prepared}
                        onClick={(event) => event.stopPropagation()}
                        onChange={() => togglePrepared(spell.name)}
                      />
                      Prepared
                    </label>
                  </article>
                );
              })}
            </div>
          </section>
          <section>
            <p className={styles.subTitle}>First Level</p>
            <div className={styles.cards}>
              {firstLevel.map((spell) => {
                const isExpanded = !!expandedSpells[spell.name];

                return (
                  <article
                    key={spell.name}
                    className={styles.card}
                    onClick={() => toggleDescription(spell.name)}
                  >
                    <div className={styles.info}>
                      <div className={styles.name}>{spell.name}</div>
                      <div className={styles.meta}>
                        {spell.metadata.join(" | ")}
                      </div>
                      <div
                        className={`${styles.description} ${!isExpanded ? styles.descriptionHidden : ""}`}
                      >
                        <div className={styles.descriptionInner}>
                          {spell.description.map((block: ContentBlock, index) =>
                            renderContentBlock(block, index),
                          )}
                        </div>
                      </div>
                    </div>
                    <label
                      className={styles.toggle}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <input
                        className={styles.checkbox}
                        type="checkbox"
                        readOnly
                        onClick={(event) => {
                          event.stopPropagation();
                          togglePrepared(spell.name);
                        }}
                      />
                      Prepared
                    </label>
                  </article>
                );
              })}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Spells;
