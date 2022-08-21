import * as Yup from "yup";

export const yupValidation = Yup.object().shape({
  name: Yup.string()
    .notRequired()
    .nullable()
    .min(3, "Must at least be more than 3 characters")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email: Yup.string().email().required(),
  address1: Yup.mixed().notRequired(),
  address2: Yup.mixed().notRequired(),
  state: Yup.string().notRequired(),
  lga: Yup.string().notRequired(),
});
