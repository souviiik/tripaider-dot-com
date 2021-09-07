import React from "react";
import Input from "../common/Input";

export default function AgentForm({
  handleChange,
  // handleBlur,
  formData,
}) {
  // <>
  //   Collect data for -
  //   <ul>
  //     <li>Agency name, </li>
  //     <li>phone, </li>
  //     <li>location, </li>
  //     <li>serviceareas, </li>
  //     <li>website, </li>
  //     <li>fb page etc.</li>
  //   </ul>
  // </>
  return (
    <>
      <Input
        label="Full name"
        type="text"
        id="fullname"
        name="fullname"
        changeHandler={handleChange}
        // blurHandler={handleBlur}
        value={formData.fullname}
      />
      <Input
        label="Business name"
        type="tel"
        id="phone"
        name="phone"
        changeHandler={handleChange}
        // blurHandler={handleBlur}
        value={formData.phone}
      />
      <Input
        label="My phone number is"
        type="tel"
        id="phone"
        name="phone"
        changeHandler={handleChange}
        // blurHandler={handleBlur}
        value={formData.phone}
      />
      <Input
        label="Office address"
        type="tel"
        id="phone"
        name="phone"
        changeHandler={handleChange}
        // blurHandler={handleBlur}
        value={formData.phone}
      />
      <Input
        label="Service areas"
        type="tel"
        id="phone"
        name="phone"
        changeHandler={handleChange}
        // blurHandler={handleBlur}
        value={formData.phone}
      />
      <Input
        label="Website/ FB page etc."
        type="tel"
        id="phone"
        name="phone"
        changeHandler={handleChange}
        // blurHandler={handleBlur}
        value={formData.phone}
      />
    </>
  );
}
