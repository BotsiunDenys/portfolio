import * as yup from "yup";

const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Must be 3 characters or more")
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
});

export default contactFormSchema;
