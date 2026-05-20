import { useEffect, useState } from "react";

import DashboardLayout from "../components/layout/DashboardLayout";

import {
  createCampaign,
  getCampaigns,
} from "../services/campaigns";

import type { Campaign } from "../types/campaign";

export default function Campaigns() {
  const [campaigns, setCampaigns] =
    useState<Campaign[]>([]);

  const [name, setName] = useState("");

  const [description, setDescription] =
    useState("");

  async function loadCampaigns() {
    try {
      const data = await getCampaigns();

      setCampaigns(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCreateCampaign() {
    try {
      if (!name || !description) {
        return alert(
          "Preencha todos os campos"
        );
      }

      await createCampaign(
        name,
        description
      );

      setName("");

      setDescription("");

      loadCampaigns();
    } catch (error) {
      console.error(error);

      alert("Erro ao criar campanha");
    }
  }

  useEffect(() => {
    loadCampaigns();
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
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

        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="mb-4 h-32 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-white outline-none"
        />

        <button
          onClick={
            handleCreateCampaign
          }
          className="rounded-xl bg-red-600 px-6 py-4 font-bold text-white transition hover:bg-red-700"
        >
          Criar Campanha
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
          >
            <h2 className="mb-3 text-2xl font-bold text-red-500">
              {campaign.name}
            </h2>

            <p className="text-zinc-400">
              {campaign.description}
            </p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}