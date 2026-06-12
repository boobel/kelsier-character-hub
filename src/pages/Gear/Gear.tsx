import React from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./Gear.module.scss";
import ItemCard from "./components/ItemCard/ItemCard";
import type { Character } from "../../types/character";

const Gear: React.FC = () => {
  const { equipment } = useOutletContext<Character>();

  return (
    <div className="page-container">
      <article>
        <div className={styles.divider}>
          <p>Weapons</p>
          <hr />
        </div>
        <section className={styles.list}>
          {equipment.weapons.map((weapon) => (
            <ItemCard
              item={weapon}
              key={weapon.id}
              meta={`${weapon.weaponClass} · ${weapon.weaponType}`}
              stats={[
                {
                  label: "Damage",
                  value: `${weapon.damage.dice} ${weapon.damage.type}`,
                },
                {
                  label: "Range",
                  value: weapon.range
                    ? `${weapon.range.normal}/${weapon.range.long}`
                    : "Melee",
                },
                { label: "Ability", value: weapon.abilityScore },
                {
                  label: "Properties",
                  value: weapon.properties.join(", "),
                },
              ]}
            />
          ))}
        </section>
      </article>

      <article>
        <div className={styles.divider}>
          <p>Armor</p>
          <hr />
        </div>
        <section className={styles.list}>
          <ItemCard
            item={equipment.armor}
            meta="Armor"
            stats={[
              { label: "AC Base", value: String(equipment.armor.acBase) },
              {
                label: "Dex Cap",
                value: String(equipment.armor.dexCap ?? "Uncapped"),
              },
            ]}
          />
        </section>
      </article>

      <article>
        <div className={styles.divider}>
          <p>Attuned</p>
          <hr />
        </div>
        <section className={styles.list}>
          {equipment.attuned.length ? (
            equipment.attuned.map((item) => (
              <ItemCard item={item} key={item.id} meta="Gear" />
            ))
          ) : (
            <div className={styles.emptyState}>No attuned items</div>
          )}
        </section>
      </article>

      <article>
        <div className={styles.divider}>
          <p>Other</p>
          <hr />
        </div>
        <section className={styles.list}>
          {equipment.other.map((item) => (
            <ItemCard item={item} key={item.id} meta="Gear" />
          ))}
        </section>
      </article>
    </div>
  );
};

export default Gear;
