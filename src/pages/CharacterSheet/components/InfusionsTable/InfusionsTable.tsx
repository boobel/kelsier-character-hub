import React from "react";
import type { Infusion } from "../../../../types/character";
import sharedStyles from "../../CharacterSheet.module.scss";
import styles from "./InfusionsTable.module.scss";

type Props = {
  infusions: Infusion[];
};

const InfusionsTable: React.FC<Props> = ({ infusions }) => {
  const activeInfusions = infusions.filter((infusion) => infusion.active);

  return (
    <article>
      <div className={sharedStyles.tableShell}>
        <div className={sharedStyles.tableGroupTitle}>Infusions</div>
        <div
          className={sharedStyles.tableHeader}
          style={{ gridTemplateColumns: "1fr 1.4fr" }}
        >
          <span>Infusion</span>
          <span>Status / Tag</span>
        </div>
        <div className={styles.tableRows}>
          {activeInfusions.length ? (
            activeInfusions.map((infusion) => (
              <div className={styles.tableRow} key={infusion.name}>
                <span className={styles.infusionName}>{infusion.name}</span>
                <span className={styles.infusionStatus}>Active · {infusion.tag}</span>
              </div>
            ))
          ) : (
            <div className={styles.tableEmptyBody}>No active infusions</div>
          )}
        </div>
      </div>
    </article>
  );
};

export default InfusionsTable;
