import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: (
    name: string,
    description: string,
    system: string
  ) => Promise<void>;
}

export default function CreateCampaignModal({
  open,
  onClose,
  onCreate,
}: Props) {
  const [name, setName] = useState("");

  const [description, setDescription] =
    useState("");

  const [system, setSystem] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  if (!open) return null;

  async function handleSubmit() {
    if (
      !name.trim() ||
      !description.trim() ||
      !system.trim()
    ) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);

      await onCreate(
        name,
        description,
        system
      );

      setName("");
      setDescription("");
      setSystem("");

      onClose();
    } catch (error) {
      console.error(error);
      alert("Erro ao criar campanha");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
        <h2 className="mb-6 text-3xl font-bold text-red-500">
          Nova Campanha
        </h2>

        <input
          type="text"
          placeholder="Nome da campanha"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="mb-4 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none"
        />

        <input
          type="text"
          placeholder="Sistema RPG"
          value={system}
          onChange={(e) =>
            setSystem(e.target.value)
          }
          className="mb-4 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none"
        />

        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="mb-6 h-36 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl border border-zinc-700 px-5 py-3 text-zinc-300"
          >
            Cancelar
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-xl bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            {loading
              ? "Criando..."
              : "Criar Campanha"}
          </button>
        </div>
      </div>
    </div>
  );
}