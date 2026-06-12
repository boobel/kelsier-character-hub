import React from "react";
import styles from "./Inventory.module.scss";
import { useOutletContext } from "react-router-dom";
import { Character } from "../../types/character";

const Inventory: React.FC = () => {
  const { currency, inventory } = useOutletContext<Character>();

  const sortedInventory = [...inventory].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <div className="page-container">
      <article>
        <div className={styles.divider}>
          <p>Currency</p>
          <hr />
        </div>
        <section className={styles.currencyContainer}>
          <div className={styles.currencyBlock}>
            <p className={styles.currencyTitle} id="currency-title-platinum">
              Platinum
            </p>
            <input
              className={styles.currencyInput}
              value={currency.platinum}
              id="copper"
            />
          </div>
          <div className={styles.currencyBlock}>
            <p className={styles.currencyTitle} id="currency-title-gold">
              Gold
            </p>
            <input
              className={styles.currencyInput}
              value={currency.gold}
              id="copper"
            />
          </div>
          <div className={styles.currencyBlock}>
            <p className={styles.currencyTitle} id="currency-title-silver">
              Silver
            </p>
            <input
              className={styles.currencyInput}
              value={currency.silver}
              id="copper"
            />
          </div>
          <div className={styles.currencyBlock}>
            <p className={styles.currencyTitle} id="currency-title-copper">
              Copper
            </p>
            <input
              className={styles.currencyInput}
              value={currency.copper}
              id="copper"
            />
          </div>
        </section>
      </article>
      <article>
        <div className={styles.divider}>
          <p>Inventory</p>
          <hr />
        </div>
        <section className={styles.itemContainer}>
          {sortedInventory.map((item) => {
            return (
              <div className={styles.item} key={item.name}>
                <p className={styles.itemName}>{item.name}</p>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.itemQuantity}>{item.quantity}</p>
              </div>
            );
          })}
        </section>
      </article>
    </div>
  );
};

export default Inventory;
