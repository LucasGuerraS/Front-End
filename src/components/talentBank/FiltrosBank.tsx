import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import Filtros from "./filtros/Filtros";
import { CaixaFiltros } from "./stylesFiltros";
import { SampleFilters } from "./filtros/FiltrosArray";

const FiltrosBank = () => {
  let forms: Array<any> = [];
  const [filters, setFIlters] = useState([[]]);
  const methods = useForm();
  const onSubmit = (data: any) => {
    Object.entries(data).map((item) => {
      forms.push(item);
    });
    setFIlters(forms);
  };

  useEffect(() => {
    if (filters.length > 2) {
      for (const key in filters) {
        if (filters[key][1]) {
          console.log(filters[key][0]);
        }
      }
    }
  }, [filters]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <CaixaFiltros>
          <Filtros filters={SampleFilters} />
        </CaixaFiltros>
        <Button
          outline="none"
          bg="#1056E1"
          type="submit"
          ml={"0rem"}
          width={"30rem"}
        >
          Filtrar
        </Button>
      </form>
    </FormProvider>
  );
};

export default FiltrosBank;
