import {
  useEffect,
  useState,
} from "react";

import CharacterCard from "./CharacterCard";

import CreateCharacterModal from "./CreateCharacterModal";

import {
  subscribeCharacters,
  createCharacter,
} from "../../services/characters";

import type {
  Character,
  CharacterType,
} from "../../types/character";

import { auth } from "../../firebase/auth";

import { getCampaignById } from "../../services/campaignDetails";

import { ordemCharacterTemplate } from "../../data/templates/ordemCharacter";

import { dndCharacterTemplate } from "../../data/templates/dndCharacter";

import { sacramentoCharacterTemplate } from "../../data/templates/sacramentoCharacter";

interface Props {
  campaignId: string;
}

export default function CharactersSection({
  campaignId,
}: Props) {
  const [characters, setCharacters] =
    useState<Character[]>([]);

  const [modalOpen, setModalOpen] =
    useState(false);

  useEffect(() => {
    const unsubscribe =
      subscribeCharacters(
        campaignId,
        setCharacters
      );

    return () => unsubscribe();
  }, [campaignId]);

  async function handleCreateCharacter(
    name: string,
    type: CharacterType
  ) {
    const campaign =
      await getCampaignById(
        campaignId
      );

    let data = {};

    switch (
      campaign.system
    ) {
      case "Ordem Paranormal":
        data =
          ordemCharacterTemplate;
        break;

      case "D&D":
        data =
          dndCharacterTemplate;
        break;

      case "Sacramento":
        data =
          sacramentoCharacterTemplate;
        break;
    }

    await createCharacter({
      campaignId,

      createdAt:
        Date.now(),

      ownerId:
        auth.currentUser?.uid,

      system:
        campaign.system as any,

      type,

      name,

      tokenUrl: "",

      portraitUrl: "",

      data,
    });
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-red-500">
          Fichas
        </h2>

        <button
          onClick={() =>
            setModalOpen(true)
          }
          className="rounded-xl bg-red-600 px-4 py-3 font-bold text-white"
        >
          Nova Ficha
        </button>
      </div>

      <CreateCharacterModal
        open={modalOpen}
        onClose={() =>
          setModalOpen(false)
        }
        onCreate={
          handleCreateCharacter
        }
      />

      {characters.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-zinc-800 p-8 text-center">
          <p className="text-zinc-500">
            Nenhuma ficha criada.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {characters.map(
            (character) => (
              <CharacterCard
                key={
                  character.id
                }
                character={
                  character
                }
              />
            )
          )}
        </div>
      )}
    </div>
  );
}