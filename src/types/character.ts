export type CharacterType =
  | "PLAYER"
  | "NPC";

export type SystemType =
  | "Ordem Paranormal"
  | "D&D"
  | "Sacramento";

export interface Character {
  id: string;

  campaignId: string;

  type: CharacterType;

  system: SystemType;

  ownerId?: string;

  name: string;

  tokenUrl: string;

  portraitUrl: string;

  createdAt: number;

  data: Record<
    string,
    string | number | boolean
  >;
}