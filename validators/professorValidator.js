import * as Yup from 'yup';
const professorValidator = Yup.object().shape({
  nome: Yup.string()
  .min(3, 'Valor muito curto')
  .max(100, 'Valor muito grande')
  .required('Campo obrigatório'),
cpf: Yup.string()
  .max(14, 'Máximo de 14 caracteres')
  .required('CPF obrigatório'),
matricula: Yup.number()
 .min(10, 'Mínimo de 10 caracteres'),
email: Yup.string()
 .max(90, 'Máximo de 90 caracteres'),
telefone: Yup.string()
 .max(15, 'Máximo de 15 caracteres'),
cep: Yup.string()
 .max(10, 'Máximo de 10 caracteres'),
logradouro: Yup.string() 
 .min(3, 'Mínimo de 3 caracteres')
 .max(100, 'Máximo de 100 caracteres'),
complemento: Yup.string() 
 .min(2, 'Mínimo de 2 caracteres')
 .max(100, 'Máximo de 100 caracteres'),
numero: Yup.number()
 .min(1, 'Mínimo de 1 caractere')
 .max(10, 'Máximo de 10 caracteres'),
bairro: Yup.string() 
 .min(2, 'Mínimo de 2 caracteres')
 .max(100, 'Máximo de 100 caracteres'),
  })

  export default professorValidator