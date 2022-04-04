import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container-form-inputs"
      style={errors >= 1 ? { marginTop: 0 } : {}}
    >
      <input
        type="text"
        placeholder="First Name"
        className="form-input"
        style={
          errors.firstName
            ? { border: "2px solid hsl(0, 100%, 74%)", marginBottom: 0 }
            : {}
        }
        {...register("firstName", { required: true })}
      />
      {errors.firstName && (
        <div className="error-container">
          <span className="error-icon"></span>
          <span className="onError">First name cannot be empty</span>
        </div>
      )}

      <input
        type="text"
        placeholder="Last Name"
        className="form-input"
        style={
          errors.firstName
            ? { border: "2px solid hsl(0, 100%, 74%)", marginBottom: 0 }
            : {}
        }
        {...register("lastName", { required: true })}
      />
      {errors.lastName && (
        <div className="error-container">
          <span className="error-icon"></span>
          <span className="onError">Last Name cannot be empty</span>
        </div>
      )}

      <input
        type="email"
        placeholder="Email Address"
        className="form-input"
        style={
          errors.email
            ? { border: "2px solid hsl(0, 100%, 74%)", marginBottom: 0 }
            : {}
        }
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && (
        <div className="error-container">
          <span className="error-icon"></span>
          <span className="onError">Looks like this is not an email</span>
        </div>
      )}

      <input
        type="password"
        placeholder="Password"
        className="form-input"
        style={
          errors.password
            ? { border: "2px solid hsl(0, 100%, 74%)", marginBottom: 0 }
            : {}
        }
        {...register("password", { required: true, minLength: 3 })}
      />
      {errors.password && (
        <div className="error-container">
          <span className="error-icon"></span>
          <span className="onError">Password cannot be empty</span>
        </div>
      )}

      <input type="submit" className="send-btn" value="CLAIM YOUR FREE TRIAL" />
    </form>
  );
};

export default Form;
