import { Crown, Trash2 } from "lucide-react";

import type { Player } from "../../types/player";

interface Props {
  player: Player;

  onDelete: (
    playerId: string
  ) => void;
}

export default function PlayerCard({
  player,
  onDelete,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <div>
        <p className="font-semibold text-white">
          {player.email}
        </p>

        <div className="mt-1 flex items-center gap-2">
          {player.role ===
          "MASTER" ? (
            <>
              <Crown
                size={14}
                className="text-yellow-500"
              />

              <span className="text-xs text-yellow-500">
                Mestre
              </span>
            </>
          ) : (
            <span className="text-xs text-zinc-500">
              Jogador
            </span>
          )}
        </div>
      </div>

      <button
        onClick={() =>
          onDelete(player.id)
        }
        className="rounded-xl border border-red-900 bg-red-950 p-3 text-red-400 transition hover:bg-red-900 hover:text-white"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}