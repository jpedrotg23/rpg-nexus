import {
  Calendar,
  Trash2,
  Pencil,
  ScrollText,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import type { Campaign } from "../../types/campaign";

interface Props {
  campaign: Campaign;

  onDelete: (
    campaignId: string
  ) => void;
}

export default function CampaignCard({
  campaign,
  onDelete,
}: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(
          `/campaigns/${campaign.id}`
        )
      }
      className="group cursor-pointer overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:border-red-500"
    >
      <div className="relative h-44 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-800 via-red-600 to-red-900" />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <ScrollText
            size={22}
            className="text-white"
          />

          <span className="rounded-full bg-black/30 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
            {campaign.system}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h2 className="mb-2 text-2xl font-bold text-white">
          {campaign.name}
        </h2>

        <p className="mb-5 line-clamp-3 text-zinc-400">
          {campaign.description}
        </p>

        <div className="mb-5 flex items-center gap-2 text-sm text-zinc-500">
          <Calendar size={16} />

          <span>
            {new Date(
              campaign.createdAt
            ).toLocaleDateString(
              "pt-BR"
            )}
          </span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 font-semibold text-zinc-300 transition hover:border-red-500 hover:text-white"
          >
            <Pencil size={18} />
            Editar
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();

              onDelete(campaign.id);
            }}
            className="flex items-center justify-center gap-2 rounded-xl border border-red-900 bg-red-950 px-4 py-3 font-semibold text-red-400 transition hover:bg-red-900 hover:text-white"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}