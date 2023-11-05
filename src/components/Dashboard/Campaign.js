import React, { useState } from "react";
import Facebook from "../../assets/dashboard/facebook.svg";
import Google from "../../assets/dashboard/google.svg";
import Youtube from "../../assets/dashboard/youtube.svg";
import Delete from "../../assets/dashboard/delete.svg";
import Edit from "../../assets/dashboard/edit.svg";
import Switch from "react-switch";

export default function Campaign(props) {
  const [toggle, setToggle] = useState(props.data.toggle);

  const status = props.data.status;

  return (
    <div className="campaign-item">
      <div className="toggle-div">
        <input type="checkbox" />
        <Switch
          width={40}
          height={20}
          checked={toggle}
          onChange={setToggle}
          onColor="#0F6EFF"
          offColor="#DADEE3"
          checkedIcon=""
          uncheckedIcon=""
        />
      </div>
      <div className="campaign-details">
        <img src={props.data.image} alt={props.data.name} />
        <div className="campaign-name">
          <div className="campaign-name-text">{props.data.name}</div>
          <div className="campaign-description-text">
            created on : {props.data.created}
          </div>
        </div>
      </div>
      <p>
        {props.data.start_date} - {props.data.end_date}
      </p>
      <div className="campaign-header-2">
        <p className="campaign-header-2-item">{props.data.clicks}</p>
        <p className="campaign-header-2-item">{props.data.budget}</p>
        <p className="campaign-header-2-item">{props.data.location}</p>
        <img
          className="campaign-header-2-item"
          src={
            props.data.platform === "Facebook"
              ? Facebook
              : props.data.platform === "Google"
              ? Google
              : Youtube
          }
          alt={props.data.platform}
        />
        <div
          id="campaign-status"
          className={
            status === "Live now"
              ? "campaign-header-2-item campaign-status campaign-status-live"
              : status === "Paused"
              ? "campaign-header-2-item campaign-status campaign-status-paused"
              : "campaign-header-2-item campaign-status campaign-status-exhausted"
          }
        >
          {props.data.status}
        </div>
        <div className="campaign-actions campaign-header-2-item">
          {props.data.actions ? (
            props.data.actions.map((action, index) => (
              <img
                key={index}
                src={action === "edit" ? Edit : Delete}
                alt="actions"
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
