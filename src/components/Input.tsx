type Props = {
  placeholder: string;
  requirements: Record<string, unknown>;
  errors: Record<string, unknown>;
  message: Record<string, unknown>;
};

const Input = ({ placeholder, requirements, errors, message }: Props) => {
  console.log(errors);

  return (
    <div>
      <input
        placeholder={placeholder}
        {...requirements}
        aria-invalid={errors ? "true" : "false"}
      />
      {errors?.type === "required" && <p>Required field</p>}
      {errors?.type === "minLength" && (
        <p>{`minimum of ${message.minLength} characters is required`}</p>
      )}
      {errors?.type === "maxLength" && (
        <p>{`minimum of ${message.maxLength} characters is required`}</p>
      )}
      {errors?.type === "pattern" && <p>{`${message.pattern}`}</p>}
    </div>
  );
};

export default Input;
