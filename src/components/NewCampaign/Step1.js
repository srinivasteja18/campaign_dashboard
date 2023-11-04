import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import StepsTitle from "./StepsTitle";
import Icon1 from "../../assets/step1/icon1.svg";
import Icon2 from "../../assets/step1/icon2.svg";
import Icon3 from "../../assets/step1/icon3.svg";
import Icon4 from "../../assets/step1/icon4.svg";
import Icon5 from "../../assets/step1/icon5.svg";
import Icon6 from "../../assets/step1/icon6.svg";
import Icon7 from "../../assets/step1/icon7.svg";
import Icon8 from "../../assets/step1/icon8.svg";
import Icon9 from "../../assets/step1/icon9.svg";
import ActiveIcon1 from "../../assets/step1/activeIcon1.svg";
import ActiveIcon2 from "../../assets/step1/activeIcon2.svg";
import ActiveIcon3 from "../../assets/step1/activeIcon3.svg";
import ActiveIcon4 from "../../assets/step1/activeIcon4.svg";
import ActiveIcon5 from "../../assets/step1/activeIcon5.svg";
import ActiveIcon6 from "../../assets/step1/activeIcon6.svg";
import ActiveIcon7 from "../../assets/step1/activeIcon7.svg";
import ActiveIcon8 from "../../assets/step1/activeIcon8.svg";
import ActiveIcon9 from "../../assets/step1/activeIcon9.svg";

import OptionCard from "./OptionCard";
import { useNavigate } from "react-router-dom";

export default function Step1() {
  const [activeOption, setActiveOption] = useState(0);

  const navigate = useNavigate();
  const handleOnclick = (index) => {
    setActiveOption(index); //
  };

  const list = [
    {
      icon: Icon1,
      activeIcon: ActiveIcon1,
      name: "Get Leads as calls",
      description: "Reach broad audience and get leads through calls",
      isActive: true,
    },
    {
      icon: Icon2,
      activeIcon: ActiveIcon2,
      name: "Get Leads as Facebook messages",
      description: "Get more FB messages from Leads",
      isActive: false,
    },
    {
      icon: Icon3,
      activeIcon: ActiveIcon3,
      name: "Increase page followers",
      description: "Encourage customers to follow your page",
      isActive: false,
    },
    {
      icon: Icon4,
      activeIcon: ActiveIcon4,
      name: "Get Customer Leads",
      description: "Encourage customers to take action",
      isActive: false,
    },
    {
      icon: Icon5,
      activeIcon: ActiveIcon5,
      name: "Get more youtube views",
      description: "Increase organic views by obtaining user attention",
      isActive: false,
    },
    {
      icon: Icon6,
      activeIcon: ActiveIcon6,
      name: "Get more website traffic",
      description: "Get the right people to visit your website",
      isActive: false,
    },
    {
      icon: Icon7,
      activeIcon: ActiveIcon7,
      name: "Increase Live store traffics",
      description: "Drive visits to local stores, restaurants & Dealerships",
      isActive: false,
    },
    {
      icon: Icon8,
      activeIcon: ActiveIcon8,
      name: "Increase your App installs",
      description: "Get more installs, interactions for your app",
      isActive: false,
    },
    {
      icon: Icon9,
      activeIcon: ActiveIcon9,
      name: "Increase the catalogue sales",
      description: "Drive the sales of your catalogue and get more leads",
      isActive: false,
    },
  ];


  const section = () => (
    <>
      <StepsTitle/>

      <div className="details-section">
        <div className="details-title">
          <span className="details-title-text">What you want to do?</span>
          <span className="details-title-step">(Step 1 of 4)</span>
        </div>
        <div className="line"></div>
        <div className="options-list">
          {list ? (
            list.map((option, index) => (
              <OptionCard
                key={index}
                active={index === activeOption}
                data={option}
                ind={index}
                onClick={() => handleOnclick(index)}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="button-wrapper">
      <button
        onClick={() => navigate("/Campaign/new/2")}
        className="continue-button"
      >
        <div className="dashboard-create-text">Continue</div>
      </button>
      </div>
      
    </>
  );

  return <Base>{section()}</Base>;
}
