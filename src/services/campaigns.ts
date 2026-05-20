import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firestore";

import { auth } from "../firebase/auth";

import type { Campaign } from "../types/campaign";

const campaignsCollection =
  collection(db, "campaigns");

export async function createCampaign(
  name: string,
  description: string
) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("Usuário não autenticado");
  }

  await addDoc(campaignsCollection, {
    name,
    description,
    ownerId: user.uid,
    createdAt: Date.now(),
  });
}

export async function getCampaigns() {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("Usuário não autenticado");
  }

  const q = query(
    campaignsCollection,
    where("ownerId", "==", user.uid)
  );

  const snapshot = await getDocs(q);

  const campaigns: Campaign[] = [];

  snapshot.forEach((doc) => {
    campaigns.push({
      id: doc.id,
      ...(doc.data() as Omit<
        Campaign,
        "id"
      >),
    });
  });

  return campaigns;
}