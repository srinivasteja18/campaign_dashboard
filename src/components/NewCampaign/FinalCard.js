import React from "react";

export default function FinalCard(props) {
  return (
    <div
      onClick={props.onClick}
      className={
        props.isActive
          ? "campaign-final-card option-active"
          : "campaign-final-card campaign-final-border"
      }
    >
      <div className="campaign-final-title">
        <img src={props.data.profile} alt={props.data.name} />
        <div className="campaign-final-title-wrapper">
          <div className="campaign-final-title-text">{props.data.name}</div>
          <p className="campaign-final-subtitle">sponsered</p>
        </div>
      </div>
      <div className="campaign-final-description">{props.data.description}</div>
      <div className="campaign-final-img-wrapper">
        <img src={props.data.img} alt={props.data.name} />
      </div>
    </div>
  );
}
