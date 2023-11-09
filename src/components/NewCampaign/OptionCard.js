import React from "react";

export default function OptionCard(props) {

  return (
    <>
      <div onClick={props.onClick} className= {props.active ? "card option-active": "card"}>
        <img id={props.imageId ? props.imageId: ""} src={props.active && props.data.activeIcon ? props.data.activeIcon : props.data.icon} alt={props.data.name} />
        <div className="campaign-name option-name">
          <div className="option-name-text">{props.data.name}</div>
          <div className="option-description-text">
            {props.data.description}
          </div>
        </div>
        {
          props.data.check ? <>
            <img loading="lazy" id="checkIcon" src={props.active ? props.data.activeCheck : props.data.check} alt={props.data.name}/>

          </> : <></>
        }
      </div>
    </>
  );
}
