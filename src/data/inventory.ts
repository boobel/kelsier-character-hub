import { InventoryItem } from "../types/character";

export const inventory: InventoryItem[] = [
  {
    name: "Runic Repeater",
    description:
      "Kelsier's prototype resonance firearm. Utilizes ferromagnetic coils to accelerate projectiles. Requires specific arcane mark.",
    quantity: 1,
    weight: 10,
    type: "Weapon",
  },
  {
    name: "Dagger",
    description:
      "Short, double-edged blade. Finesse, light, thrown (range 20/60). Reliable backup for combat or utility.",
    quantity: 1,
    weight: 1,
    type: "Weapon",
  },
  {
    name: "Needle",
    description:
      "Long, specialized needle hidden in boot lining. Concealed weapon for emergencies.",
    quantity: 1,
    weight: 1,
    type: "Weapon",
  },
  {
    name: "Torch",
    description:
      "A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet.",
    quantity: 1,
    weight: 1,
    type: "Adventuring Gear",
  },
  {
    name: "Tent",
    description: "A lightweight shelter for camping, fits one person.",
    quantity: 1,
    weight: 20,
    type: "Adventuring Gear",
  },
  {
    name: "Caltrops, Bag of 20",
    description:
      "As an action, you can spread a single bag of caltrops to cover a 5-foot-square area. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving and take 1 piercing damage. Until the creature regains at least 1 hit point, its walking speed is reduced by 10 feet. A creature moving through the area at half speed doesn't need to make the saving throw.",
    quantity: 1,
    weight: 2,
    type: "Adventuring Gear",
  },
  {
    name: "Chain Shirt",
    description:
      "Interlocking metal rings worn between layers of clothing. AC 13 + Dex (max 2). Quiet protection.",
    quantity: 1,
    weight: 20,
    type: "Armor",
  },
  {
    name: "Mess kit",
    description:
      "This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl.",
    quantity: 1,
    weight: 1,
    type: "Adventuring Gear",
  },
  {
    name: "Notebook",
    description:
      "Leather-bound book with schematics for Runic Repeater and fragments of mother's research.",
    quantity: 1,
    weight: 5,
    type: "Adventuring Gear",
  },
  {
    name: "Charcoal stick",
    description:
      "Small stick used for sketching and writing. Weight is negligible.",
    quantity: 1,
    weight: 0,
    type: "Adventuring Gear",
  },
  {
    name: "Dry Rations",
    description: "Jerky, dried fruit, hardtack, and nuts. One day's worth.",
    quantity: 9,
    weight: 1.8,
    type: "Adventuring Gear",
  },
  {
    name: "Bedroll",
    description: "Warm, padded bedding for nights in the Ironcrest Belt.",
    quantity: 1,
    weight: 7,
    type: "Adventuring Gear",
  },
  {
    name: "Tinderbox",
    description:
      "Tin containing flint, fire steel, and tinder. Survival kit staple.",
    quantity: 1,
    weight: 1,
    type: "Adventuring Gear",
  },
  {
    name: "Waterskin",
    description: "Leather bladder for 4 pints of liquid.",
    quantity: 1,
    weight: 5,
    type: "Adventuring Gear",
  },
  {
    name: "FerroMetal Ingot",
    description:
      "Small bar of rare alloy for Runic Repeater study and repairs.",
    quantity: 1,
    weight: 5,
    type: "Material",
  },
  {
    name: "Tinkerer's Tools",
    description:
      "Hand tools, thread, glue, and scraps for clockwork repair and inventions.",
    quantity: 1,
    weight: 10,
    type: "Tools",
  },
  {
    name: "Smith's Tools",
    description:
      "Hammers, tongs, and rags for metalworking and firearm maintenance.",
    quantity: 1,
    weight: 8,
    type: "Tools",
  },
  {
    name: "Rope",
    description: "50 feet of hempen rope for climbing or securing gear.",
    quantity: 1,
    weight: 10,
    type: "Adventuring Gear",
  },
  {
    name: "Pouch of clockwork components",
    description:
      "Small pouch with gears, springs, and cogs for tinkering and repairs.",
    quantity: 1,
    weight: 4,
    type: "Tools",
  },
  {
    name: "Identification Papers",
    description: "Set of documens proving identity as Valenor citizen.",
    quantity: 1,
    weight: 0,
    type: "Other",
  },
  {
    name: "Gold Piece Medallion",
    description:
      "A medallion fashioned from a smashed gold piece Kelsier had earned from his first ever Silver Thread assignement.",
    quantity: 1,
    weight: 0,
    type: "Armor",
  },
];
