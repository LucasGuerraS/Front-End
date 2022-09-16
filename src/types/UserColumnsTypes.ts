import { itemsFromBackend } from "../components/favoritos/Colunas";
import { UserProps } from "./UserProfilesTypes";

export interface ColumnsProps {
  id: string;
  content: UserProps;
}
