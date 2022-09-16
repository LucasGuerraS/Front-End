import { InputsArrProps } from "../../types/FormTypes";

//All forms array which has to be passed to the form component as a propman

const Step01InputsArr: InputsArrProps[] = [
  {
    type: "text",
    inputName: "firstName",
    placeHolder: "Nome",
    validations: {
      required: "Obrigatório",
      minLength: { value: 4, message: "Digite no mínimo 4 caracteres" },
    },
  },
  {
    type: "text",
    inputName: "lastName",
    placeHolder: "Sobrenome",
    validations: {
      required: "Obrigatório",
      minLength: { value: 4, message: "Digite no mínimo 4 caracteres" },
    },
  },
  {
    type: "text",
    inputName: "email",
    placeHolder: "E-Mail",
    validations: {
      required: "Obrigatório",
      pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Digite um E-Mail válido",
      },
    },
  },
  {
    type: "password",
    inputName: "password",
    placeHolder: "Senha",
    validations: {
      required: "Obrigatório",
      minLength: { value: 4, message: "Digite no mínimo 4 caracteres" },
    },
  },
];
export const Step03InputsArr: InputsArrProps[] = [
  {
    type: "text",
    inputName: "email",
    placeHolder: "E-Mail",
    validations: {
      required: "Obrigatório",
      pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Digite um E-Mail válido",
      },
    },
  },
  {
    type: "password",
    inputName: "password",
    placeHolder: "Senha",
    validations: {
      required: "Obrigatório",
      minLength: { value: 4, message: "Digite no mínimo 4 caracteres" },
    },
  },
];

export const Step02InputsArr: InputsArrProps[] = [
  {
    type: "text",
    inputName: "firstName",
    placeHolder: "Nome",
    variant: "flushed",
    validations: {
      required: "Obrigatório",
      minLength: { value: 4, message: "Digite no mínimo 4 caracteres" },
    },
  },
  {
    type: "text",
    inputName: "lastName",
    variant: "flushed",
    placeHolder: "Sobrenome",
    validations: {
      required: "Obrigatório",
      minLength: { value: 4, message: "Digite no mínimo 4 caracteres" },
    },
  },
  {
    type: "text",
    inputName: "email",
    placeHolder: "E-Mail",
    variant: "flushed",
    validations: {
      required: "Obrigatório",
      pattern: {
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        message: "Digite um E-Mail válido",
      },
    },
  },
];

// export const Step02InputsArr: InputsArrProps[] = [
//   {
//     inputName: "cep",
//     label: "CEP",
//     placeHolder: "Digite o CEP",
//     validations: {
//       required: "Obrigatório",
//     },
//   },
//   {
//     inputName: "state",
//     label: "Digite o Estado",
//     placeHolder: "Estado",
//     validations: {
//       required: "Obrigatório",
//     },
//   },
//   {
//     inputName: "city",
//     label: "Digite a Cidade",
//     placeHolder: "Digite a sua cidade",
//     validations: {
//       required: "Obrigatório",
//     },
//   },
//   {
//     inputName: "district",
//     label: "Digite o Bairro",
//     placeHolder: "Digite o seu Bairro",
//     validations: {
//       required: "Obrigatório",
//     },
//   },
//   {
//     inputName: "street",
//     label: "Digite a Rua",
//     placeHolder: "Digite a rua",
//     validations: {
//       required: "Obrigatório",
//     },
//   },
//   {
//     inputName: "houseNumber",
//     label: "Número da casa",
//     placeHolder: "Digite o N° da casa",
//     validations: {
//       required: "Obrigatório",
//     },
//   },
// ];

// export const Step03InputsArr: InputsArrProps[] = [
//   {
//     inputName: "birthDate",
//     label: "Data de Nascimento",
//     validations: {
//       required: "Obrigatório",
//     },
//   },
//   {
//     inputName: "cpf",
//     label: "CPF",
//     placeHolder: "Digite seu CPF",
//     validations: {
//       required: "Obrigatório",
//     },
//   },
//   {
//     inputName: "salary",
//     label: "Renda mensal",
//     placeHolder: "Digite a sua renda mensal",
//     validations: {
//       required: "Obrigatório",
//       pattern: {
//         value: /^[0-9]+$/,
//         message: 'Digite apenas números'
//       }
//     },
//   },

export { Step01InputsArr };
