import type { ContentBlock, Spell } from "../types/character";

const magnetoboltDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "A near-invisible pulse of arcanomagnetic energy shoots towards a creature within range. Make a ranged spell attack against the target . On a hit, the target takes 1d6 force damage and must succeed on a Strength saving throw or be knocked prone. A creature made of ferrous metal or wearing ferrous armour has disadvantage on this saving throw.",
    },
    {
      type: "paragraph",
      text: "This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    }
];

const concealedShotDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "As part of the action used to cast this spell, you must make an attack with a firearm, otherwise the spell fails. The spell then masks any audible or visible output from the weapon, making it impossible to see or hear where the shot came from.",
    },
    {
      type: "paragraph",
      text: "This spell only conceals the first shot you make; any additional shots are not concealed.",
    }
];

const perforatingShotDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "As your attack hits or misses the target, the weapon or ammunition transforms into a 5-foot-wide Line of magical energy that extends out to the weapon’s normal range. The Line includes the attack’s original target. Each creature within the Line makes a Dexterity saving throw, taking Force damage equal to the weapon’s normal damage on a failed save or half as much damage on a successful one.",
    },
    {
      type: "note",
      text: "Using a Higher-Level Spell Slot. The weapon’s damage increases by one weapons damage die for each slot level above 1.",
    }
];

const magneticBoltDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "The first time you hit with a ranged weapon attack before this spell ends, the ammunition becomes magically magnetized as it hits the target.",
    },
    {
      type: "paragraph",
      text: "The magnetized ammunition clings to the target until removed. When the target moves into or through a space that is within 10 feet of a creature wearing metal armor or of a Small or larger metal object, such as an anvil, a statue, a decorative suit of armor hanging on a wall, or similar, the target treats that space as difficult terrain as the magnetized ammunition pulls the target toward that creature or object.",
    },
    {
      type: "paragraph",
      text: "A creature with magnetized ammunition clinging to it can use its action to make a Strength check against your spell save DC. On a success, the ammunition is removed and crumbles to dust.",
    },
    {
      type: "note",
      text: "At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can magnetize one additional piece of ammunition for each slot level above 1st.",
    }
];

const ferromagneticPullDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "You exert a pulse of magnetic force on one metal object or creature wearing/carrying metal within range. Choose one",
    },
    {
      type: "list",
      items: ["Pull or Push — move an unattended metal object up to 10 lbs toward or away from you up to 10 feet.", "Disrupt — a creature must succeed on a Strength saving throw or have one metal weapon or piece of equipment briefly wrenched, imposing disadvantage on the next attack roll or ability check made with it before the start of your next turn."],
    },
    {
      type: "paragraph",
      text: "The cantrip's pull distance and weight limit increase to 20 feet and 25 lbs at 5th level, and 30 feet and 50 lbs at 11th level.",
    }
];

const mendingDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage. This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object.",
    }
];

const prestidigitationDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:",
    },
    {
      type: "list",
      items: ["You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.", "You instantaneously light or snuff out a candle, a torch, or a small campfire.", "You instantaneously clean or soil an object no larger than 1 cubic foot.", "You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour", "You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.", "You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn."],
    }
];

const cureWoundsDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "A creature you touch regains hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
    },
    {
      type: "note",
      text: "At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.",
    }
];

const absorbElementsDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type, and the spell ends.",
    },
    {
      type: "note",
      text: "At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.",
    }
];

const catapultDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface or a creature. If it would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. In either case, both the object and the creature or solid surface take 3d8 bludgeoning damage.",
    },
    {
      type: "note",
      text: "At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of an object that you can target of this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st.",
    }
];

const detectMagicDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.",
    },
    {
      type: "paragraph",
      text: "The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.",
    }
];

const disguiseSelfDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can't change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.",
    },
    {
      type: "paragraph",
      text: "To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.",
    }
];

const expeditiousRetreatDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.",
    }
];

const falseLifeDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "Bolstering yourself with a necrotic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.",
    },
    {
      type: "note",
      text: "At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st.",
    }
];

const featherFallDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.",
    }
];

const greaseDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration.",
    },
    {
      type: "paragraph",
      text: "When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.",
    }
];

const identifyDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.",
    },
    {
      type: "paragraph",
      text: "If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it.",
    }
];

const jumpDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "You touch a creature. The creature's jump distance is tripled until the spell ends.",
    }
];

const longstriderDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "You touch a creature. The target's speed increases by 10 feet until the spell ends.",
    },
    {
      type: "note",
      text: "At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
    }
];

const purifyFoodAndDrinkDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease.",
    }
];

const sanctuaryDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball.",
    },
    {
      type: "paragraph",
      text: "If the warded creature makes an attack, casts a spell that affects an enemy, or deals damage to another creature, this spell ends.",
    }
];

const tashaSCausticBrewDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "A stream of acid spouts from your fingers in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 2d4 acid damage at the start of each of its turns.",
    },
    {
      type: "note",
      text: "At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot level above 1st.",
    }
];

const alarmDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.",
    },
    {
      type: "paragraph",
      text: "A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet of the warded area.",
    }
];

const faerieFireDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.",
    },
    {
      type: "paragraph",
      text: "Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can't benefit from being invisible.",
    }
];

const accelerateDecelerateDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "This spell accelerates or decelerates an attack (see the chosen effect below) the instant before it strikes, lessening or multiplying its force.",
    },
    {
      type: "paragraph",
      text: "Accelerate. The target takes an extra 2d6 damage from the attack. This extra damage is the same type dealt by the triggering attack.",
    },
    {
      type: "paragraph",
      text: "Decelerate. Reduce the damage the target takes by 2d6 (to a minimum of 0 damage).",
    }
];

const clueDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "When you cast this spell, all footprints and fingerprints within a 30-foot Emanation originating from you become highlighted and glow faintly for the duration. When you cast the spell, choose any point in time up to 10 days ago. Only footprints and fingerprints left between that time and the present will be highlighted. Each creature that leaves footprints and fingerprints is assigned a unique color, but are not otherwise identified. Any creature that moves or touches objects within the Emanation will also leave colorful footprints and fingerprints, which might reveal invisible creatures in the area.",
    }
];

const magnifyGravityDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "You exert a pulse of high gravity in a 10-foot-radius sphere centered on a point you can see within range. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes 2d8 force damage and its speed is halved until the end of your next turn. On a successful save, a creature takes half as much damage and its speed isn't halved.",
    },
    {
      type: "paragraph",
      text: "Until the start of your next turn, any object that isn't being worn or carried in the sphere requires a Strength check against your spell save DC to be picked up or moved.",
    },
    {
      type: "note",
      text: "At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
    }
];

const snareDescription: ContentBlock[] = [
    {
      type: "paragraph",
      text: "As you cast this spell, you use the rope to create a circle with a 5-foot radius on the ground or the floor. When you finish casting, the rope spells disappears and the circle becomes a snare. The snare is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found.",
    },
    {
      type: "paragraph",
      text: "The snare is triggered when a Small, Medium, or Large creature steps into the circle or onto the floor that had the rope on it. That creature must succeed on a Dexterity saving throw or be magically hoisted into the air, leaving it hanging upside down 3 feet above the ground or the floor. The creature is restrained there until the spell ends.",
    },
    {
      type: "paragraph",
      text: "A restrained creature can make a Dexterity saving throw at the end of each of its turns and ends the restrained effect on a success. Alternatively, another creature that can reach the restrained creature can use an action to make an Intelligence (Arcana) check against your spell save DC. On a success, the restrained effect also ends.",
    }
];

export const spells: Spell[] = [
  {
    name: "Magnetobolt",
    metadata: ["1 Action", "90ft.", "Instant", "Evocation", "V, S"],
    description: magnetoboltDescription,
    level: "Cantrip",
    castingTime: "1 Action",
    duration: "Instant",
  },
  {
    name: "Concealed Shot",
    metadata: ["1 Action", "90ft.", "Instant", "Illusion", "S, M"],
    description: concealedShotDescription,
    level: "Cantrip",
    castingTime: "1 Action",
    duration: "Instant",
  },
  {
    name: "Perforating Shot",
    metadata: ["1 Bonus Action", "Self", "Instant", "Evocation", "V"],
    description: perforatingShotDescription,
    level: 1,
    castingTime: "1 Bonus Action",
    duration: "Instant",
    prepared: false,
  },
  {
    name: "Magnetic Bolt",
    metadata: ["1 Bonus Action", "Self", "1 min", "Evocation", "V"],
    description: magneticBoltDescription,
    level: 1,
    castingTime: "1 Bonus Action",
    duration: "1 min",
    prepared: false,
  },
  {
    name: "Ferromagnetic Pull",
    metadata: ["1 Action", "30ft.", "Instantaneous", "Transmutation"],
    description: ferromagneticPullDescription,
    level: "Cantrip",
    castingTime: "1 Action",
    duration: "Instantaneous",
  },
  {
    name: "Mending",
    metadata: ["1 Action", "Touch", "1 min.", "Transmutation", "V, S, M"],
    description: mendingDescription,
    level: "Cantrip",
    castingTime: "1 Action",
    duration: "1 min.",
  },
  {
    name: "Prestidigitation",
    metadata: ["1 Action", "10ft.", "1 Hour", "Transmutation", "V, S"],
    description: prestidigitationDescription,
    level: "Cantrip",
    castingTime: "1 Action",
    duration: "1 Hour",
  },
  {
    name: "Cure Wounds",
    metadata: ["1 Action", "Touch", "Instantaneous", "Evocation", "V, S"],
    description: cureWoundsDescription,
    level: 1,
    castingTime: "1 Action",
    duration: "Instantaneous",
    prepared: false,
  },
  {
    name: "Absorb Elements",
    metadata: ["1 Reaction", "Self", "1 Round", "Abjuration", "S"],
    description: absorbElementsDescription,
    level: 1,
    castingTime: "1 Reaction",
    duration: "1 Round",
    prepared: false,
  },
  {
    name: "Catapult",
    metadata: ["1 Action", "60ft.", "Instantaneous", "Transmutation", "S"],
    description: catapultDescription,
    level: 1,
    castingTime: "1 Action",
    duration: "Instantaneous",
    prepared: false,
  },
  {
    name: "Detect Magic",
    metadata: ["1 Action", "Self", "Conc. up to 10 min", "Divination", "V, S", "Ritual"],
    description: detectMagicDescription,
    level: 1,
    castingTime: "1 Action",
    duration: "Conc. up to 10 min",
    prepared: false,
  },
  {
    name: "Disguise Self",
    metadata: ["1 Action", "Self", "1 Hour", "Illusion", "V, S"],
    description: disguiseSelfDescription,
    level: 1,
    castingTime: "1 Action",
    duration: "1 Hour",
    prepared: false,
  },
  {
    name: "Expeditious Retreat",
    metadata: ["1 Bonus Action", "Self", "Conc. up to 10 min", "Transmutation", "V, S"],
    description: expeditiousRetreatDescription,
    level: 1,
    castingTime: "1 Bonus Action",
    duration: "Conc. up to 10 min",
    prepared: false,
  },
  {
    name: "False Life",
    metadata: ["1 Action", "Self", "1 Hour", "Necromancy", "V, S, M"],
    description: falseLifeDescription,
    level: 1,
    castingTime: "1 Action",
    duration: "1 Hour",
    prepared: false,
  },
  {
    name: "Feather Fall",
    metadata: ["1 Reaction", "60ft.", "1 min.", "Transmutation", "V, M"],
    description: featherFallDescription,
    level: 1,
    castingTime: "1 Reaction",
    duration: "1 min.",
    prepared: false,
  },
  {
    name: "Grease",
    metadata: ["1 Action", "60ft.", "1 min.", "Conjuration", "V, S, M"],
    description: greaseDescription,
    level: 1,
    castingTime: "1 Action",
    duration: "1 min.",
    prepared: false,
  },
  {
    name: "Identify",
    metadata: ["1 min.", "Touch", "Instantaneous", "Divination", "V, S, M", "Ritual"],
    description: identifyDescription,
    level: 1,
    castingTime: "1 min.",
    duration: "Instantaneous",
    prepared: false,
  },
  {
    name: "Jump",
    metadata: ["1 Action", "Touch", "1 min.", "Transmutation", "V, S, M"],
    description: jumpDescription,
    level: 1,
    castingTime: "1 Action",
    duration: "1 min.",
    prepared: false,
  },
  {
    name: "Longstrider",
    metadata: ["1 Action", "Touch", "1 Hour", "Transmutation", "V, S, M"],
    description: longstriderDescription,
    level: 1,
    castingTime: "1 Action",
    duration: "1 Hour",
    prepared: false,
  },
  {
    name: "Purify Food and Drink",
    metadata: ["1 Action", "10ft.", "Instantaneous", "Transmutation", "V, S"],
    description: purifyFoodAndDrinkDescription,
    level: 1,
    castingTime: "1 Action",
    duration: "Instantaneous",
    prepared: false,
  },
  {
    name: "Sanctuary",
    metadata: ["1 Bonus Action", "30ft.", "1 min.", "Abjuration", "V, S, M"],
    description: sanctuaryDescription,
    level: 1,
    castingTime: "1 Bonus Action",
    duration: "1 min.",
    prepared: false,
  },
  {
    name: "Tasha's Caustic Brew",
    metadata: ["1 Action", "Self (30ft line)", "Conc. up to 1 min", "Evocation", "V, S, M"],
    description: tashaSCausticBrewDescription,
    level: 1,
    castingTime: "1 Action",
    duration: "Conc. up to 1 min",
    prepared: false,
  },
  {
    name: "Alarm",
    metadata: ["1 min.", "30 Feet", "8 Hours", "Divination", "V, S, M", "Ritual"],
    description: alarmDescription,
    level: 1,
    castingTime: "1 min.",
    duration: "8 Hours",
    prepared: false,
  },
  {
    name: "Faerie Fire",
    metadata: ["1 Action", "60ft.", "Conc. up to 1 min"],
    description: faerieFireDescription,
    level: 1,
    castingTime: "1 Action",
    duration: "Conc. up to 1 min",
    prepared: false,
  },
  {
    name: "Accelerate/Decelerate",
    metadata: ["1 Reaction", "Touch", "1 Round", "Transmutation", "V, S, M"],
    description: accelerateDecelerateDescription,
    level: 1,
    castingTime: "1 Reaction",
    duration: "1 Round",
    prepared: false,
  },
  {
    name: "Clue",
    metadata: ["1 Action", "Touch", "10 min.", "Divination", "V, S, M", "Ritual"],
    description: clueDescription,
    level: 1,
    castingTime: "1 Action",
    duration: "10 min.",
    prepared: false,
  },
  {
    name: "Magnify Gravity",
    metadata: ["1 Action", "60ft.", "1 Round", "Transmutation", "V, S"],
    description: magnifyGravityDescription,
    level: 1,
    castingTime: "1 Action",
    duration: "1 Round",
    prepared: false,
  },
  {
    name: "Snare",
    metadata: ["1 min.", "Touch", "8 Hours", "Abjuration", "V, S, M"],
    description: snareDescription,
    level: 1,
    castingTime: "1 min.",
    duration: "8 Hours",
    prepared: false,
  },
];
