import React from "react";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { useToast, Button } from "@chakra-ui/react";
import { Step01InputsArr } from "../../../forms/FormsArray";
import CreateForm from "../../../forms/CreateForm";
import { useNavigate } from "react-router-dom";

interface FormValues {
  firstName?: string;
  lastName?: string;
  password?: string;
  email?: string;
}

const Step01: React.FC<{changeStep: () => void}> = (props) => {
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
    props.changeStep()
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <CreateForm FormArr={Step01InputsArr} />
        <Button
          borderRadius="md"
          bg="cyan.600"
          _hover={{ bg: "cyan.200" }}
          variant="ghost"
          type="submit"
          width={290}
          textAlign={"center"}
        >
          Next
        </Button>
      </form>
    </FormProvider>
  );
};

export default Step01;
