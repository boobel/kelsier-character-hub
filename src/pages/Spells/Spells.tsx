import React, { useEffect, useState } from "react";
import styles from "./Spells.module.scss";
import { useOutletContext } from "react-router-dom";
import { renderContentBlock } from "../../utils/renderContentBlock";
import { Character, ContentBlock } from "../../types/character";
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
import type { CharacterOutletContext } from "../../types/outlet-context";

const SPELL_SLOT_STORAGE_KEY_PREFIX = "kelsier-character-hub:spell-slot-pips";

const getSpellSlotStorageKey = (name: string, characterClass: string) =>
  `${SPELL_SLOT_STORAGE_KEY_PREFIX}:${name}:${characterClass}`;

const readStoredSlotUsage = (
  storageKey: string,
): Partial<Record<keyof Character["spellSlotsMax"], number>> => {
  if (typeof window === "undefined") return {};

  try {
    const storedValue = window.localStorage.getItem(storageKey);
    if (!storedValue) return {};

    const parsedValue = JSON.parse(storedValue);
    if (!parsedValue || typeof parsedValue !== "object") return {};

    return Object.entries(parsedValue).reduce<
      Partial<Record<keyof Character["spellSlotsMax"], number>>
    >((accumulator, [key, value]) => {
      if (
        key in parsedValue &&
        typeof value === "number" &&
        Number.isFinite(value)
      ) {
        accumulator[key as keyof Character["spellSlotsMax"]] = value;
      }

      return accumulator;
    }, {});
  } catch {
    return {};
  }
};

const writeStoredSlotUsage = (
  storageKey: string,
  slotUsage: Partial<Record<keyof Character["spellSlotsMax"], number>>,
) => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(storageKey, JSON.stringify(slotUsage));
};

const Spells: React.FC = () => {
  const { identity, spells, setSpells, stats, abilityScores, spellSlotsMax } =
    useOutletContext<CharacterOutletContext>();
  const spellSlotStorageKey = getSpellSlotStorageKey(
    identity.name,
    identity.class,
  );
  spells.sort((a, b) => a.name.localeCompare(b.name));
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
  const overPreparedLimit = currentPreparedSpells > maxPreparedSpells;
  const [expandedSpells, setExpandedSpells] = useState<Record<string, boolean>>(
    {},
  );
  const [expendedSlots, setExpendedSlots] = useState<
    Partial<Record<keyof Character["spellSlotsMax"], number>>
  >(() => readStoredSlotUsage(spellSlotStorageKey));

  useEffect(() => {
    writeStoredSlotUsage(spellSlotStorageKey, expendedSlots);
  }, [expendedSlots, spellSlotStorageKey]);

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
  const alwaysPrepared = spells.filter(
    (spell) => spell.alwaysPrepared === true,
  );
  const prepared = spells.filter(
    (spell) => spell.level !== "Cantrip" && spell.prepared,
  );
  const firstLevel = spells.filter(
    (spell) => spell.level === 1 && !spell.prepared && !spell.alwaysPrepared,
  );

  return (
    <div className="page-container">
      <div className={styles.spellsPage}>
        <article className={styles.summarySection}>
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
                8 + INT + Proficiency Bonus
              </div>
            </div>
            <div className={styles.summaryCard}>
              <div className={styles.summaryLabel}>Spell Attack</div>
              <div className={styles.summaryValue}>
                {formatSigned(
                  spellAttackModifier(proficiencyBonus, intelligenceModifier),
                )}
              </div>
              <div className={styles.summaryMeta}>INT + Proficiency bonus</div>
            </div>
            <div
              className={`${styles.summaryCard} ${overPreparedLimit ? styles.summaryCardOverLimit : ""}`}
            >
              <div className={styles.summaryLabel}>Prepared Spells</div>
              <div
                className={`${styles.summaryValue} ${overPreparedLimit ? styles.summaryValueOverLimit : ""}`}
              >
                {currentPreparedSpells}/{maxPreparedSpells}
              </div>
              <div className={styles.summaryMeta}>
                INT + Half Artificer Lvl
                {overPreparedLimit ? " - too many prepared spells" : ""}
              </div>
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
            <p className={styles.subTitle}>Always Prepared</p>
            <div className={styles.cards}>
              {alwaysPrepared.map((spell) => {
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
                      <div className={styles.header}>
                        <div className={styles.name}>{spell.name}</div>

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
                      </div>
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
                      <div>
                        <div>
                          <div className={styles.header}>
                            <div className={styles.name}>{spell.name}</div>

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
                          </div>
                          <div className={styles.meta}>
                            {spell.metadata.join(" | ")}
                          </div>
                        </div>
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
        </article>
      </div>
    </div>
  );
};

export default Spells;
