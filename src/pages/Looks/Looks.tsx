import React from "react";
import styles from "./Looks.module.scss";
import kelsierPortrait from "../../assets/images/kelsier-portrait.png";
import tassleCloak from "../../assets/images/tassle-cloak.png";

const Looks: React.FC = () => {
  return (
    <div className="page-container">
      <article className={styles.section}>
        <div className={styles.divider}>
          <p>At A Glance</p>
          <hr />
        </div>
        <section className={styles.glanceGrid}>
          <div className={styles.glanceCard}>
            <div className={styles.glanceLabel}>At a Glance</div>
            <div className={styles.glanceText}>
              &quot;Medium height, with long, unkempt dirty-blonde hair and
              hazel eyes. He has defined cheekbones and a strong jaw. His gaze
              is eagle-like — sharp, taking you in at a glance. He has a lean,
              slightly angular frame. He wears a long, embroidered coat that
              ends in tassels tipped with metallic points. As he moves, the
              tassels catch and slow his silhouette, making his intentions just
              a half-beat harder to read.&quot;
            </div>
          </div>

          <div className={styles.glanceCard}>
            <div className={styles.glanceLabel}>The Tasslecoat</div>
            <div className={styles.glanceText}>
              A long coat made of heavy, durable fabric, dyed a deep charcoal
              gray, with golden embroidery tracing geometric patterns along the
              sleeves and hem. The most distinctive feature is the row of long
              tassels that hang from the back and sides, each tipped with a
              small metallic point that sway with his movements and react to his
              innate magic.
            </div>
          </div>

          <div className={styles.glanceCard}>
            <div className={styles.glanceLabel}>Runic Firearm</div>
            <div className={styles.glanceText}>
              A clockwork, firearm-like design, with a long reinforced barrel
              and an angled, wrapped leather handle. Made of darksteel with
              polished brass elements, it houses a small cylindrical resonance
              chamber of milky silver metal. Fine geometric runes are etched
              across its frame.
            </div>
          </div>
        </section>
      </article>

      <article className={styles.section}>
        <div className={styles.divider}>
          <p>Visual Reference</p>
          <hr />
        </div>
        <section className={styles.portraitGrid}>
          <figure className={styles.portraitCard}>
            <img
              className={styles.portraitImage}
              src={kelsierPortrait}
              alt="Kelsier portrait"
            />
          </figure>
          <figure className={styles.portraitCard}>
            <img
              className={styles.portraitImage}
              src={tassleCloak}
              alt="Tassle Cloak placeholder"
            />
          </figure>
        </section>
      </article>

      <article className={styles.section}>
        <div className={styles.divider}>
          <p>Detailed Read</p>
          <hr />
        </div>
        <section className={styles.proseCard}>
          <p>
            Kelsier is tall and sharply built, with a lean, angular frame shaped
            by mountain life and years spent in workshops rather than open
            fields. His features are defined and slightly severe—high
            cheekbones, a straight nose, and a gaze that tends to lock onto
            details with unsettling focus. There is something hawk-like in the
            way he observes his surroundings: still, intent, and always
            measuring.
          </p>
          <p>
            His hair is light in color, worn slightly unkempt in practical
            fashion rather than style, often falling loose when he is deep in
            work or thought. His eyes are a muted hazel tone, constantly
            shifting between curiosity and calculation, as though he is always
            mentally deconstructing whatever he sees.
          </p>
          <p>
            His arms bear faint traces of old workshop accidents—small burns,
            cuts, and marks from experimental materials—but the most distinctive
            feature of his appearance is not scarring, but presence. He carries
            himself with an assured, almost effortless confidence, like someone
            accustomed to taking control of situations without needing
            permission.
          </p>
          <p>
            He is not formally noble in appearance, but there is something
            refined in how deliberately he presents himself. In public, he
            favors practical but structured attire: fitted work coats,
            reinforced fabrics, and utility layers adapted for travel and
            workshop use. His clothing is always functional, but rarely
            disorganized—tools and components are arranged with intentional
            precision.
          </p>
          <p>
            When working with his magitech firearm systems, faint traces of his
            arcane mark become visible beneath his skin—subtle geometric lines
            that intensify under stress or resonance discharge. In these
            moments, his presence becomes noticeably more charged, as if the air
            around him is responding to his internal alignment.
          </p>
        </section>
      </article>
    </div>
  );
};

export default Looks;
