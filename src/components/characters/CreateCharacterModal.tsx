import {
  useState,
} from "react";

interface Props {
  open: boolean;

  onClose: () => void;

  onCreate: (
    name: string,
    type: "PLAYER" | "NPC"
  ) => Promise<void>;
}

export default function CreateCharacterModal({
  open,
  onClose,
  onCreate,
}: Props) {
  const [name, setName] =
    useState("");

  const [type, setType] =
    useState<"PLAYER" | "NPC">(
      "PLAYER"
    );

  const [loading, setLoading] =
    useState(false);

  if (!open) {
    return null;
  }

  async function handleSubmit() {
    if (!name.trim()) {
      alert(
        "Informe o nome."
      );

      return;
    }

    try {
      setLoading(true);

      await onCreate(
        name.trim(),
        type
      );

      setName("");

      setType("PLAYER");

      onClose();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
        <h2 className="mb-6 text-3xl font-bold text-red-500">
          Nova Ficha
        </h2>

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="mb-4 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white"
        />

        <select
          value={type}
          onChange={(e) =>
            setType(
              e.target
                .value as
                | "PLAYER"
                | "NPC"
            )
          }
          className="mb-6 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white"
        >
          <option value="PLAYER">
            Jogador
          </option>

          <option value="NPC">
            NPC
          </option>
        </select>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border border-zinc-700 px-5 py-3 text-zinc-300"
          >
            Cancelar
          </button>

          <button
            onClick={
              handleSubmit
            }
            disabled={loading}
            className="rounded-xl bg-red-600 px-5 py-3 font-bold text-white"
          >
            {loading
              ? "Criando..."
              : "Criar"}
          </button>
        </div>
      </div>
    </div>
  );
}