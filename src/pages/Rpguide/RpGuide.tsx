import React from "react";
import styles from "./Rpguide.module.scss";

const RpGuide: React.FC = () => {
  return (
    <div className={`page-container ${styles.page}`}>
      <section className={styles.section}>
        <div className={styles.divider}>
          <p>Core Playing Principle</p>
          <hr />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>System before emotion</div>
          <div className={styles.cardBody}>
            Kelsier&apos;s default mode is analysis. Before he reacts
            emotionally, he is already cataloguing variables. He is not cold —
            he genuinely cares — but he expresses that care through
            problem-solving, not sentiment. When someone is hurt, he finds a
            fix. When someone is lost, he maps the route. Lean into this gap:
            he is often more present and helpful than he appears, and other
            players may misread him as distant.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Optimism as a choice, not a trait</div>
          <div className={styles.cardBody}>
            His brightness is not naive — it is deliberate. He has seen enough
            to know things fall apart, so he chooses not to let that dominate.
            If things go badly, he does not despair: he recalibrates. If a plan
            fails, it becomes data. This is a powerful roleplay anchor — it
            keeps him from becoming pessimistic even under pressure.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Grit &amp; stubbornness</div>
          <div className={styles.cardBody}>
            Once Kelsier commits to something, external resistance becomes fuel
            rather than a deterrent. Setbacks don&apos;t soften his resolve —
            they sharpen it. This isn&apos;t bravado or stubbornness for its
            own sake. It is the same quality that kept him working in Ollo&apos;s
            workshop for years, reconstructing fragments of a dead woman&apos;s
            research from memory and scrap. When a problem refuses to yield, he
            takes that personally. The harder the wall, the more methodically he
            dismantles it. Play this as quiet, grinding persistence rather than
            dramatic defiance — he doesn&apos;t announce that he won&apos;t give
            up. He just doesn&apos;t.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Oathkeeper</div>
          <div className={styles.cardBody}>
            Kelsier grew up among dwarves and gnomes — people who treat a
            contract as a form of architecture. A promise, to him, is a
            structure you are responsible for maintaining. If he gives you his
            word, the inconvenience of keeping it is irrelevant. He will carry
            it. This is not a personality quirk — it is a core value shaped by
            his upbringing in Ironhollow, where your reputation in the workshop
            was the only currency that mattered. Use this at the table: let it
            create tension. If he swears to protect someone and later discovers
            they&apos;ve wronged the party, that tension is the scene. He does
            not abandon oaths because circumstances changed. He finds another
            way.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Against superstition</div>
          <div className={styles.cardBody}>
            Kelsier was raised in a village where everything had a mechanism —
            ore had a grain, alloys had tolerances, clockwork had logic. The
            idea that something happens because of luck, fate, or spiritual
            punishment doesn&apos;t sit right with him. Not because he&apos;s
            closed-minded, but because he finds superstition intellectually
            lazy. If something strange is happening, there is a reason. His
            arcane mark misbehaves for a cause. His mother didn&apos;t vanish
            because of a curse — something specific happened, and it can be
            understood. Play this as a running friction when the party leans
            into folk belief or mysticism: he doesn&apos;t mock people for it,
            but he will quietly start trying to find the real mechanism
            underneath. He treats the supernatural the same way he treats a
            misfiring weapon — as an engineering problem he hasn&apos;t solved
            yet.
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}>
          <p>How He Engages with the World</p>
          <hr />
        </div>
        <div className={styles.twoCol}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Institutions &amp; authority</div>
            <div className={styles.cardBody}>
              Guilds, nobles, governing bodies — he views all of them as tools.
              Useful until proven broken, replaceable when they fail. He will
              cooperate with structures that work, but will never defer to
              authority for its own sake.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Craftsmanship &amp; peers</div>
            <div className={styles.cardBody}>
              He genuinely lights up around skilled makers — dwarven smiths,
              gnomish engineers, anyone who builds. This is one of his most
              unguarded emotional registers. Let him get excited. Let him ask
              too many questions.
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}>
          <p>Quirks &amp; Habits</p>
          <hr />
        </div>
        <div className={styles.twoCol}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Procedure, not superstition</div>
            <div className={styles.cardBody}>
              He dislikes superstition but secretly engages in rituals inherited
              from his mother&mdash;like tapping the alloy chamber three times
              and whispering <em>&quot;Stable&quot;</em> before use. He insists
              it&apos;s just <strong>&quot;procedure,&quot;</strong> but it
              provides an unacknowledged emotional connection to his past.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Emotional blind spots</div>
            <div className={styles.cardBody}>
              Kelsier often mistakes <strong>fixing for helping</strong>. If
              someone says they are scared, he suggests tactical cover rather
              than comfort. He doesn&apos;t realize his focus can be
              unnerving; he may examine magical residue while others mourn, as
              he feels understanding the mechanism is the highest form of
              respect.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Memory interference</div>
            <div className={styles.cardBody}>
              When his mark flares, he triggers brief, vivid fragments: the
              smell of oil, a hummed phrase, or the warmth of his mother&apos;s
              hand. These sensory callbacks vanish as quickly as they appear,
              keeping the mystery of his disappearance emotionally active and
              grounded in the present.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>Social habits</div>
            <div className={styles.cardBody}>
              His hands are <strong>always occupied</strong>&mdash;rotating
              gears, adjusting screws, or sketching. He bonds by finishing
              others&apos; technical sentences and displays
              &quot;accidentally interrogative&quot; enthusiasm toward others&apos;
              gear.
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}>
          <p>Danger &amp; Combat Behavior</p>
          <hr />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Unnervingly calm under pressure</div>
          <div className={styles.cardBody}>
            In high-stakes moments, Kelsier becomes quieter and more focused —
            not more frantic. He is in his element when things are dangerous,
            because danger is just a problem with higher stakes. Roleplay this
            as deliberate calm, not bravado. He is not showing off. He is
            running calculations.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Failure is data, not disaster</div>
          <div className={styles.cardBody}>
            If something goes wrong — a spell misfires, the firearm
            destabilizes, a plan collapses — Kelsier&apos;s first instinct is
            not shame or panic. It is <em>why</em>. He will push into the
            aftermath to understand it. This makes him resilient and genuinely
            interesting to play through failure states.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Tactical, not reckless</div>
          <div className={styles.cardBody}>
            His risk tolerance is higher than most people&apos;s — but it is
            calibrated, not careless. He has grown up around things that
            explode, misfire, and destabilize. He respects danger the way an
            engineer respects load tolerances. He will take a risk if the
            expected outcome justifies it. He will not take a risk that has no
            upside. When the party sees him move confidently into something
            dangerous, it is because he has already done the math, not because
            he isn&apos;t afraid.
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Sudden silence</div>
          <div className={styles.cardBody}>
            In the face of danger or a serious problem if he suddenly goes
            quiet, that should be a signal that something is gravely wrong.
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}>
          <span className={styles.inlineCluster}>
            <span className={styles.arcaneDot} />
          </span>
          <p>Spark of Resonance — Playing the Mystery</p>
          <hr />
        </div>
        <div className={styles.card}>
          <div className={styles.cardBody}>
            Kelsier knows his innate magic is different but does not know
            <em> why</em>. Play this as ongoing low-level unease rather than
            active distress. He does not catastrophize it — but he notices it.
            When the geometric lines surface under stress, let it be visible to
            the party without explanation. Resist the urge to over-explain.
            <strong>The mystery is an asset at the table.</strong>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}>
          <p>Things to Do</p>
          <hr />
        </div>
        <div className={styles.cardCompact}>
          <div className={styles.doItem}>
            <div className={styles.doMarker}>Do</div>
            <div className={styles.doText}>
              <strong>Show care through action, not words.</strong> When
              someone in the party is struggling, let Kelsier&apos;s response
              be practical — he reconfigures something, offers a component,
              maps an exit, takes a position. The emotion is present. He just
              routes it through his hands. Other characters will notice the
              pattern before he names it.
            </div>
          </div>
          <div className={styles.doItem}>
            <div className={styles.doMarker}>Do</div>
            <div className={styles.doText}>
              <strong>Let him get genuinely excited about craft.</strong> When
              the party encounters skilled makers, unusual technology, or
              strange mechanisms, drop the guard. Ask too many questions.
              Interrupt. This is where the real Kelsier surfaces — unfiltered,
              warm, and slightly exhausting. It&apos;s one of his most
              humanizing registers.
            </div>
          </div>
          <div className={styles.doItem}>
            <div className={styles.doMarker}>Do</div>
            <div className={styles.doText}>
              <strong>Treat oaths as scene-defining moments.</strong> When he
              makes a promise at the table, flag it internally. Callbacks to
              earlier oaths — especially when keeping them becomes costly —
              are some of his most powerful character moments. Let the table
              feel the weight.
            </div>
          </div>
          <div className={styles.doItem}>
            <div className={styles.doMarker}>Do</div>
            <div className={styles.doText}>
              <strong>Notice the mark without performing it.</strong> When the
              geometric lines surface, a glance downward, a pause mid-sentence,
              a slight recalibration &mdash; small, grounded signals. The party
              reads these cues more powerfully than any monologue about what
              the mark might mean.
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}>
          <p>Things to Do Not</p>
          <hr />
        </div>
        <div className={styles.cardCompact}>
          <div className={styles.avoidItem}>
            <div className={styles.avoidMarker}>Don&apos;t</div>
            <div className={styles.avoidText}>
              <strong>Don&apos;t play the grief loudly.</strong> He has
              forgotten her face, her name, almost everything. The loss is
              present but not raw — it is closer to a gap than a wound. Quiet
              is more powerful here.
            </div>
          </div>
          <div className={styles.avoidItem}>
            <div className={styles.avoidMarker}>Don&apos;t</div>
            <div className={styles.avoidText}>
              <strong>Don&apos;t play the optimism as obliviousness.</strong>
              He is not unaware of danger or darkness. He simply refuses to be
              paralyzed by it. There is a difference — play the awareness
              underneath the brightness.
            </div>
          </div>
          <div className={styles.avoidItem}>
            <div className={styles.avoidMarker}>Don&apos;t</div>
            <div className={styles.avoidText}>
              <strong>Don&apos;t overexplain the mark.</strong> He does not
              know what it is. The party should feel that uncertainty, not
              receive a lecture.
            </div>
          </div>
          <div className={styles.avoidItem}>
            <div className={styles.avoidMarker}>Don&apos;t</div>
            <div className={styles.avoidText}>
              <strong>Don&apos;t mistake detachment for cruelty.</strong> He
              forms strong attachments — he just shows them through action. If
              he hands someone his last component or reconfigures a weapon to
              protect an ally at cost to himself, that is love. Call it what it
              is, quietly.
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}>
          <p>Sample Lines</p>
          <hr />
        </div>
        <div className={styles.lineBlock}>
          <div className={styles.lineQuote}>
            &quot;It misfired. That&apos;s actually more useful than if it had
            worked — now I know where the resonance cap is.&quot;
          </div>
          <div className={styles.lineContext}>After a firearm malfunction</div>
        </div>
        <div className={styles.lineBlock}>
          <div className={styles.lineQuote}>
            &quot;I&apos;m not arguing against your authority. I&apos;m arguing
            against your conclusion.&quot;
          </div>
          <div className={styles.lineContext}>
            To a guild official or noble
          </div>
        </div>
        <div className={styles.lineBlock}>
          <div className={styles.lineQuote}>
            &quot;Tell me how you tempered that — the grain looks wrong for the
            alloy weight. In a good way.&quot;
          </div>
          <div className={styles.lineContext}>
            Meeting a skilled dwarven smith
          </div>
        </div>
        <div className={styles.lineBlock}>
          <div className={styles.lineQuote}>
            &quot;She disappeared. I know what I saw. I just don&apos;t know
            what it means yet.&quot;
          </div>
          <div className={styles.lineContext}>
            If asked about his mother
          </div>
        </div>
        <div className={styles.lineBlock}>
          <div className={styles.lineQuote}>
            &quot;I&apos;m not reckless. I just have a higher tolerance for
            acceptable risk than most people do.&quot;
          </div>
          <div className={styles.lineContext}>
            When the party pushes back on a plan
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}>
          <p>Active Plot Hooks</p>
          <hr />
        </div>
        <div className={styles.hookGrid}>
          <div className={styles.hookCard}>
            <div className={styles.hookNum}>Hook 01</div>
            <div className={styles.hookTitle}>The vanished mother</div>
            <div className={styles.hookDesc}>
              Not dead — dissolved into a surge of ferromagical energy. He
              watched it happen. He is still watching it, internally, every
              time he works with the alloy.
            </div>
          </div>
          <div className={styles.hookCard}>
            <div className={styles.hookNum}>Hook 02</div>
            <div className={styles.hookTitle}>The unknown father</div>
            <div className={styles.hookDesc}>
              His mother&apos;s deliberate silence is itself information.
              Whatever his father&apos;s lineage is, it altered his arcane mark
              in ways that are only now becoming legible.
            </div>
          </div>
          <div className={styles.hookCard}>
            <div className={styles.hookNum}>Hook 03</div>
            <div className={styles.hookTitle}>The FerroMetal alloy</div>
            <div className={styles.hookDesc}>
              Central to everything — his weapon, his mother&apos;s
              disappearance, his innate magic&apos;s behavior. Treat any
              encounter with similar materials as significant.
            </div>
          </div>
          <div className={styles.hookCard}>
            <div className={styles.hookNum}>Hook 04</div>
            <div className={styles.hookTitle}>The Spark of Resonance</div>
            <div className={styles.hookDesc}>
              Standard innate magic don&apos;t do what his does. The resonance
              response is a symptom of something deeper — lineage, experiment,
              or something the kingdom&apos;s history hasn&apos;t named yet.
            </div>
          </div>
          <div className={styles.hookCard}>
            <div className={styles.hookNum}>Hook 05</div>
            <div className={styles.hookTitle}>Ollo Gearwick</div>
            <div className={styles.hookDesc}>
              Mentor, grandfather figure, and the one person who knew his
              mother&apos;s work firsthand. What does he actually know? What
              has he chosen not to say?
            </div>
          </div>
          <div className={styles.hookCard}>
            <div className={styles.hookNum}>Hook 06</div>
            <div className={styles.hookTitle}>Resonant firearms</div>
            <div className={styles.hookDesc}>
              Only operable by Kelsier&apos;s unique, innate magic. Completing
              it means understanding what his mother was actually trying to
              build — and what she accidentally unleashed.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RpGuide;
