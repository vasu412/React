import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";

const App = () => {
  const type = "/^r.*M.*9.*$/";
  const emailType = "/^[a-zA-Z0-9._%+-]+@gmail.com$/";
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Please enter your name"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required")
        .matches(/@gmail\.com$/, "Email must end with @gmail.com")
        .matches(/regex@gmail\.com$/, "Email must be regex@gmail.com"),
      password: Yup.string()
        .required("Password is required")
        .matches(type, "Password must start from r__M_9"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validateOnMount: true,
  });

  useEffect(() => {
    console.log("Formik state:", formik);
  }, [formik]);
  return (
    <div className="box">
      <form onSubmit={formik.handleSubmit}>
        <h1>Welcome!</h1>
        <div>
          <label htmlFor="firstName">NAME</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            placeholder="Name"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p>{formik.errors.firstName}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email">EMAIL</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email"
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="lastName">PASSWORD</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="lastName">CONFIRM PASSWORD</label>
          <input
            id="confirm_password"
            name="confirm_password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            placeholder="Confirm Password"
          />
          {formik.touched.confirm_password && formik.errors.confirm_password ? (
            <p>{formik.errors.confirm_password}</p>
          ) : null}
        </div>
        <div className="btnBox">
          <button
            type="submit"
            disabled={
              !(
                formik.values.firstName !== "" &&
                formik.values.email !== "" &&
                formik.values.password !== "" &&
                formik.values.confirm_password !== ""
              )
            }>
            SIGN UP
          </button>
        </div>
      </form>
      <div className="image"></div>
    </div>
  );
};

export default App;
