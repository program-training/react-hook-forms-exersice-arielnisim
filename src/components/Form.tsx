import { useForm } from "react-hook-form";
import Input from "./Input";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  return (
    <form
      onSubmit={handleSubmit((data, e) => {
        e?.defaultPrevented;
        alert(JSON.stringify(data));
      })}
    >
      <h1>Change Me To React Hook Form</h1>
      <Input
        placeholder="Enter user name"
        lable="userName"
        requirements={register("userName", { required: true, minLength: 2 })}
        errors={errors.userName}
        message={{ minLength: 2 }}
      />
      <Input
        placeholder="Enter Email"
        requirements={register("email", {
          required: true,
          pattern: /^[a-z]+[a-z0-9]+@[a-z]+\.[a-z]+/i,
        })}
        errors={errors.email}
        message={{ pattern: "Incorrect email structure" }}
      />
      <Input
        placeholder="Enter Password"
        requirements={register("password", {
          required: true,
          minLength: 8,
          maxLength: 20,
          pattern:
            /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).+)/g,
        })}
        errors={errors.password}
        message={{
          minLength: 8,
          maxLength: 20,
          pattern:
            "must enter an uppercase letter, a lowercase letter, a number, and aspecial character",
        }}
      />
      <input type="submit" />
    </form>
  );
};
export default Form;
