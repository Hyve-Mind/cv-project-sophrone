import React, { useState } from "react";
import { GeneralInfo } from "./general-info";
import { EducationContainer } from "./education-container";
import { WorkExperienceContainer } from "./work-experience-container";

function UserInput() {
  const [numberOfEducation, setNumberOfEducation] = useState(1);
  const [numberOfWork, setNumberOfWork] = useState(1);
  const [previewMode, setPreviewMode] = useState(false);

  return (
    <div id="left-panel">
      <h2 className={previewMode ? "hide" : ""}>Your Information</h2>
      <h2 className={previewMode ? "" : "hide"}>CV Preview</h2>
      <div id="form-container">
        <div id="forms">
          <GeneralInfo previewOn={previewMode} />
          <EducationContainer
            numberOfEducationComponents={numberOfEducation}
            previewOn={previewMode}
          />
          <div className="buttons">
            <button
              className={previewMode ? "hide" : "increment-decrement-buttons"}
              onClick={() => {
                setNumberOfEducation(numberOfEducation + 1);
              }}
            >
              +
            </button>
            <button
              className={previewMode ? "hide" : "increment-decrement-buttons"}
              onClick={() => {
                setNumberOfEducation(numberOfEducation - 1);
              }}
            >
              -
            </button>
          </div>
          <WorkExperienceContainer
            numberOfWorkComponents={numberOfWork}
            previewOn={previewMode}
          />
          <div className="buttons">
            <button
              className={previewMode ? "hide" : "increment-decrement-buttons"}
              onClick={() => {
                setNumberOfWork(numberOfWork + 1);
              }}
            >
              +
            </button>
            <button
              className={previewMode ? "hide" : "increment-decrement-buttons"}
              onClick={() => {
                setNumberOfWork(numberOfWork - 1);
              }}
            >
              -
            </button>
          </div>
        </div>
        <div id="submit-align">
          <button
            id="submit-button"
            className={previewMode ? "hide" : "submit-edit-buttons"}
            onClick={() => {
              setPreviewMode(!previewMode);
            }}
          >
            Submit
          </button>
          <button
            id="edit-button"
            className={previewMode ? "submit-edit-buttons" : "hide"}
            onClick={() => {
              setPreviewMode(!previewMode);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export { UserInput };
