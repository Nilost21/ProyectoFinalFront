import { object, string, ref } from 'yup';

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};

export const schema = object({
  username: string()
    .required("Please enter an username")
    .min(4, "Username must have at least 4 characters")
    .max(31, "Username must have a maxium of 32 characters")
    .matches(/^\S*$/, 'Username cannot contain spaces'),

  email: string()
    .email()
    .required("Please enter your email"),

  password: string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters")
    .max(32, "Password must have a maxium of 32 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
    .matches(/^\S*$/, 'Password cannot contain spaces'),

  confirmPassword: string()
    .required("Please re-type your password")
    .oneOf([ref("password")], "Passwords does not match"),
});
