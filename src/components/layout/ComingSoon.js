import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { FaFacebook } from "react-icons/fa";
import emailjs, { init } from "emailjs-com";
import apiKey from "./emailKey";
// import "./App.css";

init(apiKey.ACCESS_TOKEN);

const initFormValues = {
  email: "",
};

export default function ComingSoon() {
  const [formValues, setFormValues] = useState(initFormValues);

  const handleChange = (e) => {
    e.persist();
    setFormValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    // console.log(`e`, e.target);
    emailjs
      .send(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, formValues, apiKey.USER_ID)
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
          setFormValues(initFormValues);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
  };

  return (
    <Fragment>
      <Helmet>
        <title>Coming Soon | tripaider - a new way to travel</title>
        <meta name="description" content="Helmet application" />
        <meta
          name="google-signin-client_id"
          content="311520119224-bo7rlq9ejon0n1vhahojtcpmkdj02hp5.apps.googleusercontent.com"
        ></meta>
      </Helmet>
      <section className="container p-4">
        <article className="pt-5">
          <h1 className="title is-size-1">Coming Soon</h1>
          <p className="pb-3">
            An awesome new community for travellers is coming very soon. Enter
            your email to request an early invitation!
          </p>
          <p className="is-italic">We are nearly complete...</p>
          <form onSubmit={handleSubmit} className="my-3">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  required
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <div className="control">
                <input
                  type="submit"
                  className="button is-info"
                  value="Notify Me"
                />
              </div>
            </div>
          </form>
          <p className="is-size-7">We promise to never spam you.</p>
        </article>
        <div className="my-5">
          <a
            href="https://www.facebook.com/tripaider"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="is-size-3" />
          </a>
        </div>
      </section>
    </Fragment>
  );
}
