import React from "react";
import Input from "../common/Input";

export default function TravellerForm({
  handleChange,
  // handleBlur,
  formData,
}) {
  return (
    <>
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
        label="My city of residence is"
        type="text"
        id="location"
        name="location"
        changeHandler={handleChange}
        // blurHandler={handleBlur}
        value={formData.location}
      />
    </>
  );
}
