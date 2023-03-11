import { Formik, Form } from "formik";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { BsTelegram, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import ContactInput from "./form/ContactInput";
import contactFormSchema from "./form/formValidationSchema";
import "react-toastify/dist/ReactToastify.css";
import "../style/contact.scss";
import { Link } from "react-router-dom";

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
  const sendEmail = (values: any) => {
    const toastID = toast.loading("Message is sending...");
    emailjs
      .send("service_xginf9w", "template_18e1uqs", values, "SA98jC03Y-VI8lNt8")
      .then(() => {
        toast.update(toastID, {
          render: "Message sent",
          type: "success",
          isLoading: false,
          autoClose: 4000,
        });
      })
      .catch(() =>
        toast.update(toastID, {
          render: "Something went wrong",
          type: "error",
          isLoading: false,
          autoClose: 4000,
        })
      );
  };

  return (
    <div className="formPage">
      <header className="formPage_header">
        <p className="formPage_header_textWrap">
          &#x2774;&nbsp;&quot;
          <span className="formPage_header_text">_contact</span>
          &quot;&nbsp;&#x2775;
        </p>
      </header>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          sendEmail(values);
          actions.resetForm();
        }}
        validationSchema={contactFormSchema}
      >
        <Form className="formPage_form" autoComplete="off">
          <ContactInput
            label="Name"
            name="name"
            placeholder="_name*"
            type="text"
            className="formPage_inputArea"
          />
          <ContactInput
            label="Email"
            name="email"
            placeholder="_email*"
            type="email"
            className="formPage_inputArea"
          />
          <ContactInput
            label="Message"
            name="message"
            placeholder="_message"
            className="formPage_inputArea"
          />
          <button type="submit" className="formPage_submitBtn">
            send
          </button>
        </Form>
      </Formik>
      <div className="formPage_contactInfo">
        <section className="formPage_oneContact">
          <Link to="https://t.me/denisbots">
            <BsTelegram className="formPage_oneContact_icon" />
          </Link>
          <p className="formPage_oneContact_value">t.me/denisbots</p>
        </section>
        <section className="formPage_oneContact">
          <AiOutlineMail className="formPage_oneContact_icon" />
          <p className="formPage_oneContact_value">dbotsyun@gmail.com</p>
        </section>
        <section className="formPage_oneContact">
          <Link to="https://www.linkedin.com/in/denys-botsiun">
            <BsLinkedin className="formPage_oneContact_icon" />
          </Link>
          <p className="formPage_oneContact_value">
            linkedin.com/in/denys-botsiun
          </p>
        </section>
        <section className="formPage_oneContact">
          <Link
            to="https://github.com/BotsiunDenys"
            className="formPage_oneContact_link"
          >
            <BsGithub className="formPage_oneContact_icon" />
          </Link>
          <p className="formPage_oneContact_value">github.com/BotsiunDenys</p>
        </section>
        <section className="formPage_oneContact">
          <AiFillPhone className="formPage_oneContact_icon" />
          <p className="formPage_oneContact_value">+380-73-462-9749</p>
        </section>
        <section className="formPage_oneContact">
          <HiLocationMarker className="formPage_oneContact_icon" />
          <p className="formPage_oneContact_value">Vinnytsia, Ukraine</p>
        </section>
      </div>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default Contact;
