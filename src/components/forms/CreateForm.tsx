import { useFormContext } from "react-hook-form";
import { Input, VStack, Tag } from "@chakra-ui/react";
import AlertPop from "./AlertPop";
import { InputsArrProps } from "../../types/FormTypes";

// Component that create x number of forms based on a object array passed from father component as props

const CreateForm: React.FC<{ FormArr: Array<InputsArrProps> }> = (props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <VStack>
        {props.FormArr.map((form: InputsArrProps) => (
          <div
            key={form.inputName}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "8rem",
              margin: "0px",
            }}
          >
            <Tag
              backgroundColor={"transparent"}
              color={"white"}
              display={"flex"}
              width={250}
              padding={0}
            >
              {form.placeHolder}
            </Tag>
            <Input
              width={250}
              height={14}
              minHeight={14}
              borderColor={"blue"}
              variant={form.variant}
              backgroundColor={"white"}
              isInvalid={
                errors[form.inputName] && Boolean(errors[form.inputName])
              }
              errorBorderColor="crimson"
              type={form.type}
              placeholder={form.placeHolder}
              {...register(form.inputName, form.validations)}
            />
            {errors[form.inputName] && (
              <AlertPop title={errors[form.inputName]?.message} />
            )}
          </div>
        ))}
      </VStack>
    </>
  );
};

export default CreateForm;