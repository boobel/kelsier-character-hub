import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import Header from "../Header/Header";
import { character } from "../../data/character";
import styles from "./Layout.module.scss";
import type { Character, Infusion, Spell } from "../../types/character";
import type { SetStateAction } from "react";

const PREPARED_SPELLS_STORAGE_KEY = "kelsier-character-hub:prepared-spells";
const ACTIVE_INFUSIONS_STORAGE_KEY = "kelsier-character-hub:active-infusions";

const readStoredNames = (key: string) => {
  if (typeof window === "undefined") return new Set<string>();

  try {
    const storedValue = window.localStorage.getItem(key);
    if (!storedValue) return new Set<string>();

    const parsedValue = JSON.parse(storedValue);
    if (!Array.isArray(parsedValue)) return new Set<string>();

    return new Set(
      parsedValue.filter((item): item is string => typeof item === "string"),
    );
  } catch {
    return new Set<string>();
  }
};

const writeStoredNames = (key: string, names: string[]) => {
  if (typeof window === "undefined") return;

  window.localStorage.setItem(key, JSON.stringify(names));
};

const hydrateCharacter = (): Character => {
  const preparedSpellNames = readStoredNames(PREPARED_SPELLS_STORAGE_KEY);
  const activeInfusionNames = readStoredNames(ACTIVE_INFUSIONS_STORAGE_KEY);

  return {
    ...character,
    spells: character.spells.map((spell) => {
      if (spell.level === "Cantrip") return spell;

      return {
        ...spell,
        prepared: preparedSpellNames.has(spell.name) || spell.prepared,
      };
    }),
    infusions: character.infusions.map((infusion) => ({
      ...infusion,
      active: activeInfusionNames.has(infusion.name) || infusion.active,
    })),
  };
};

export default function Layout() {
  const [characterState, setCharacterState] =
    useState<Character>(hydrateCharacter);

  useEffect(() => {
    writeStoredNames(
      PREPARED_SPELLS_STORAGE_KEY,
      characterState.spells
        .filter((spell) => spell.level !== "Cantrip" && spell.prepared)
        .map((spell) => spell.name),
    );
  }, [characterState.spells]);

  useEffect(() => {
    writeStoredNames(
      ACTIVE_INFUSIONS_STORAGE_KEY,
      characterState.infusions
        .filter((infusion) => infusion.active)
        .map((infusion) => infusion.name),
    );
  }, [characterState.infusions]);

  const setSpells = (nextSpells: SetStateAction<Spell[]>) => {
    setCharacterState((current) => ({
      ...current,
      spells:
        typeof nextSpells === "function"
          ? nextSpells(current.spells)
          : nextSpells,
    }));
  };
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
          setSpells,
          setInfusions,
        }}
      />
    </main>
  );
}
