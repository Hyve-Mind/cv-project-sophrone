import React, { useState } from "react";

function WorkExperience(props) {
  const [companyNameInput, setCompanyNameInput] = useState("");
  const [positionInput, setPositionInput] = useState("");
  const [tasksInput, setTasksInput] = useState("");
  const [startDateInput, setStartDateInput] = useState("");
  const [endDateInput, setEndDateInput] = useState("");

  return (
    <div>
      <div className={props.previewOn ? "hide" : ""}>
        <form id="work-input">
          <span className="input-field">
            <label htmlFor="company-name">Company Name</label>
            <input
              type="text"
              name="company-name"
              onChange={(event) => setCompanyNameInput(event.target.value)}
            ></input>
          </span>
          <span className="input-field">
            <label htmlFor="position">Position Title</label>
            <input
              type="text"
              name="position"
              onChange={(event) => setPositionInput(event.target.value)}
            ></input>
          </span>
          <span className="input-field">
            <label htmlFor="tasks">Main Tasks</label>
            <textarea
              type="text"
              name="tasks"
              onChange={(event) => setTasksInput(event.target.value)}
            ></textarea>
          </span>
          <span className="input-field">
            <label htmlFor="start-date">Start Date</label>
            <input
              type="text"
              name="start-date"
              onChange={(event) => setStartDateInput(event.target.value)}
            ></input>
          </span>
          <span className="input-field">
            <label htmlFor="end-date">End Date</label>
            <input
              type="text"
              name="end-date"
              onChange={(event) => setEndDateInput(event.target.value)}
            ></input>
          </span>
        </form>
      </div>
      <div className={props.previewOn ? "work-entry" : "hide"}>
        <div className="education-first-line">
          <span>
            <span className="company-name-preview">{companyNameInput}</span> |
            <span className="position-preview"> {positionInput}</span>
          </span>
          <span className="date-preview">
            {startDateInput} - {endDateInput}
          </span>
        </div>
        <div className="tasks-preview">{tasksInput}</div>
      </div>
    </div>
  );
}

export { WorkExperience };
