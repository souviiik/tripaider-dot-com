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
      fname: "",
      lname: "",
      email: "",
      phone: "",
      usertype: "traveller",
      password: "",
      repass: "",
    },
    onSubmit: ({ fname, lname, email, phone, usertype, password }) => {
      register({ fname, lname, email, phone, usertype, password });
      // axios
      //   .post("https://tripaider-api.herokuapp.com/api/users", values)
      //   .then((res) => console.log(res.data))
      //   .catch((err) => console.log(err));
    },
  });

  console.log(`formik`, formik);

  const {
    resetForm,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    // isSubmitting,
  } = formik;
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   password2: ''
  // });

  // const { name, email, password, password2 } = formData;

  // const onChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   if (password !== password2) {
  //     setAlert('Passwords do not match', 'danger');
  //   } else {
  //     register({ name, email, password });
  //   }
  // };

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
              label="First Name"
              type="text"
              id="fname"
              name="fname"
              changeHandler={handleChange}
              blurHandler={handleBlur}
              value={values.fname}
            />
            <Input
              label="Last Name"
              type="text"
              id="lname"
              name="lname"
              changeHandler={handleChange}
              blurHandler={handleBlur}
              value={values.lname}
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
              label="Phone"
              type="tel"
              id="phone"
              name="phone"
              changeHandler={handleChange}
              blurHandler={handleBlur}
              value={values.phone}
            />
            <div className="control mb-3">
              <label htmlFor="usertype">User Type</label>
              <div className="select" style={{ display: "block" }}>
                <select
                  id="usertype"
                  className="input"
                  name="usertype"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.usertype}
                >
                  <option value="traveller">Traveller</option>
                  <option value="agent">Travel Agent</option>
                </select>
              </div>
            </div>
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

          {/* <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form> */}
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
