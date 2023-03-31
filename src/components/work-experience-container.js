import React from "react";
import { WorkExperience } from "./work-experience";

function WorkExperienceContainer(props) {
  return (
    <div>
      <h3
        className={
          !props.previewOn
            ? "h3-grey"
            : props.numberOfWorkComponents > 0
            ? "h3-black"
            : "hide"
        }
      >
        Work Experience
      </h3>
      {Array.from(Array(props.numberOfWorkComponents)).map((x, index) => (
        <WorkExperience key={index} previewOn={props.previewOn} />
      ))}
    </div>
  );
}

export { WorkExperienceContainer };
