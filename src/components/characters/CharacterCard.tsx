import type { Character } from "../../types/character";

interface Props {
  character: Character;
}

export default function CharacterCard({
  character,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-zinc-800" />

        <div>
          <h3 className="font-bold text-white">
            {character.name}
          </h3>

          <p className="text-sm text-zinc-500">
            {character.type}
          </p>
        </div>
      </div>
    </div>
  );
}