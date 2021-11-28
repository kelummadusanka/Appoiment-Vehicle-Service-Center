import * as yup from "yup";
export const loginSchema = yup
  .object({
    Username: yup.string().required(),
    Password: yup.string().required(),
  })
  .required();

export const signUpSchema = yup
  .object({
    firstname: yup.string().trim().min(3,'must be at least 3 characters').required(),
    lastname: yup.string().trim().min(3,'must be at least 3 characters').required(),
    address1: yup.string().trim().required(),
    city: yup.string().required(),
    username: yup.string().trim().required(),
    email: yup.string().trim().required(),
    password: yup.string().trim().min(3,'must be at least 6 characters').required(),
    passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
  })
  .required();
