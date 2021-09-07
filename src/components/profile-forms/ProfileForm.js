import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import TravellerForm from "./TravellerForm";
import AgentForm from "./AgentForm";
// import { validateYupSchema } from "formik";

const initialState = {
  fullname: "",
  usertype: "",
  phone: "",
  location: "",
  serviceareas: "",
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(", ");
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { usertype } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`formData`, formData);
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <Fragment>
      <h2 className="title is-size-2">Edit Your Profile</h2>
      <p className="lead">
        <i className="fas fa-user" /> Add some changes to your profile
      </p>
      <small className="has-text-danger">* required field</small>
      <form className="form py-3" onSubmit={onSubmit}>
        <div className="mb-3">
          <p>I am a </p>
          <div class="select">
            <select name="usertype" value={usertype} onChange={onChange}>
              <option value="">-- select --</option>
              <option value="traveller">Traveller</option>
              <option value="agent">Travel agent</option>
            </select>
          </div>
        </div>

        <div>
          {usertype !== "" ? (
            usertype === "agent" ? (
              <AgentForm handleChange={onChange} formData={formData} />
            ) : (
              <TravellerForm handleChange={onChange} formData={formData} />
            )
          ) : null}
        </div>

        <div className="mt-3">
          <input
            type="submit"
            className="button is-success mr-3"
            disabled={usertype === ""}
          />
          <Link className="button is-light" to="/dashboard">
            Go Back
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);
