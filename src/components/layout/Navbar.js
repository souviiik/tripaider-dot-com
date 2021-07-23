import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import Logo from "../../assets/logo.jpg";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <>
      <Link className="navbar-item">Dashboard</Link>
      <Link className="navbar-item">Developers</Link>
      <Link className="navbar-item">Posts</Link>
      <div className="navbar-end">
        <div className="navbar-item">
          <a onClick={logout} href="#!" className="button is-danger">
            <i className="fas fa-sign-out-alt" />{" "}
            <span className="hide-sm">Logout</span>
          </a>
        </div>
      </div>
    </>
  );

  const guestLinks = (
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <Link to="/signup" className="button is-success">
            Sign up
          </Link>
          <Link to="/login" className="button is-info">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <nav className="navbar mb-5" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={Logo} alt="tripaider logo" style={{ height: "7.5rem" }} />
        </Link>

        <Link
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        {isAuthenticated ? authLinks : guestLinks}
        {/* <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link className="navbar-item">Documentation</Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link">More</Link>

            <div className="navbar-dropdown">
              <Link className="navbar-item">About</Link>
              <Link className="navbar-item">Jobs</Link>
              <Link className="navbar-item">Contact</Link>
              <hr className="navbar-divider" />
              <Link className="navbar-item">Report an issue</Link>
            </div>
          </div>
        </div> */}

        {/* <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/signup" className="button">
                Sign up
              </Link>
              <Link className="button is-light">Log in</Link>
            </div>
          </div>
        </div> */}
      </div>
    </nav>
    // <nav className="navbar bg-dark">
    //   <h1>
    //     <Link to="/">tripaider
    //     </Link>
    //   </h1>
    //   <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    // </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
