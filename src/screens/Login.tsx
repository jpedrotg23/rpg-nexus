import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  login,
} from "../firebase/auth";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  async function handleLogin() {
    try {
      await login(email, password);

      navigate("/");
    } catch (error: any) {
      console.error(error);

      alert(error.message);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-2xl border border-red-500 bg-zinc-950 p-8">
        <h1 className="mb-6 text-center text-4xl font-bold text-red-500">
          RPG NEXUS
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="mb-4 w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="mb-6 w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white outline-none"
        />

        <button
          onClick={handleLogin}
          className="mb-3 w-full rounded-lg bg-red-600 p-3 font-bold text-white transition hover:bg-red-700"
        >
          Entrar
        </button>

        <button
          onClick={() => navigate("/register")}
          className="w-full rounded-lg border border-red-500 p-3 font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
        >
          Criar Conta
        </button>
      </div>
    </div>
  );
}