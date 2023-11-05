import React from "react";
import Step1Light from "../../assets/progress/step1light.svg";
import Step2Dark from "../../assets/progress/step2dark.svg";
import Step3Dark from "../../assets/progress/step3dark.svg";
import Step4Dark from "../../assets/progress/step4dark.svg";
import Step2Light from "../../assets/progress/step2light.svg";
import Step3Light from "../../assets/progress/step3light.svg";
import Step4Light from "../../assets/progress/step4light.svg";

export default function ProgressBar(props) {
  return (
    <div className="progress-bar-wrapper">
      <progress className="progress-bar" max="100" value={props.progressValue}>
        {props.progressValue}%
      </progress>
      <div className="progress-bar-div div1 progress-bar-active">
        <img src={Step1Light} alt="Step1" />
      </div>
      <div
        className={
          props.step === "step1"
            ? "progress-bar-div div2 progress-bar-inactive"
            : "progress-bar-div div2 progress-bar-active"
        }
      >
        <img
          src={props.step === "step1" ? Step2Dark : Step2Light}
          alt="Step2"
        />
      </div>
      <div
        className={
          props.step === "step1" || props.step === "step2"
            ? "progress-bar-div div3 progress-bar-inactive"
            : "progress-bar-div div3 progress-bar-active"
        }
      >
        <img
          src={
            props.step === "step1" || props.step === "step2"
              ? Step3Dark
              : Step3Light
          }
          alt="Step3"
        />
      </div>
      <div
        className={
          props.step === "step4"
            ? "progress-bar-div div4 progress-bar-active"
            : "progress-bar-div div4 progress-bar-inactive"
        }
      >
        <img
          src={props.step === "step4" ? Step4Light : Step4Dark}
          alt="Step4"
        />
      </div>
      <div className="progress-bar-text text1">What you want to do</div>
      <div className="progress-bar-text text2">Choose product</div>
      <div className="progress-bar-text text3">Campaign settings</div>
      <div className="progress-bar-text text4">Ready to go</div>
    </div>
  );
}
