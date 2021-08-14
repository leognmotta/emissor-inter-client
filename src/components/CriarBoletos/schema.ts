import Joi from "joi";


const cnpjOuCpfRegex =
  // eslint-disable-next-line no-useless-escape
  /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;

const formSchema = Joi.object({
  seuNumero: Joi.string().max(15).required(),
  cnpjCPFBeneficiario: Joi.string().max(15).regex(cnpjOuCpfRegex).required(),
  valorNominal: Joi.number().required(),
  valorAbatimento: Joi.number(),
  dataEmissao: Joi.date().required(),
  dataVencimento: Joi.date().required(),
  numDiasAgenda: Joi.string().required(),
  //PAGADOR
  tipoPessoaPagador: Joi.string().required(),
  nomePagador: Joi.string().max(100).required(),
  endereco: Joi.string().max(90).required(),
  numEndereco: Joi.string().max(10).required(),
  complemento: Joi.string().max(30),
  bairro: Joi.string().max(60).required(),
  cidade: Joi.string().max(60).required(),
  uf: Joi.string().required(),
  cep: Joi.string().length(8).required(),
  cnpjCpfPagador: Joi.string().regex(cnpjOuCpfRegex).required(),
  emailPagador: Joi.string().max(50),
  dddPagador: Joi.string().length(2),
  telefonePagador: Joi.string().length(9),
  //MENSAGEM
  linha1: Joi.string().max(78),
  linha2: Joi.string().max(78),
  linha3: Joi.string().max(78),
  linha4: Joi.string().max(78),
  linha5: Joi.string().max(78),
  //DESCONTO1
  desconto: Joi.string().required(),
  descontoData: Joi.date().iso().required(),
  descontoTaxa: Joi.number().required(),
  descontoValor: Joi.number().required(),

 
});

export const schema = Joi.object({
  boletos: Joi.object().pattern(Joi.string(), formSchema),
});
