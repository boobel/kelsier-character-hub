import React, { useMemo } from "react";
import styles from "./Infusions.module.scss";
import { ContentBlock } from "../../types/character";
import { useOutletContext } from "react-router-dom";
import { renderContentBlock } from "../../utils/renderContentBlock";
import type { CharacterOutletContext } from "../../types/outlet-context";

const Infusions: React.FC = () => {
  const { infusions, infusionsActiveMax, setInfusions } =
    useOutletContext<CharacterOutletContext>();

  const sortedInfusions = useMemo(() => {
    return infusions
      .map((infusion, index) => ({ infusion, index }))
      .sort(
        (a, b) =>
          Number(b.infusion.active) - Number(a.infusion.active) ||
          a.index - b.index,
      )
      .map(({ infusion }) => infusion);
  }, [infusions]);

  const activeInfusions = useMemo(
    () => infusions.filter((infusion) => infusion.active),
    [infusions],
  );
  const activeCount = activeInfusions.length;
  const overLimit = activeCount > infusionsActiveMax;

  const toggleInfusion = (name: string) => {
    setInfusions((current) =>
      current.map((infusion) =>
        infusion.name === name
          ? {
              ...infusion,
              active: !infusion.active,
            }
          : infusion,
      ),
    );
  };

  return (
    <div className="page-container">
      <article>
        <div className={styles.divider}>
          <p>Infusions Summary</p>
          <hr />
        </div>
        <section className={styles.summary}>
          <div
            className={`${styles.summaryCard} ${
              overLimit ? styles.summaryCardOverLimit : ""
            }`}
          >
            <div className={styles.summaryLabel}>Active Infusions</div>
            <div
              className={`${styles.summaryValue} ${
                overLimit ? styles.summaryValueOverLimit : ""
              }`}
            >
              <span>{activeCount}</span> / <span>{infusionsActiveMax}</span>
            </div>
            <div className={styles.summarySub}>
              Max active: {infusionsActiveMax}
              {overLimit ? " - too many active infusions" : ""}
            </div>
          </div>
        </section>
      </article>
      <article>
        <div className={styles.divider}>
          <p>Infusions List</p>
          <hr />
        </div>
        <section className={styles.list}>
          {sortedInfusions.map((infusion) => (
            <article
              key={infusion.name}
              className={`${styles.card} ${
                infusion.active ? styles.activeCard : ""
              }`}
            >
              <div className={styles.info}>
                <div className={styles.name}>{infusion.name}</div>
                <div className={styles.meta}>{infusion.tag}</div>
                <div className={styles.description}>
                  {infusion.description.map((block: ContentBlock, index) =>
                    renderContentBlock(block, index),
                  )}
                </div>
              </div>
              <label className={styles.toggle}>
                <input
                  checked={infusion.active}
                  className={styles.checkbox}
                  onChange={() => toggleInfusion(infusion.name)}
                  type="checkbox"
                />
                Active
              </label>
            </article>
          ))}
        </section>
      </article>
    </div>
  );
};

export default Infusions;
