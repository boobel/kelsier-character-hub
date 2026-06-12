import React from "react";
import styles from "./Header.module.scss";

type PageProps = {
  identity: {
    name: string;
    class: string;
    subclass: string;
    level: number;
    background: string;
    race: string;
    alignment: string;
    religion: string;
    age: number;
  };
};

const Header: React.FC<PageProps> = ({ identity }) => {
  return (
    <header className={styles.header}>
      <section className={styles.identity}>
        <h1 className={styles.name}>{identity.name}</h1>
        <p className={styles.characterClass}>
          {identity.class}
          <span aria-hidden="true"> · </span>
          {identity.subclass}
        </p>
      </section>

      <dl className={styles.stats}>
        <div className={styles.statRow}>
          <dt className={styles.statLabel}>Level</dt>
          <dd className={styles.statValue}>{identity.level}</dd>
        </div>
        <div className={styles.statRow}>
          <dt className={styles.statLabel}>Background</dt>
          <dd className={styles.statValue}>{identity.background}</dd>
        </div>
        <div className={styles.statRow}>
          <dt className={styles.statLabel}>Age</dt>
          <dd className={styles.statValue}>{identity.age}</dd>
        </div>
        <div className={styles.statRow}>
          <dt className={styles.statLabel}>Alignment</dt>
          <dd className={styles.statValue}>{identity.alignment}</dd>
        </div>
        <div className={styles.statRow}>
          <dt className={styles.statLabel}>Religion</dt>
          <dd className={styles.statValue}>{identity.religion}</dd>
        </div>
      </dl>
    </header>
  );
};

export default Header;
