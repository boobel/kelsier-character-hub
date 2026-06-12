import React from "react";
import { Character, EquippedWeapon } from "../../../../types/character";
import { getToHitBonus } from "../../../../utils/equipment";
import {
  abilityScoreModifier,
  formatSigned,
} from "../../../../utils/abilityScoreModifier";
import sharedStyles from "../../CharacterSheet.module.scss";
import styles from "./WeaponsTable.module.scss";

type Props = {
  weapons: EquippedWeapon[];
  abilityScores: Character["abilityScores"];
  proficiencyBonus: number;
};

const WeaponsTable = ({ weapons, abilityScores, proficiencyBonus }: Props) => {
  return (
    <article>
      <div className={sharedStyles.tableShell}>
        <div className={sharedStyles.tableGroupTitle}>Weapons</div>
        <div className={sharedStyles.tableHeader}>
          <span>Weapon</span>
          <span>Damage</span>
          <span>To Hit</span>
          <span>Range</span>
          <span>Notes</span>
        </div>
        <div className={styles.weaponRows}>
          {weapons.map((weapon) => {
            const notes = weapon.notes?.length ? weapon.notes.join(", ") : "-";

            return (
              <div className={styles.weaponRow} key={weapon.id}>
                <span className={styles.weaponName}>{weapon.name}</span>
                <span>
                  {weapon.damage.dice} {weapon.damage.type} +
                  {abilityScoreModifier(abilityScores[weapon.abilityScore])}
                </span>
                <span>
                  {formatSigned(
                    getToHitBonus(
                      proficiencyBonus,
                      abilityScoreModifier(abilityScores[weapon.abilityScore]),
                    ),
                  )}
                </span>
                <span>
                  {weapon.range
                    ? `${weapon.range.normal}/${weapon.range.long}`
                    : "-"}
                </span>
                <span className={styles.weaponNotes}>{notes}</span>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default WeaponsTable;
