import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { Form, Input, Select } from "antd";

import { FormContainer } from "./styles";

export interface Props {
  fieldName: string;
  control: Control<FieldValues>;
}

const { Option } = Select;

const CriarBoletos: React.FC<Props> = ({ fieldName, control }) => {
  return (
    <FormContainer>
      <Controller
        name={`${fieldName}.seuNumero`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Número do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.cnpjCPFBeneficiario`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Cnpj/Cpf beneficiário"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />

      <Controller
        name={`${fieldName}.valorNominal`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Valor Nominal do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="number" />
          </Form.Item>
        )}
      />

      <Controller
        name={`${fieldName}.valorAbatimento`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Valor de abatimento do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="number" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.dataEmissao`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Data de emissão do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="date" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.dataVencimento`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Data de vencimento do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="date" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.numDiasAgenda`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Dias corridos após o vencimento para baixa efetiva automática do boleto"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Select placeholder="Numero de Dias" {...field} allowClear>
              <Option id={field.name} value="ZERO">
                0
              </Option>
              <Option id={field.name} value="TRINTA">
                30
              </Option>
              <Option id={field.name} value="SESSENTA">
                60
              </Option>
            </Select>
          </Form.Item>
        )}
      />
      <h1>Pagador</h1>
      <hr />
      <Controller
        name={`${fieldName}.tipoPessoaPagador`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Tipo do Pessoa"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Select placeholder="FÍSICA ou JURÍDICA" {...field} allowClear>
              <Option id={field.name} value="JURIDICA">
                Juridica
              </Option>
              <Option id={field.name} value="FISICA">
                Fisica
              </Option>
            </Select>
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.nomePagador`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Nome da Pessoa"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.endereco`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Endereço da pessoa"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.numEndereco`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Numero do endereço da pessoa"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.complemento`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Complemento do endereço da pessoa"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.bairro`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Bairro da pessoa"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.cidade`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Cidade da pessoa"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.uf`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Unidade Federativa da pessoa"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.cep`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="CEP da pessoa"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.cnpjCpfPagador`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="CPF/CNPJ do pagador do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.emailPagador`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="E-mail da pessoa"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.dddPagador`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="DDD do telefone da pessoa"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.telefonePagador`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Telefone da pessoa"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <h1>Mensagem</h1>
      <hr />

      <Controller
        name={`${fieldName}.linha1`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Linha 1 do campo de texto do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.linha2`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Linha 2 do campo de texto do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.linha3`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Linha 3 do campo de texto do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.linha4`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Linha 4 do campo de texto do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.linha5`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Linha 5 do campo de texto do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <h1>Desconto1</h1>
      <hr />
      <Controller
        name={`${fieldName}.desconto`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Código de Desconto do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="text" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.descontoData`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Data de Desconto do Título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="date" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.descontoTaxa`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Linha 5 do campo de texto do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="number" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.descontoValor`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Valor de Desconto, expresso na moeda do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="number" />
          </Form.Item>
        )}
      />
      <h1>Multa</h1>
      <hr />
      <Controller
        name={`${fieldName}.multa.multa`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Código de Multa do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Select
              placeholder="Código multa"
              id={field.name}
              {...field}
              allowClear
              defaultValue="NAOTEMMULTA"
            >
              <Option id={field.name} value="NAOTEMMULTA">
                Não tem multa
              </Option>
              <Option id={field.name} value="VALORFIXO">
                Valor Fixo
              </Option>
              <Option id={field.name} value="PERCENTUAL">
                Percentual
              </Option>
            </Select>
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.multaData`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Data da multa do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="date" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.multa.taxa`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Taxa Percentual de Multa do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="number" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.valorMulta`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Valor de Multa expresso na moeda do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="number" />
          </Form.Item>
        )}
      />
      <h1>Mora</h1>
      <hr />
      <Controller
        name={`${fieldName}.mora`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Código de Mora do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Select
              placeholder="Valor da Mora"
              id={field.name}
              {...field}
              allowClear
            >
              <Option id={field.name} value="valorDia">
                Valor ao dia
              </Option>
              <Option id={field.name} value="taxaMensal">
                Taxa mensal
              </Option>
              <Option id={field.name} value="isento">
                Não há mora
              </Option>
            </Select>
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.moraData`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Data da Mora do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="date" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.moraTaxa`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Taxa Percentual de Mora do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="number" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${fieldName}.moraMulta`}
        control={control}
        render={({ field, fieldState }) => (
          <Form.Item
            label="Valor de Mora expresso na moeda do título"
            validateStatus={fieldState.error && "error"}
            help={fieldState.error?.message}
            hasFeedback
          >
            <Input {...field} id={field.name} type="number" />
          </Form.Item>
        )}
      />
    </FormContainer>
  );
};

export default CriarBoletos;
