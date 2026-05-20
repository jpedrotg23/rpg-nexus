import {
  Home,
  Shield,
  ScrollText,
  Users,
  LogOut,
} from "lucide-react";

import { logout } from "../../firebase/auth";

import { Link } from "react-router-dom";

export default function Sidebar() {
  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-800 bg-zinc-950">
      <div className="border-b border-zinc-800 p-6">
        <h1 className="text-3xl font-bold text-red-500">
          RPG NEXUS
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          Painel do Mestre
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        <Link
          to="/"
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-semibold text-zinc-300 transition hover:bg-zinc-900"
        >
          <Home size={20} />
          Dashboard
        </Link>

        <Link
          to="/campaigns"
          className="flex w-full items-center gap-3 rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700"
        >
          <ScrollText size={20} />
          Campanhas
        </Link>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-semibold text-zinc-300 transition hover:bg-zinc-900">
          <Shield size={20} />
          Personagens
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-semibold text-zinc-300 transition hover:bg-zinc-900">
          <Users size={20} />
          Jogadores
        </button>
      </nav>

      <div className="border-t border-zinc-800 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl bg-zinc-900 px-4 py-3 font-semibold text-red-500 transition hover:bg-zinc-800"
        >
          <LogOut size={20} />
          Sair
        </button>
      </div>
    </aside>
  );
}