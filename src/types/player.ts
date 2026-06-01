export interface Player {
  id: string;

  campaignId: string;

  email: string;

  role:
    | "MASTER"
    | "PLAYER";

  createdAt: number;
}