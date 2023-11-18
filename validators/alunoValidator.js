import * as Yup from 'yup';
const alunoValidator = Yup.object().shape({
    nome: Yup.string()
      .min(3, 'O Mínimo de caracteres é 3')
      .max(100, 'O máximo caracteres é 100')
      .required('Campo obrigatório'),
    cpf: Yup.string()
      .max(14, 'Máximo de 14 caracteres')
      .required('CPF obrigatório'),
    matricula: Yup.number()
     .max(15, 'Máximo de 15 caracteres'),
    email: Yup.string()
     .max(50, 'Máximo de 50 caracteres'),
    telefone: Yup.string()
     .min(9, 'Máximo de 9 caracteres')
     .max(15, 'Máximo de 15 caracteres'),
    cep: Yup.string()
     .min(8, 'Mínimo de 8 caracteres')
     .max(10, 'Máximo de 10 caracteres'),
    logradouro: Yup.string() 
     .min(8, 'Mínimo de 8 caracteres')
     .max(100, 'Máximo de 100 caracteres'),
    complemento: Yup.string() 
     .max(100, 'Máximo de 100 caracteres'),
    numero: Yup.number()
     .min(1, 'Mínimo de 1 caractere'),
    bairro: Yup.string() 
     .min(3, 'Mínimo de 3 caracteres')
     .max(100, 'Máximo de 100 caracteres'),
  })

  export default alunoValidator
