import React from "react";
import "./form.scss";
import Form from "./Form";

const index = () => {
  return (
    <div className="container-form">
      <Form />
      <small className="termns">
        By clicking the button, you are agreeing to our{" "}
        <span className="t-caption">Terms and Services</span>
      </small>
    </div>
  );
};

export default index;
