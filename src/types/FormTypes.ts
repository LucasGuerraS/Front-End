import { RegisterOptions } from "react-hook-form";

export interface InputsArrProps {
  type: string;
  inputName: string;
  variant?: string;
  placeHolder: string;
  validations: RegisterOptions;
}
