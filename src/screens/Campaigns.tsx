import {
  useEffect,
  useState,
} from "react";

import DashboardLayout from "../components/layout/DashboardLayout";

import CampaignCard from "../components/campaigns/CampaignCard";

import CampaignSkeleton from "../components/campaigns/CampaignSkeleton";

import EmptyCampaignState from "../components/campaigns/EmptyCampaignState";

import CreateCampaignModal from "../components/campaigns/CreateCampaignModal";

import {
  createCampaign,
  deleteCampaign,
  subscribeCampaigns,
} from "../services/campaigns";

import type { Campaign } from "../types/campaign";

export default function Campaigns() {
  const [campaigns, setCampaigns] =
    useState<Campaign[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [modalOpen, setModalOpen] =
    useState(false);

  async function handleCreateCampaign(
    name: string,
    description: string,
    system: string
  ) {
    await createCampaign(
      name,
      description,
      system
    );
  }

  async function handleDeleteCampaign(
    campaignId: string
  ) {
    const confirmed =
      window.confirm(
        "Deseja excluir esta campanha?"
      );

    if (!confirmed) {
      return;
    }

    try {
      await deleteCampaign(
        campaignId
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const unsubscribe =
      subscribeCampaigns(
        (campaignsData) => {
          setCampaigns(
            campaignsData
          );

          setLoading(false);
        }
      );

    return () => unsubscribe();
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold text-white">
            Campanhas
          </h1>

          <p className="mt-2 text-zinc-400">
            Gerencie suas aventuras.
          </p>
        </div>

        <button
          onClick={() =>
            setModalOpen(true)
          }
          className="rounded-2xl bg-red-600 px-6 py-4 font-bold text-white transition hover:bg-red-700"
        >
          Nova Campanha
        </button>
      </div>

      <CreateCampaignModal
        open={modalOpen}
        onClose={() =>
          setModalOpen(false)
        }
        onCreate={
          handleCreateCampaign
        }
      />

      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <CampaignSkeleton />
          <CampaignSkeleton />
          <CampaignSkeleton />
        </div>
      ) : campaigns.length ===
        0 ? (
        <EmptyCampaignState />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {campaigns.map(
            (campaign) => (
              <CampaignCard
                key={campaign.id}
                campaign={campaign}
                onDelete={
                  handleDeleteCampaign
                }
              />
            )
          )}
        </div>
      )}
    </DashboardLayout>
  );
}