import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { useFormik } from "formik";
import { Helmet } from "react-helmet";

import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import Input from "../common/Input";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      repass: "",
    },
    onSubmit: ({ fullname, email, password }) => {
      register({ fullname, email, password });
    },
  });

  const {
    resetForm,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
  } = formik;

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <Helmet>
        <title>Sign up | tripaider - a new way to travel</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="columns is-centered">
        <div className="column is-half">
          <h2 className="title is-size-2">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              type="text"
              id="fullname"
              name="fullname"
              changeHandler={handleChange}
              blurHandler={handleBlur}
              value={values.fullname}
            />
            <Input
              label="Email"
              type="email"
              id="email"
              name="email"
              changeHandler={handleChange}
              blurHandler={handleBlur}
              value={values.email}
            />
            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              changeHandler={handleChange}
              blurHandler={handleBlur}
              value={values.password}
            />
            <Input
              label="Retype Password"
              type="password"
              id="repass"
              name="repass"
              changeHandler={handleChange}
              blurHandler={handleBlur}
              value={values.repass}
            />
            <div className="buttons">
              <button type="submit" className="button is-success">
                Sign up
              </button>
              <button
                type="reset"
                className="button is-light"
                onClick={resetForm}
              >
                Reset
              </button>
            </div>
          </form>
          <p className="my-1">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
