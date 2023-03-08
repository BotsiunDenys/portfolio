import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder: string;
  type: string;
}

const ContactInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default ContactInput;
