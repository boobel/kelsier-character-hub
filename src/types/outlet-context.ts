import type { Dispatch, SetStateAction } from "react";
import type { Character, Infusion } from "./character";

export type CharacterOutletContext = Character & {
  setInfusions: Dispatch<SetStateAction<Infusion[]>>;
};
