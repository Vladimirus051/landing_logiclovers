import { validateProps } from "../types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Имя обязательно";
  }
  if (!values.email) {
    errors.email = "Email обязателен";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Некорректный email";
  }
  if (!values.message) {
    errors.message = "Message is required";
  }
  return errors;
}
