import Joi from "joi";

const cnpjOuCpfRegex =
  /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;

const formSchema = Joi.object({
  cnpjCPFBeneficiario: Joi.string().regex(cnpjOuCpfRegex).required(),
  nomeSacado: Joi.string().required(),
});

export const schema = Joi.object({
  boletos: Joi.object().pattern(Joi.string(), formSchema),
});
