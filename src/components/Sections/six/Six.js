import React, { useState } from "react";
import "./Six.css";
import { FormControl } from "@material-ui/core";

function Six() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="six__main">
      <div className="six__left">
        <img src={require("../../../assets/Contact.png")} />
      </div>
      <div className="six__right">
        <div className="form">
          <div className="form__title">
            <h2>FILL OUT THE FORM AND WE'LL BE IN TOUCH SOON!</h2>
            <h1>Reach out to Us</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              required
              id="form"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
             <label>Email</label>
            <input
              type="email"
              required
              id="form"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <label>Message</label>
            <input
              type="textarea"
              name="textValue"
              required
              id="form__message"
            />
            <button type="Submit" id="form__button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Six;
