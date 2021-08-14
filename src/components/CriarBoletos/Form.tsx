import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { Form, Input } from "antd";

export interface Props {
  fieldName: string;
  control: Control<FieldValues>;
}

const CriarBoletos: React.FC<Props> = ({ fieldName, control }) => {
  return (
    <React.Fragment>
      <Controller
        name={`${fieldName}.cnpjCPFBeneficiario`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Cnpj/Cpf beneficiario"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />

      <Controller
        name={`${fieldName}.nomeSacado`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Nome Sacado"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
    </React.Fragment>
  );
};

export default CriarBoletos;
