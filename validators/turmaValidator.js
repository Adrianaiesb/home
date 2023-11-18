import * as Yup from 'yup';
const turmaValidators = Yup.object().shape({
    sala: Yup.string()
     .min(5, 'Mínimo de 5 caractere')
     .max(10, 'Máximo de 10 caracteres'),
    turma: Yup.string()
     .min(1, 'Mínimo de 1 caractere')
     .max(60, 'Máximo de 60 caracteres'),
})

export default turmaValidators