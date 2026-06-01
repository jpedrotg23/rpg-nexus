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

import { auth } from "../firebase/auth";

import type { Campaign } from "../types/campaign";

const campaignsCollection =
  collection(db, "campaigns");

const playersCollection =
  collection(db, "players");

export async function createCampaign(
  name: string,
  description: string,
  system: string
) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error(
      "Usuário não autenticado"
    );
  }

  const campaignRef =
    await addDoc(
      campaignsCollection,
      {
        name,
        description,
        system,
        ownerId: user.uid,
        createdAt: Date.now(),
      }
    );

  await addDoc(playersCollection, {
    campaignId: campaignRef.id,
    email: user.email,
    role: "MASTER",
    createdAt: Date.now(),
  });
}

export async function deleteCampaign(
  campaignId: string
) {
  await deleteDoc(
    doc(
      db,
      "campaigns",
      campaignId
    )
  );
}

export function subscribeCampaigns(
  callback: (
    campaigns: Campaign[]
  ) => void
) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error(
      "Usuário não autenticado"
    );
  }

  const q = query(
    campaignsCollection,
    where(
      "ownerId",
      "==",
      user.uid
    )
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const campaigns: Campaign[] =
        [];

      snapshot.forEach(
        (docItem) => {
          campaigns.push({
            id: docItem.id,
            ...(docItem.data() as Omit<
              Campaign,
              "id"
            >),
          });
        }
      );

      campaigns.sort(
        (a, b) =>
          b.createdAt -
          a.createdAt
      );

      callback(campaigns);
    }
  );
}