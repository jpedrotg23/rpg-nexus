import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firestore";

import type { Player } from "../types/player";

const playersCollection =
  collection(db, "players");

export async function createPlayer(
  campaignId: string,
  email: string
) {
  const q = query(
    playersCollection,
    where(
      "campaignId",
      "==",
      campaignId
    ),
    where("email", "==", email)
  );

  const existing =
    await getDocs(q);

  if (!existing.empty) {
    throw new Error(
      "Jogador já adicionado"
    );
  }

  await addDoc(playersCollection, {
    campaignId,
    email,
    role: "PLAYER",
    createdAt: Date.now(),
  });
}

export async function deletePlayer(
  playerId: string
) {
  await deleteDoc(
    doc(db, "players", playerId)
  );
}

export function subscribePlayers(
  campaignId: string,
  callback: (
    players: Player[]
  ) => void
) {
  const q = query(
    playersCollection,
    where(
      "campaignId",
      "==",
      campaignId
    )
  );

  return onSnapshot(q, (snapshot) => {
    const players: Player[] = [];

    snapshot.forEach((docItem) => {
      players.push({
        id: docItem.id,
        ...(docItem.data() as Omit<
          Player,
          "id"
        >),
      });
    });

    players.sort(
      (a, b) =>
        b.createdAt - a.createdAt
    );

    callback(players);
  });
}