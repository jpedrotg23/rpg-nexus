import {
  useEffect,
  useState,
} from "react";

import PlayerCard from "./PlayerCard";

import {
  createPlayer,
  deletePlayer,
  subscribePlayers,
} from "../../services/players";

import type { Player } from "../../types/player";

interface Props {
  campaignId: string;
}

export default function PlayersSection({
  campaignId,
}: Props) {
  const [email, setEmail] =
    useState("");

  const [players, setPlayers] =
    useState<Player[]>([]);

  const [loading, setLoading] =
    useState(false);

  async function handleInvite() {
    if (!email.trim()) {
      return;
    }

    try {
      setLoading(true);

      await createPlayer(
        campaignId,
        email.trim()
      );

      setEmail("");
    } catch (error) {
      console.error(error);

      alert(
        "Este jogador já foi adicionado."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleDeletePlayer(
    playerId: string
  ) {
    const confirmed =
      window.confirm(
        "Deseja remover este jogador?"
      );

    if (!confirmed) {
      return;
    }

    try {
      await deletePlayer(
        playerId
      );
    } catch (error) {
      console.error(error);

      alert(
        "Erro ao remover jogador."
      );
    }
  }

  useEffect(() => {
    const unsubscribe =
      subscribePlayers(
        campaignId,
        setPlayers
      );

    return () => unsubscribe();
  }, [campaignId]);

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-red-500">
            Jogadores
          </h2>

          <p className="text-zinc-500">
            {players.length} jogador(es)
          </p>
        </div>
      </div>

      <div className="mb-6 flex gap-3">
        <input
          type="email"
          placeholder="Email do jogador"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-white outline-none"
        />

        <button
          onClick={handleInvite}
          disabled={loading}
          className="rounded-xl bg-red-600 px-5 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Enviando..."
            : "Convidar"}
        </button>
      </div>

      {players.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-800 p-8 text-center">
          <p className="text-zinc-500">
            Nenhum jogador convidado.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onDelete={
                handleDeletePlayer
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}