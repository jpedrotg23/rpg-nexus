import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firestore";

import { auth } from "../firebase/auth";

export async function isCampaignMaster(
  campaignId: string
) {
  const user = auth.currentUser;

  if (!user?.email) {
    return false;
  }

  const q = query(
    collection(db, "players"),
    where(
      "campaignId",
      "==",
      campaignId
    ),
    where(
      "email",
      "==",
      user.email
    ),
    where(
      "role",
      "==",
      "MASTER"
    )
  );

  const snapshot =
    await getDocs(q);

  return !snapshot.empty;
}