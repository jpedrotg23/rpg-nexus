import {
  collection,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firestore";

export async function getCampaignStats(
  campaignId: string
) {
  const playersQuery = query(
    collection(db, "players"),
    where(
      "campaignId",
      "==",
      campaignId
    )
  );

  const playersSnapshot =
    await getCountFromServer(
      playersQuery
    );

  return {
    players:
      playersSnapshot.data().count,
    characters: 0,
    sessions: 0,
  };
}