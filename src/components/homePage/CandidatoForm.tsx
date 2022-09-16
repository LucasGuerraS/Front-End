import React from "react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { useToast, Button } from "@chakra-ui/react";
import { Step01InputsArr } from "../forms/FormsArray";
import CreateForm from "../forms/CreateForm";
import { useNavigate } from "react-router-dom";
import { Center } from "./styleBodyTwo";

interface FormValues {
  firstName?: string;
  lastName?: string;
  password?: string;
  email?: string;
}

const CandidatoForm = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const methods = useForm();
  const onSubmit: SubmitHandler<FormValues> = (values) => {
    toast({
      title: "Submitted!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    console.log(values);
    navigate("/cadastroUsuario");
  };
  return (
    <Center>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <CreateForm FormArr={Step01InputsArr} />
          <Button
            borderRadius="md"
            color="#e5e5e5"
            bg="#1056e1"
            _hover={{ bg: "cyan.800" }}
            variant="ghost"
            type="submit"
            width={290}
            textAlign={"center"}
          >
            Submit
          </Button>
        </form>
      </FormProvider>
    </Center>
  );
};

export default CandidatoForm;
