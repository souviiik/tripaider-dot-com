import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { Helmet } from "react-helmet";
import GoogleLogin from "react-google-login";

import { login } from "../../actions/auth";
import Input from "../common/Input";

const Login = ({ login, isAuthenticated }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email, password }) => {
      login(email, password);
      // axios
      //   .post("https://tripaider-api.herokuapp.com/api/users", values)
      //   .then((res) => console.log(res.data))
      //   .catch((err) => console.log(err));
    },
  });

  // console.log(`formik`, formik);

  const responseGoogle = (response) => {
    alert(response);
  };

  const {
    resetForm,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    // isSubmitting,
  } = formik;
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: ''
  // });

  // const { email, password } = formData;

  // const onChange = e =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onSubmit = e => {
  //   e.preventDefault();
  //   login(email, password);
  // };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <Helmet>
        <title>Log in | tripaider - a new way to travel</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="columns is-centered">
        <div className="column is-half">
          <h2 className="title is-size-2">Log In</h2>
          <form onSubmit={handleSubmit}>
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
            <div className="buttons">
              <button type="submit" className="button is-success">
                Log in
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
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form> */}
          <p className="my-1">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
        <div className="column is-half">
          <GoogleLogin
            clientId="311520119224-bo7rlq9ejon0n1vhahojtcpmkdj02hp5.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
