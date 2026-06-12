import type { Dispatch, SetStateAction } from "react";
import type { Character, Infusion, Spell } from "./character";

export type CharacterOutletContext = Character & {
  setSpells: Dispatch<SetStateAction<Spell[]>>;
  setInfusions: Dispatch<SetStateAction<Infusion[]>>;
};
