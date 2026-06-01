import { useAuth } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/95 px-8 py-5 backdrop-blur">
      <div>
        <h2 className="text-3xl font-bold text-white">
          Dashboard
        </h2>

        <p className="mt-1 text-zinc-400">
          Gerencie campanhas, jogadores e personagens
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-3">
        <p className="text-xs uppercase tracking-wider text-zinc-500">
          Conectado como
        </p>

        <p className="font-semibold text-red-500">
          {user?.email}
        </p>
      </div>
    </header>
  );
}