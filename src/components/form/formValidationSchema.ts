import * as yup from "yup";

const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Must be 3 characters or more")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  message: yup.string().max(100, "Must be 100 characters or less"),
});

export default contactFormSchema;
