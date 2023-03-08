import { Formik, Form } from "formik";
import ContactInput from "./form/ContactInput";
import contactFormSchema from "./form/formValidationSchema";
import "../style/contact.scss";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC<{}> = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
  };
  return (
    <div className="formPage">
      <h1 className="formPage_header">&#60;contact_me&#62;</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        validationSchema={contactFormSchema}
      >
        <Form className="formPage_form">
          <ContactInput
            label="Name"
            name="name"
            placeholder="_name*"
            type="text"
          />
          <ContactInput
            label="Email"
            name="email"
            placeholder="_email*"
            type="email"
          />
          <ContactInput
            label="Message"
            name="message"
            placeholder="_message"
            type="text"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;
