import React from "react"
import { Control, Controller, FieldValues } from "react-hook-form"
import { Form, Input, Select } from "antd"
import { StepPanel } from "./StepPanel"
import { FormContainer } from "./styles"

export interface Props {
	fieldName: string
	control: Control<FieldValues>
}

export interface stepProps {
	steps: {
		title: string
		content: JSX.Element
	}[]
}

const { Option } = Select

const CriarBoletos: React.FC<Props> = ({ fieldName, control }) => {
	const Boleto = () => {
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
							<Select placeholder="Numero de Dias" {...field} defaultValue="ZERO">
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
			</FormContainer>
		)
	}

	const Pagador = () => {
		return (
			<FormContainer>
				<Controller
					name={`${fieldName}.pagador.tipoPessoa`}
					control={control}
					render={({ field, fieldState }) => (
						<Form.Item
							label="Tipo do Pessoa"
							validateStatus={fieldState.error && "error"}
							help={fieldState.error?.message}
							hasFeedback
						>
							<Select placeholder="FÍSICA ou JURÍDICA" {...field} defaultValue="FISICA">
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
					name={`${fieldName}.pagador.nome`}
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
					name={`${fieldName}.pagador.endereco`}
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
					name={`${fieldName}.pagador.edereco`}
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
					name={`${fieldName}.pagador.complemento`}
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
					name={`${fieldName}.pagador.bairro`}
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
					name={`${fieldName}.pagador.cidade`}
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
					name={`${fieldName}.pagador.uf`}
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
					name={`${fieldName}.pagador.cep`}
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
					name={`${fieldName}.pagador.cnpjCpf`}
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
					name={`${fieldName}.pagador.email`}
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
					name={`${fieldName}.pagador.ddd`}
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
					name={`${fieldName}.pagador.telefone`}
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
			</FormContainer>
		)
	}

	const Mensagem = () => {
		return (
			<FormContainer>
				<Controller
					name={`${fieldName}.mensagem.linha1`}
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
					name={`${fieldName}.mensagem.linha2`}
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
					name={`${fieldName}.mensagem.linha3`}
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
					name={`${fieldName}.mensagem.linha4`}
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
					name={`${fieldName}.mensagem.linha5`}
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
			</FormContainer>
		)
	}

	const Desconto = () => {
		return (
			<FormContainer>
				<Controller
					name={`${fieldName}.desconto1.codigoDesconto`}
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
					name={`${fieldName}.desconto1.data`}
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
					name={`${fieldName}.desconto1.taxa`}
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
					name={`${fieldName}.desconto1.valor`}
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
				<Controller
					name={`${fieldName}.desconto2.codigoDesconto`}
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
					name={`${fieldName}.desconto2.data`}
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
					name={`${fieldName}.desconto2.taxa`}
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
					name={`${fieldName}.desconto2.valor`}
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
				<Controller
					name={`${fieldName}.desconto3.codigoDesconto`}
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
					name={`${fieldName}.desconto3.data`}
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
					name={`${fieldName}.desconto3.taxa`}
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
					name={`${fieldName}.desconto3.valor`}
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
			</FormContainer>
		)
	}

	const Multa = () => {
		return (
			<FormContainer>
				<Controller
					name={`${fieldName}.multa.codigo`}
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
					name={`${fieldName}.multa.data`}
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
					name={`${fieldName}.multa.valor`}
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
			</FormContainer>
		)
	}

	const Mora = () => {
		return (
			<FormContainer>
				<Controller
					name={`${fieldName}.mora.codigo`}
					control={control}
					render={({ field, fieldState }) => (
						<Form.Item
							label="Código de Mora do título"
							validateStatus={fieldState.error && "error"}
							help={fieldState.error?.message}
							hasFeedback
						>
							<Select placeholder="Valor da Mora" id={field.name} {...field} defaultValue="ISENTO">
								<Option id={field.name} value="VALORDIA">
									Valor ao dia
								</Option>
								<Option id={field.name} value="TAXAMENSAL">
									Taxa mensal
								</Option>
								<Option id={field.name} value="ISENTO">
									Não há mora
								</Option>
							</Select>
						</Form.Item>
					)}
				/>
				<Controller
					name={`${fieldName}.mora.data`}
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
					name={`${fieldName}.mora.taxa`}
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
					name={`${fieldName}.mora.valor`}
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
		)
	}

	const steps = [
		{
			title: "Boleto",
			content: <Boleto />
		},
		{
			title: "Pagador",
			content: <Pagador />
		},
		{
			title: "Mensagem",
			content: <Mensagem />
		},
		{
			title: "Desconto",
			content: <Desconto />
		},
		{
			title: "Multa",
			content: <Multa />
		},
		{
			title: "Mora",
			content: <Mora />
		}
	]

	return <StepPanel steps={steps} />
}

export default CriarBoletos
