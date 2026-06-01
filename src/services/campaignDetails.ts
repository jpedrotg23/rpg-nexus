import {
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../firebase/firestore";

import type { Campaign } from "../types/campaign";

export async function getCampaignById(
  campaignId: string
) {
  const campaignRef = doc(
    db,
    "campaigns",
    campaignId
  );

  const snapshot = await getDoc(
    campaignRef
  );

  if (!snapshot.exists()) {
    throw new Error(
      "Campanha não encontrada"
    );
  }

  return {
    id: snapshot.id,
    ...(snapshot.data() as Omit<
      Campaign,
      "id"
    >),
  };
}