import { Link } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-red-500">
          RPG NEXUS
        </h1>

        <p className="mt-2 text-zinc-400">
          Seu centro de gerenciamento de campanhas,
          personagens e mesas.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Link
          to="/campaigns"
          className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-red-500"
        >
          <h2 className="mb-3 text-2xl font-bold text-red-500">
            Campanhas
          </h2>

          <p className="text-zinc-400">
            Crie e gerencie aventuras épicas.
          </p>
        </Link>

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