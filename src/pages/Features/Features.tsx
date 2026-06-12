import React from "react";
import styles from "./Features.module.scss";

const Features: React.FC = () => {
  return (
    <div className={`page-container ${styles.page}`}>
      <article className={styles.section}>
        <div className={styles.divider}>
          <p>Class Features</p>
          <hr />
        </div>

        <section className={styles.list}>
          <article className={styles.card}>
            <div className={styles.name}>Magical Tinkering</div>
            <div className={styles.source}>Artificer · Level 1</div>
            <div className={styles.desc}>
              <p>
                To use this ability, you must have thieves’ tools or artisan’s
                tools in hand. You then touch a Tiny nonmagical object as an
                action and give it one of the following magical properties of
                your choice:
              </p>
              <ul>
                <li>
                  The object sheds bright light in a 5-foot radius and dim
                  light for an additional 5 feet.
                </li>
                <li>
                  Whenever tapped by a creature, the object emits a recorded
                  message that can be heard up to 10 feet away. You utter the
                  message when you bestow this property on the object, and the
                  recording can be no more than 6 seconds long.
                </li>
                <li>
                  The object continuously emits your choice of an odor or a
                  nonverbal sound (wind, waves, chirping, or the like). The
                  chosen phenomenon is perceivable up to 10 feet away.
                </li>
                <li>
                  A static visual effect appears on one of the object’s
                  surfaces. This effect can be a picture, up to 25 words of
                  text, lines and shapes, or a mixture of these elements, as
                  you like.
                </li>
              </ul>
              <p>
                The chosen property lasts indefinitely. As an action, you can
                touch the object and end the property early.
              </p>
              <p>
                You can bestow magic on multiple objects, touching one object
                each time you use this feature, though a single object can only
                bear one property at a time. The maximum number of objects you
                can affect with this feature at one time is equal to your
                Intelligence modifier (minimum of one object). If you try to
                exceed your maximum, the oldest property immediately ends, and
                then the new property applies.
              </p>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.name}>Spellcasting</div>
            <div className={styles.source}>Artificer · Level 1</div>
            <div className={styles.desc}>
              <p>
                You’ve studied the workings of magic and how to cast spells,
                channeling the magic through objects. To observers, you don’t
                appear to be casting spells in a conventional way; you appear
                to produce wonders from mundane items and outlandish
                inventions.
              </p>
              <h3>Tools required</h3>
              <p>
                You produce your artificer spell effects through your tools. You
                must have a spellcasting focus - specifically, a set of
                artisan’s tools or a spellcasting focus item - in hand when you
                cast any spell with this feature. An resonance firearm counts
                as a spellcasting focus for your artificer spells.
              </p>
              <h3>Cantrips</h3>
              <p>
                At 1st level, you know two cantrips of your choice from the
                artificer spell list. At higher levels, you learn additional
                artificer cantrips of your choice, as shown in the Cantrips
                Known column of the Artificer table. When you gain a level in
                this class, you can replace one of the artificer cantrips you
                know with another cantrip from the artificer spell list.
              </p>
              <h3>Preparing and casting spells</h3>
              <p>
                You prepare the list of artificer spells that are available for
                you to cast, choosing from the artificer spell list. When you do
                so, choose a number of artificer spells equal to your
                Intelligence modifier + half your artificer level, rounded down
              </p>
              <p>
                You can change your list of prepared spells when you finish a
                long rest. Preparing a new list of artificer spells requires
                time spent tinkering with your spellcasting focuses: at least 1
                minute per spell level for each spell on your list.
              </p>
              <h3>Ritual Casting</h3>
              <p>
                You can cast an artificer spell as a ritual if that spell has
                the ritual tag and you have the spell prepared.
              </p>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.name}>Resonant Spellcasting</div>
            <div className={styles.source}>Resonance Gunslinger · Level 3</div>
            <div className={styles.desc}>
              <p>
                You can channel your innate magic using your Spark of Resonance
                as a spellcasting focus. Any spells tied to the gun's mechanism,
                use the gun itself as a spellcasting focus.
              </p>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.name}>Infuse Item</div>
            <div className={styles.source}>Artificier · Level 2</div>
            <div className={styles.desc}>
              <p>
                You gain the ability to imbue mundane items with certain
                magical infusions. The magic items you create with this feature
                are effectively prototypes of permanent items.
              </p>
              <h3>Infusions Known</h3>
              <p>
                When you gain this feature, pick four artificer infusions to
                learn. You learn additional infusions of your choice when you
                reach certain levels in this class.
              </p>
              <h3>Infusing an Item</h3>
              <p>
                Whenever you finish a long rest, you can touch a non-magical
                object and imbue it with one of your artificer infusions,
                turning it into a magic item. An infusion works on only certain
                kinds of objects, as specified in the infusion’s description.
                If the item requires attunement, you can attune yourself to it
                the instant you infuse the item.
              </p>
              <p>
                Your infusion remains in an item indefinitely, but when you
                die, the infusion vanishes after a number of days have passed
                equal to your Intelligence modifier. The infusion also vanishes
                if you give up your knowledge of the infusion for another one.
              </p>
              <p>
                You can infuse more than one nonmagical object at the end of a
                long rest. You must touch each of the objects, and each of your
                infusions can be in only one object at a time. Moreover, no
                object can bear more than one of your infusions at a time. If
                you try to exceed your maximum number of infusions, the oldest
                infusion immediately ends, and then the new infusion applies.
              </p>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.name}>The Right Tool for the Job</div>
            <div className={styles.source}>Artificer · Level 3</div>
            <div className={styles.desc}>
              <p>
                You learn how to produce exactly the tool you need: with
                thieves’ tools or artisan’s tools, you can magically create one
                set of artisan’s tools in an unoccupied space within 5 feet of
                you. This creation requires 1 hour of uninterrupted work, which
                can coincide with a short or long rest. Though the product of
                magic, the tools are nonmagical, and they vanish when you use
                this feature again.
              </p>
            </div>
          </article>
        </section>
      </article>

      <article className={styles.section}>
        <div className={styles.divider}>
          <p>Character Features</p>
          <hr />
        </div>

        <section className={styles.list}>
          <article className={styles.card}>
            <div className={styles.name}>Spark of Resonance</div>
            <div className={styles.source}>
              Setting Feature · Spark of Magic · Homebrew
            </div>
            <div className={styles.desc}>
              <h3>Resonant Arsenal</h3>
              <p>
                Any firearms created with FerroMetal use your Spark of Resonance
                as a power source.
              </p>
              <h3>Imbued Shot</h3>
              <p>
                Once a turn you can add damage equal to your proficiency bonus
                to a firearm attack.
              </p>
              <h3>Ferromagnetic Pull</h3>
              <p>Grants the Ferromangetic Pull cantrip.</p>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.name}>Clockwork Tinkerer</div>
            <div className={styles.source}>Origin Feature · Homebrew</div>
            <div className={styles.desc}>
              <p>
                You grew up in the smoke and clatter of workshops, running
                errands between blacksmiths, tinkerers and artificiers before
                you ever picked up a tool yourself. You learned to read a
                schematic before you could read a map, to recognise when a
                mechanism needed a gear replaced versus a formula rewritten.
                The craftspeople you served taught you, mostly without meaning
                to. By the time you left, you weren't their runner anymore. You
                were their peer.
              </p>
              <h3>Skill Proficiencies</h3>
              <p>Sleight of Hand, Investigation</p>
              <h3>Tool Proficiencies</h3>
              <p>
                Blacksmithing Tools, one type of artisan's tools of your choice
              </p>
              <h3>Equipment</h3>
              <ul>
                <li>Set of artisan's tools of your choice</li>
                <li>Pouch clockwork components</li>
                <li>A notebook and a charcoal stick</li>
                <li>10gp</li>
              </ul>
              <h3>Feature</h3>
              <p>
                <strong>Artisan Network</strong> — you grew up as the errand
                runner between workshops. In any settlement with a crafting or
                merchant community, you can find someone willing to give you
                access to a workspace, basic materials, or trade information in
                exchange for labor or expertise.
              </p>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.name}>Arcane Mark</div>
            <div className={styles.source}>Setting Feature · Homebrew</div>
            <div className={styles.desc}>
              <p>
                Being a citizen with considerable magical ability you've been
                bestowed with an Arcane Mark. It comes in a form of an
                invisible tattoo underneither your left eye. The tattoo can be
                revealed when illuminated with a specific source.
              </p>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.name}>Gunner</div>
            <div className={styles.source}>Variant Human Feature</div>
            <div className={styles.desc}>
              <p>
                You have a quick hand and keen eye when employing firearms,
                granting you the following benefits:
              </p>
              <ul>
                <li>You ignore the loading property of firearms.</li>
                <li>
                  Being within 5 feet of a hostile creature doesn't impose
                  disadvantage on your ranged attack rolls.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </article>
    </div>
  );
};

export default Features;
