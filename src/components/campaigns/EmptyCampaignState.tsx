import { Sword } from "lucide-react";

export default function EmptyCampaignState() {
  return (
    <div className="rounded-3xl border border-dashed border-zinc-700 bg-zinc-950 p-12 text-center">
      <div className="mb-4 flex justify-center">
        <Sword
          size={56}
          className="text-red-500"
        />
      </div>

      <h2 className="mb-3 text-3xl font-bold text-white">
        Nenhuma campanha criada
      </h2>

      <p className="mx-auto max-w-lg text-zinc-400">
        Crie sua primeira campanha e comece a
        organizar personagens, jogadores,
        mapas e aventuras.
      </p>
    </div>
  );
}