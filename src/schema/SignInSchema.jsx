import { object, string } from 'yup';

export const schema = object({
  email: string()
    .email()
    .required("❗Please enter your email 💪"),

  password: string()
    .required("❗Please enter a password 💪")
});
