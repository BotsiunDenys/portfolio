import { useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  className: string;
}

const ContactInput = ({ label, className, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <div className={className}>
      <label htmlFor={props.name} className="formPage_label">
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "formPage_input formPage_inputError"
            : "formPage_input"
        }
      />
      {meta.touched && meta.error && (
        <div className="formPage_error">{meta.error}</div>
      )}
    </div>
  );
};

export default ContactInput;
