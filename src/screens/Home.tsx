import DashboardLayout from "../components/layout/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="mb-3 text-2xl font-bold text-red-500">
            Campanhas
          </h2>

          <p className="text-zinc-400">
            Crie e gerencie aventuras épicas.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="mb-3 text-2xl font-bold text-red-500">
            Personagens
          </h2>

          <p className="text-zinc-400">
            Organize fichas e atributos.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="mb-3 text-2xl font-bold text-red-500">
            Jogadores
          </h2>

          <p className="text-zinc-400">
            Gerencie participantes da mesa.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}