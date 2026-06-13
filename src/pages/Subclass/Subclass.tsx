import React from "react";
import styles from "./Subclass.module.scss";

const Subclass: React.FC = () => {
  return (
    <div className="page-container">
      <div className={styles.parchmentWrap}>
        <div className={styles.parchEyebrow}>
          Artificer Specialist · Homebrew
        </div>
        <div className={styles.parchTitle}>Resonance Gunslinger</div>
        <div className={styles.parchSubtitle}>
          Adapted for Valenor · Based on Gunslinger by Xyrlian
        </div>
        <div className={styles.parchDivider} />

        <div className={styles.parchFlavor}>
          "This one's got a little kick." — Ollo Gearwick, on first successful
          test of a resonance firearm prototype
        </div>

        <p className={styles.parchP}>
          Artificers who pursue the path of the Resonance Gunslinger have
          devoted their craft to the study of ferromagial alloy firearms —
          weapons that channel the wielder&apos;s innate magic into
          magnetically-accelerated projectiles. Where other artificers build
          outward into the world, the Gunslinger builds inward: every weapon is
          an extension of the self, tuned to a frequency only they can produce.
        </p>

        <div className={styles.parchH2}>Resonant Spellcasting</div>
        <p className={styles.parchP}>
          As part of this subclass, you gain access to the spells from the table
          below. Spells intrinsically tied to your firearm&apos;s mechanisms
          (such as <em>Magnetobolt</em>, <em>Perforating Bolt</em>, or{" "}
          <em>Conjure Cannonball</em>) use the <strong>gun itself</strong> as a
          spellcasting focus. All other resonant spells utilize your{" "}
          <strong>Spark of Resonance</strong> as their focus.
        </p>
        <div className={styles.parchSparkBox}>
          <div className={styles.parchSparkBoxTitle}>
            The Spark of Resonance
          </div>
          <p className={`${styles.parchP} ${styles.parchSmallFlush}`}>
            The Spark of Resonance is an innate source of magic you were born
            with.
          </p>
        </div>
        <table className={styles.parchTable}>
          <thead>
            <tr>
              <th>Artificer Level</th>
              <th>Spells</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3rd</td>
              <td>
                <em>
                  Magnetobolt, Perforating Shot, Concealed Shot, Magnetic Bolt
                </em>
              </td>
            </tr>
            <tr>
              <td>5th</td>
              <td>
                <em>Arcanomagnetic Repulsion, Ballistic Smite</em>
              </td>
            </tr>
            <tr>
              <td>9th</td>
              <td>
                <em>Conjure Cannonball, Magnetic Shard</em>
              </td>
            </tr>
            <tr>
              <td>13th</td>
              <td>
                <em>Gravity Sinkhole, Storm Stallion</em>
              </td>
            </tr>
            <tr>
              <td>17th</td>
              <td>
                <em>Magnetize, Gravity Smash</em>
              </td>
            </tr>
          </tbody>
        </table>
        <p className={`${styles.parchP} ${styles.parchMuted}`}>
          These spells are always prepared and don't count against your daily
          limit.
        </p>

        <div className={styles.parchH2}>Resonant Gunsmith</div>
        <p className={styles.parchP}>
          By 3rd level, you have developed the knowledge to forge a resonance
          firearm built around ferromagial alloy coils.
        </p>
        <p className={styles.parchP}>
          Your firearm grants you the following benefits:
        </p>
        <ul className={styles.parchUl}>
          <li>
            Use <strong>Intelligence modifier</strong> for attack and damage
            rolls.
          </li>
          <li>
            Use the firearm as a <strong>spellcasting focus</strong> for your
            subclass specific spells.
          </li>
          <li>
            Your firearms can bear <b>one</b> infusion each.
          </li>
          <li>
            If your firearm calls for a saving throw, use your{" "}
            <strong>Spell Save DC</strong>.
          </li>
          <li>
            Uses <strong>metallic ball bearings</strong> as ammunition
          </li>
        </ul>

        <div className={styles.parchCallout}>
          <div className={styles.parchCalloutTitle}>⚠ Resonance Overload</div>
          <p>
            When you roll a <strong>natural 1</strong> on an attack roll with
            your firearm, the magnetic coils destabilize. You take force damage
            equal to the weapon&apos;s damage die and the weapon locks up. See
            each model for the action required to vent and reset.
          </p>
          <p className={styles.flowSpace}>
            <strong>Overcharge Stacking.</strong> During combat, Overcharge
            stacks are cumulative rather than replacing one another. Whenever a
            feature grants you an Overcharge stack, add it to your current
            total, until the the weapon overloads or you vent to reset.
          </p>
        </div>

        <div className={styles.parchH2}>Firearm Models</div>

        <div className={styles.parchStatblock}>
          <div className={styles.parchStatblockName}>Runic Repeater</div>
          <div className={styles.parchStatblockType}>
            Ranged Weapon (pistol) · Martial · Light
          </div>
          <div className={styles.parchStatLine}>
            <span className={styles.parchStatLabel}>Damage</span> 1d10 piercing
          </div>
          <div className={styles.parchStatLine}>
            <span className={styles.parchStatLabel}>Range</span> 60 / 180 ft.
          </div>
          <div className={styles.parchStatLine}>
            <span className={styles.parchStatLabel}>Properties</span> Light,
            Simple, Ranged
          </div>
          <hr className={styles.parchHr} />
          <div className={styles.parchProperty}>
            <span className={styles.parchPropertyName}>Loading.</span> 1 shot.
            Action to reload.
          </div>
          <div className={styles.parchProperty}>
            <span className={styles.parchPropertyName}>
              Resonance Overload.
            </span>{" "}
            Nat 1 → 1d4 force self. Bonus action to vent.
          </div>
          <div className={styles.parchProperty}>
            <span className={styles.parchPropertyName}>Magnetic Anchor.</span>
            When you hit a creature with an attack from this weapon, the
            metallic projectile becomes lodged in the target, turning them into
            a powerful magnetic anchor. You gain the following benefits against
            that specific creature:
            <ul className={`${styles.parchUl} ${styles.compactList}`}>
              <li>
                <strong>Magnetic Pull.</strong> Utilizing the homing ability
                between two magnetically charged bullets, your attacks reach the
                target easier:
                <ul className={`${styles.parchUl} ${styles.compactListItem}`}>
                  <li>
                    You are able to roughly ascertain the embeded targets
                    location withing 15ft. until the bullet is destroyed.
                  </li>
                  <li>Attacks bend toward the target, ignoring half cover.</li>
                </ul>
              </li>
              <li>
                <strong>Kinetic Velocity.</strong> All subsequent attacks that
                hit the target during this turn deal an extra 1d4 force damage,
                as the projectile is violently accelerated toward the magnetic
                anchor and expel a magnetic pulse upon collision.
              </li>
              <li>
                <strong>Anchor Detonation.</strong> As a bonus action, you
                remotely destabilize the anchor, dealing 1d8 force damage to the
                target and reducing its speed by 10 ft. until the end of its
                next turn. The bullet is destroyed and the anchor ends.
              </li>
            </ul>
            You can have only one magnetic anchor active at a time.
          </div>
        </div>

        <div className={styles.parchStatblock}>
          <div className={styles.parchStatblockName}>Force Rifle</div>
          <div className={styles.parchStatblockType}>
            Ranged Weapon (rifle) · Martial · Two-Handed
          </div>
          <div className={styles.parchStatLine}>
            <span className={styles.parchStatLabel}>Damage</span> 1d12 piercing
          </div>
          <div className={styles.parchStatLine}>
            <span className={styles.parchStatLabel}>Range</span> 150 / 600 ft.
          </div>
          <div className={styles.parchStatLine}>
            <span className={styles.parchStatLabel}>Properties</span>{" "}
            Two-Handed, Heavy, Ranged
          </div>
          <hr className={styles.parchHr} />
          <div className={styles.parchProperty}>
            <span className={styles.parchPropertyName}>Loading.</span> 1 shot.
            Action to reload.
          </div>
          <div className={styles.parchProperty}>
            <span className={styles.parchPropertyName}>
              Resonance Overload.
            </span>{" "}
            Nat 1 → 1d6 force self. Action to vent.
          </div>
          <div className={styles.parchProperty}>
            <span className={styles.parchPropertyName}>Focus.</span>
            If you take the Attack action with this weapon and do not move
            during your turn, you gain one Focus stack (maximum 3). All stacks
            are lost if you move or become unwillingly moved, are knocked prone,
            or swap weapons. Each stack grants the following cumulative
            benefits:
            <ul className={`${styles.parchUl} ${styles.compactList}`}>
              <li>
                <strong>1 Stack — Steadied.</strong> You gain a +1 bonus to
                attack rolls with this weapon. While Steadied, your attacks
                score a critical hit on a roll of 19 or 20.
              </li>
              <li>
                <strong>2 Stacks — Attuned.</strong> Your attacks deal an
                additional 1d8 force damage. On a hit, the target must succeed
                on a Strength saving throw or have its speed reduced by 10 feet
                until the start of your next turn.
              </li>
              <li>
                <strong>3 Stacks — All-Seeing.</strong> You project a 150-foot
                cone of suppression in a direction of your choice. Until the
                start of your next turn, you can expend one Trick Shot use to
                make a reaction attack against any creature that moves within
                the cone.
              </li>
            </ul>
          </div>
          <div className={styles.parchProperty}>
            <span className={styles.parchPropertyName}>Dead Still.</span>
            While you have 3 Focus stacks, you can choose to expend all stacks
            and one trick shot charge to perform a perfect shot. You have
            advantage on the attack roll, and if the attack hits, it is a
            critical hit.
          </div>
        </div>

        <div className={styles.parchH2}>
          Extra Attack <span className={styles.parchLabel}>(5th level)</span>
        </div>
        <p className={styles.parchP}>
          At 5th level, you can attack twice whenever you take the Attack action
          on your turn.
        </p>

        <div className={styles.parchH2}>
          Trick Shot <span className={styles.parchLabel}>(9th level)</span>
        </div>
        <p className={styles.parchP}>
          By 9th level, you have learned to manipulate the kinetic and resonant
          energies of your firearm to produce devastating tactical effects. When
          you make an attack with your firearm, you can expend one use of this
          feature to perform a Trick Shot:
        </p>
        <ul className={styles.parchUl}>
          <li>
            <strong>Dazing Shot.</strong> Target must succeed on a Constitution
            saving throw or suffer disadvantage on attack rolls until the end of
            its next turn.
          </li>
          <li>
            <strong>Deadeye Shot.</strong> You take a moment to perfectly align
            the resonance coils. You gain advantage on the attack roll.
          </li>
          <li>
            <strong>Disarming Shot.</strong> Target must succeed on a Strength
            saving throw or drop one held item.
          </li>
          <li>
            <strong>Forceful Shot.</strong> The kinetic energy of the shot is
            immense. Target must succeed on a Strength saving throw or be pushed
            10 feet.
          </li>
          <li>
            <strong>Piercing Shot.</strong> (+1 overload) On a hit, make an
            additional attack roll with disadvantage against one creature behind
            the target in a line within the weapon&apos;s first range increment.
          </li>
          <li>
            <strong>Violent Shot.</strong> (+2 overload) You push the coils to
            their breaking point, add one additional damage die.
          </li>
          <li>
            <strong>Winging Shot.</strong> Target must succeed on a Strength
            saving throw or be knocked prone.
          </li>
        </ul>
        <p>
          <b>Uses:</b> Proficiency Bonus. Regain on short or long rest.
        </p>
        <p className={styles.parchP}>
          You can only apply one Trick Shot per attack.
        </p>
      </div>
    </div>
  );
};

export default Subclass;
