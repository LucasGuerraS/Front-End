import { Profiles } from "../talentBank/profiles/ProfilesArray";
import { ColumnsProps } from "../../types/UserColumnsTypes";

export const itemsFromBackend: ColumnsProps[] = [
  { id: "34", content: Profiles[0] },
  { id: "35", content: Profiles[1] },
  { id: "36", content: Profiles[2] },
  { id: "37", content: Profiles[3] },
  // { id: "38", content: Profiles[0] },
  // { id: "39", content: Profiles[1] },
  // { id: "40", content: Profiles[2] },
  // { id: "41", content: Profiles[3] },
  // { id: "42", content: Profiles[0] },
  // { id: "43", content: Profiles[1] },
  // { id: "44", content: Profiles[2] },
  // { id: "45", content: Profiles[3] },
];

const columnsFromBackend = {
  "11": {
    name: "Não Entrevistados",
    items: itemsFromBackend,
  },
  "12": {
    name: "Entrevistados",
    items: [],
  },
};

export default columnsFromBackend;
