import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="container">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="title is-size-1">Welcome to tripaider</h1>
          <p className="mb-5">
          Morbi finibus, tortor at cursus blandit, leo metus tristique eros, vel fermentum risus nunc sed libero. Nullam nisl arcu, mattis nec libero eu, euismod convallis eros. Nullam tempus dui aliquam nisl viverra, sed tempor eros gravida. Aliquam eget aliquet enim, eu dignissim nulla. Nulla ultricies imperdiet congue. Phasellus molestie ex risus, at dictum mauris aliquet non. Quisque eu gravida odio, ut hendrerit mi.
          </p>
          <div className="buttons">
            <Link to="/login" className="button is-info">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
