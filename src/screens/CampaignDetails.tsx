import {
  useEffect,
  useState,
} from "react";

import { useParams } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";

import PlayersSection from "../components/campaigns/PlayersSection";

import CharactersSection from "../components/characters/CharactersSection";

import { getCampaignById } from "../services/campaignDetails";

import { getCampaignStats } from "../services/stats";

import type { Campaign } from "../types/campaign";

export default function CampaignDetails() {
  const { id } = useParams();

  const [campaign, setCampaign] =
    useState<Campaign | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [stats, setStats] =
    useState({
      players: 0,
      characters: 0,
      sessions: 0,
    });

  useEffect(() => {
    async function loadCampaign() {
      try {
        if (!id) return;

        const campaignData =
          await getCampaignById(id);

        const statsData =
          await getCampaignStats(id);

        setCampaign(campaignData);

        setStats(statsData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadCampaign();
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-center text-zinc-400">
          Carregando campanha...
        </div>
      </DashboardLayout>
    );
  }

  if (!campaign) {
    return (
      <DashboardLayout>
        <div className="text-center text-red-500">
          Campanha não encontrada
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mb-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
        <div className="h-56 bg-gradient-to-br from-red-900 via-red-700 to-red-500" />

        <div className="p-8">
          <h1 className="mb-2 text-5xl font-bold text-white">
            {campaign.name}
          </h1>

          <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white">
            {campaign.system}
          </span>

          <p className="mt-6 text-lg text-zinc-400">
            {campaign.description}
          </p>
        </div>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="mb-2 text-xl font-bold text-red-500">
            Jogadores
          </h2>

          <p className="text-4xl font-bold text-white">
            {stats.players}
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="mb-2 text-xl font-bold text-red-500">
            Personagens
          </h2>

          <p className="text-4xl font-bold text-white">
            {stats.characters}
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="mb-2 text-xl font-bold text-red-500">
            Sessões
          </h2>

          <p className="text-4xl font-bold text-white">
            {stats.sessions}
          </p>
        </div>
      </div>

      <div className="mb-8">
        <PlayersSection
          campaignId={campaign.id}
        />
      </div>

      <CharactersSection
        campaignId={campaign.id}
      />
    </DashboardLayout>
  );
}