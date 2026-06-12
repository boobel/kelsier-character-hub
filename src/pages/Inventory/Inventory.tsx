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
      <article className={styles.currencyContainer}>
        <div className={styles.currencyBlock}>
          <p className={styles.currencyTitle} id="currency-title-platinum">
            Platinum
          </p>
          <input
            className={styles.currencyInput}
            id="currency-platinum"
            readOnly
            value={currency.platinum}
          />
        </div>
        <div className={styles.currencyBlock}>
          <p className={styles.currencyTitle} id="currency-title-gold">
            Gold
          </p>
          <input
            className={styles.currencyInput}
            id="currency-gold"
            readOnly
            value={currency.gold}
          />
        </div>
        <div className={styles.currencyBlock}>
          <p className={styles.currencyTitle} id="currency-title-silver">
            Silver
          </p>
          <input
            className={styles.currencyInput}
            id="currency-silver"
            readOnly
            value={currency.silver}
          />
        </div>
        <div className={styles.currencyBlock}>
          <p className={styles.currencyTitle} id="currency-title-copper">
            Copper
          </p>
          <input
            className={styles.currencyInput}
            id="currency-copper"
            readOnly
            value={currency.copper}
          />
        </div>
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
