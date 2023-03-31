import React from "react";
import { Education } from "./education";

function EducationContainer(props) {
  return (
    <div>
      <h3
        className={
          !props.previewOn
            ? "h3-grey"
            : props.numberOfEducationComponents > 0
            ? "h3-black"
            : "hide"
        }
      >
        Education
      </h3>
      {Array.from(Array(props.numberOfEducationComponents)).map((x, index) => (
        <Education key={index} previewOn={props.previewOn} />
      ))}
    </div>
  );
}

export { EducationContainer };
