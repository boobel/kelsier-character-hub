import { Feature } from "../types/character";

export const features: Feature[] = [
  {
    name: "Magical Tinkering",
    content: [
      {
        type: "paragraph",
        text: "To use this ability, you must have thieves’ tools...",
      },
      {
        type: "list",
        items: [
          "The object sheds bright light...",
          "Whenever tapped by a creature...",
          "The object continuously emits...",
          "A static visual effect appears...",
        ],
      },
      {
        type: "paragraph",
        text: "The chosen property lasts indefinitely...",
      },
      {
        type: "paragraph",
        text: "You can bestow magic on multiple objects...",
      },
    ],
  },
];
