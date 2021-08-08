// import * as yup from "yup";
import Joi from "joi";

// export const formSchema = yup.object().shape({
//   cnpjCPFBeneficiario: yup.string().required().email(),
// });

// export const schema = yup.object().shape({
//   boletos: yup.array().of(formSchema),
// });

const formSchema = Joi.object({
  cnpjCPFBeneficiario: Joi.string().required(),
});

export const schema = Joi.object({
  boletos: Joi.object().pattern(Joi.string(), formSchema),
});
