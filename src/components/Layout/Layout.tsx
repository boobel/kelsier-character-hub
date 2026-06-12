import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import Header from "../Header/Header";
import { character } from "../../data/character";
import styles from "./Layout.module.scss";
import type { Character, Infusion } from "../../types/character";
import type { SetStateAction } from "react";

export default function Layout() {
  const [characterState, setCharacterState] = useState<Character>(character);
  const setInfusions = (nextInfusions: SetStateAction<Infusion[]>) => {
    setCharacterState((current) => ({
      ...current,
      infusions:
        typeof nextInfusions === "function"
          ? nextInfusions(current.infusions)
          : nextInfusions,
    }));
  };

  return (
    <main className={styles.layout}>
      <Header identity={characterState.identity} />
      <Navbar />
      <Outlet
        context={{
          ...characterState,
          setInfusions,
        }}
      />
    </main>
  );
}
