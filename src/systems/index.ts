import { ordemSystem } from "./ordem";
import { dndSystem } from "./dnd";
import { sacramentoSystem } from "./sacramento";

export const systems = {
  "Ordem Paranormal":
    ordemSystem,

  "D&D":
    dndSystem,

  Sacramento:
    sacramentoSystem,
};

export function getSystem(
  systemName: string
) {
  return (
    systems[
      systemName as keyof typeof systems
    ] || ordemSystem
  );
}