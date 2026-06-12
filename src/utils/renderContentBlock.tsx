import type { ReactNode } from "react";
import type { ContentBlock } from "../types/character";

export const renderContentBlock = (
  block: ContentBlock,
  index: number,
): ReactNode => {
  switch (block.type) {
    case "paragraph":
      return <p key={index}>{block.text}</p>;
    case "heading":
      return <h4 key={index}>{block.text}</h4>;
    case "note":
      return <aside key={index}>{block.text}</aside>;
    case "list":
      return (
        <ul key={index}>
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};
