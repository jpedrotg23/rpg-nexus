import { useAuth } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8 py-5">
      <div>
        <h2 className="text-3xl font-bold text-white">
          Dashboard
        </h2>

        <p className="mt-1 text-zinc-400">
          Gerencie seu universo RPG
        </p>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3">
        <p className="text-sm text-zinc-400">
          Conectado como
        </p>

        <p className="font-semibold text-red-500">
          {user?.email}
        </p>
      </div>
    </header>
  );
}