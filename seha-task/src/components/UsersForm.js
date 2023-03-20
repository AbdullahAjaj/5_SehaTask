import React from "react";
import { useRef } from "react";

const UsersForm = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);

  return (
    <>
      <form id="form">
        <h1>User Information</h1>
        <input type="hidden" name="hidden" />
        <input
          type="text"
          className="firstName"
          ref={firstNameRef}
          name="firstName"
          placeholder="First Name"
        />
        <input
          type="text"
          className="lastName"
          ref={lastNameRef}
          name="lastName"
          placeholder="Last Name"
        />
        <input
          type="text"
          className="email"
          ref={emailRef}
          name="email"
          placeholder="Email"
        />
        <input
          type="text"
          className="mobile"
          ref={mobileRef}
          name="mobile"
          placeholder="Mobile Number"
        />
      </form>
    </>
  );
};

export default UsersForm;
