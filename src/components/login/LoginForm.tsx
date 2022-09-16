import React from "react";
import CreateForm from "../forms/CreateForm";
import { Step03InputsArr } from "../forms/FormsArray";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { useToast, Button } from "@chakra-ui/react";

interface FormValues {
  firstName?: string;
  lastName?: string;
  password?: string;
  email?: string;
}

const LoginForm = () => {
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
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <CreateForm FormArr={Step03InputsArr} />
        <Button
          borderRadius="md"
          color={"#e5e5e5"}
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
  );
};

export default LoginForm;
