import {
  FormControl,
  Checkbox,
  VStack,
  HStack,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FilterProps } from "../../../types/FiltrosTypes";
import { FiltroLabelBox, FiltrosWrapper } from "./styleFiltItems";

const Filtros: React.FC<{ filters: Array<FilterProps> }> = (props) => {
  const { control } = useFormContext();

  return (
    <>
      {props.filters.map((items: FilterProps) => (
        <FiltroLabelBox key={Math.random()}>
          <FiltrosWrapper>
            <div style={{ marginBottom: "1rem"}}>{items.label}</div>
            <FormControl>
              <VStack alignItems="flex-start">
                <HStack spacing={"2rem"}>
                  {items.checksArr.map((item: string) => {
                    return (
                      <Controller
                        control={control}
                        name={`${items.label} ${item}`}
                        key={`${items.label} ${item}`}
                        defaultValue={false}
                        render={({ field: { onChange, value, ref } }) => (
                          <Checkbox
                            onChange={onChange}
                            textTransform="capitalize"
                            ref={ref}
                            isChecked={value}
                          >
                            {item}
                          </Checkbox>
                        )}
                      />
                    );
                  })}
                </HStack>
                <Controller
                  control={control}
                  name={`${items.label} input`}
                  render={({ field: { onChange, ref } }) => (
                    <Input
                      onChange={onChange}
                      textTransform="capitalize"
                      ref={ref}
                      placeholder="type here"
                      width={"10rem"}
                    />
                  )}
                />
              </VStack>
            </FormControl>
            <HStack mt="8" gridGap="full"></HStack>
          </FiltrosWrapper>
        </FiltroLabelBox>
      ))}
    </>
  );
};

export default Filtros;
