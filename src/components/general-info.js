import React, { useState } from "react";

function GeneralInfo(props) {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  return (
    <div>
      <div className={props.previewOn ? "hide" : ""}>
        <h3 className="h3-grey">General</h3>
        <form id="general-input">
          <span className="input-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={(event) => setNameInput(event.target.value)}
            ></input>
          </span>
          <span className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              onChange={(event) => setEmailInput(event.target.value)}
            ></input>
          </span>
          <span className="input-field">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              onChange={(event) => setPhoneInput(event.target.value)}
            ></input>
          </span>
        </form>
      </div>
      <div className={props.previewOn ? "" : "hide"}>
        <div id="name-preview">{nameInput}</div>
        <div id="other-info">
          {emailInput === ""
            ? phoneInput === ""
              ? ""
              : phoneInput
            : phoneInput === ""
            ? emailInput
            : emailInput + "|" + phoneInput}
        </div>
      </div>
    </div>
  );
}

export { GeneralInfo };
