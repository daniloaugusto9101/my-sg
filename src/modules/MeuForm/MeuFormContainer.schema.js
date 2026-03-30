// MeuFormContainer.schema.js
import * as yup from 'yup';

export default yup.object().shape({
  nome: yup.string().required('Nome é obrigatóriss'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  idade: yup
    .number()
    .min(18, 'Mínimo 18 anos')
    .max(100, 'Máximo 100 anos')
    .required(),
  // validação condicional (padrão usado no projeto)
  empresa: yup.string().when('tipo', {
    is: 'profissional',
    then: (schema) => schema.required('Empresa é obrigatória'),
    otherwise: (schema) => schema.nullable(),
  }),
});
