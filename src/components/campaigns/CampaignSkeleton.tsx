export default function CampaignSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
      <div className="h-40 bg-zinc-800" />

      <div className="p-6">
        <div className="mb-4 h-7 w-40 rounded bg-zinc-800" />

        <div className="mb-2 h-4 rounded bg-zinc-800" />

        <div className="mb-2 h-4 rounded bg-zinc-800" />

        <div className="h-4 w-2/3 rounded bg-zinc-800" />
      </div>
    </div>
  );
}