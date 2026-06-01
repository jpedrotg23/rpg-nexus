import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firestore";

import type {
  Character,
  SystemType,
  CharacterType,
} from "../types/character";

const charactersCollection =
  collection(db, "characters");

export async function createCharacter(
  character: Omit<
    Character,
    "id"
  >
) {
  await addDoc(
    charactersCollection,
    character
  );
}

export async function deleteCharacter(
  characterId: string
) {
  await deleteDoc(
    doc(
      db,
      "characters",
      characterId
    )
  );
}

export function subscribeCharacters(
  campaignId: string,
  callback: (
    characters: Character[]
  ) => void
) {
  const q = query(
    charactersCollection,
    where(
      "campaignId",
      "==",
      campaignId
    )
  );

  return onSnapshot(q, (snapshot) => {
    const characters: Character[] =
      [];

    snapshot.forEach((docItem) => {
      characters.push({
        id: docItem.id,
        ...(docItem.data() as Omit<
          Character,
          "id"
        >),
      });
    });

    callback(characters);
  });
}