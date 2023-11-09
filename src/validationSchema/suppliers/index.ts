import * as yup from 'yup';

export const supplierValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  image: yup.string().nullable(),
  name: yup.string().required(),
});
