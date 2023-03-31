import React, { useState } from "react";

function Education(props) {
  const [schoolNameInput, setSchoolNameInput] = useState("");
  const [degreeInput, setDegreeInput] = useState("");
  const [gradDateInput, setGradDateInput] = useState("");

  return (
    <div>
      <div className={props.previewOn ? "hide" : ""}>
        <form id="education-input">
          <span className="input-field">
            <label htmlFor="school-name">School Name</label>
            <input
              type="text"
              name="name"
              onChange={(event) => setSchoolNameInput(event.target.value)}
            ></input>
          </span>
          <span className="input-field">
            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              name="degree"
              onChange={(event) => setDegreeInput(event.target.value)}
            ></input>
          </span>
          <span className="input-field">
            <label htmlFor="attend-date">Date</label>
            <input
              type="text"
              name="attend-date"
              onChange={(event) => setGradDateInput(event.target.value)}
            ></input>
          </span>
        </form>
      </div>
      <div className={props.previewOn ? "university-entry" : "hide"}>
        <div className="education-first-line">
          <span className="school-name-preview">{schoolNameInput}</span>
          <span className="grad-date-preview">{gradDateInput}</span>
        </div>
        <div className="degree-preview">{degreeInput}</div>
      </div>
    </div>
  );
}

export { Education };
