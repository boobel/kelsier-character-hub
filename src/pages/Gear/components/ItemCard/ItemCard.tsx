import styles from "./ItemCard.module.scss";
import { renderContentBlock } from "../../../../utils/renderContentBlock";
import type { ContentBlock, EquippedItem } from "../../../../types/character";

type Props = {
  item: EquippedItem;
  meta: string;
  stats?: {
    label: string;
    value: string;
  }[];
};

const ItemCard = ({ item, meta, stats }: Props) => (
  <article className={styles.card}>
    <div className={styles.header}>
      <div>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.meta}>{meta}</div>
      </div>
      <div className={styles.badges}>
        <span className={styles.badge}>{item.rarity ?? "common"}</span>
        {item.attuned ? <span className={styles.attuned}>Attuned</span> : null}
      </div>
    </div>

    <div className={styles.description}>
      {item.description.map((block: ContentBlock, index) =>
        renderContentBlock(block, index),
      )}
    </div>

    {stats?.length ? (
      <div className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <span>{stat.label}</span>
            {stat.value}
          </div>
        ))}
      </div>
    ) : null}

    {item.effects?.length ? (
      <div className={styles.effects}>
        {item.effects.map((effect) => (
          <div className={styles.effect} key={effect.name}>
            <div className={styles.effectName}>{effect.name}</div>
            <div className={styles.description}>
              {effect.description.map((block: ContentBlock, index) =>
                renderContentBlock(block, index),
              )}
            </div>
          </div>
        ))}
      </div>
    ) : null}
  </article>
);

export default ItemCard;
