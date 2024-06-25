import { object, string, number, ref } from 'yup';

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};

export const schema = object({
  name: string()
    .required("❗Please enter your name 💪")
    .min(3, "Name must have at least 4 characters")
    .max(15, "Name must have a maxium of 30 characters")
    .matches(/^[A-Za-z]+$/, 'Please enter only letters, no numbers, special characters, or spaces'),

  lastname: string()
    .required("❗Please enter your lastname 💪")
    .min(3, "Name must have at least 4 characters")
    .max(15, "Name must have a maxium of 30 characters")
    .matches(/^[A-Za-z]+$/, 'Please enter only letters, no numbers, special characters, or spaces'),

  phonenumber: number()
    .required("❗Please enter your phone number 💪")
    .integer("Your phone number must be an integer")
    .min(6, "Your phone must have at least 4 digits")
    .max(15, 'Phone number can be at most 15 digits'),

  email: string()
    .email()
    .required("❗Please enter your email 💪"),

  password: string()
    .required("Please enter a password 💪")
    .min(8, "Password must have at least 8 characters")
    .max(32, "Password must have a maxium of 32 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
    .matches(/^\S*$/, 'Password cannot contain spaces'),

  confirmPassword: string()
    .required("❗Please re-type your password 💪")
    .oneOf([ref("password")], "Passwords does not match"),
});
