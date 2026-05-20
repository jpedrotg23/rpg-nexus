import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import { auth } from "../firebase/auth";

import { db } from "../firebase/firestore";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [bio, setBio] = useState("");

  const [favoriteSystem, setFavoriteSystem] =
    useState("");

  const [role, setRole] =
    useState("Jogador");

  async function handleRegister() {
    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,

        username,

        name,

        email,

        bio,

        favoriteSystem,

        role,

        createdAt: new Date(),
      });

      alert("Conta criada com sucesso!");

      navigate("/");
    } catch (error: any) {
      console.error(error);

      alert(error.message);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-6">
      <div className="w-full max-w-xl rounded-2xl border border-red-500 bg-zinc-950 p-8">
        <h1 className="mb-8 text-center text-5xl font-bold text-red-500">
          CRIAR CONTA
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white outline-none"
          />

          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white outline-none"
          />

          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) =>
              setBio(e.target.value)
            }
            className="h-28 w-full resize-none rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white outline-none"
          />

          <input
            type="text"
            placeholder="Sistema favorito"
            value={favoriteSystem}
            onChange={(e) =>
              setFavoriteSystem(e.target.value)
            }
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white outline-none"
          />

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-white outline-none"
          >
            <option>Jogador</option>
            <option>Mestre</option>
            <option>Ambos</option>
          </select>

          <button
            onClick={handleRegister}
            className="w-full rounded-lg bg-red-600 p-3 font-bold text-white transition hover:bg-red-700"
          >
            Criar Conta
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full rounded-lg border border-red-500 p-3 font-bold text-red-500 transition hover:bg-red-500 hover:text-white"
          >
            Voltar para Login
          </button>
        </div>
      </div>
    </div>
  );
}