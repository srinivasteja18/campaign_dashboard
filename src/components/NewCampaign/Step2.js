import React, { useState } from "react";
import Base from "../core/Base";
import StepsTitle from "./StepsTitle";
import Icon1 from "../../assets/step2/pic1.svg";
import Icon2 from "../../assets/step2/pic2.svg";
import Icon3 from "../../assets/step2/pic3.svg";
import Icon4 from "../../assets/step2/pic4.svg";
import Icon5 from "../../assets/step2/pic5.svg";
import Icon6 from "../../assets/step2/pic6.svg";
import Icon7 from "../../assets/step2/pic7.svg";
import Icon8 from "../../assets/step2/pic8.svg";
import Icon9 from "../../assets/step2/pic9.svg";
import Check from "../../assets/step2/check.svg";
import ActiveCheck from "../../assets/step2/activeCheck.svg";
import { useNavigate } from "react-router-dom";
import OptionCard from "./OptionCard";
import ProgressBar from "./ProgressBar";

export default function Step2() {
  const [activeOption, setActiveOption] = useState(0);

  const navigate = useNavigate();
  const handleOnclick = (index) => {
    setActiveOption(index); //
  };

  const list = [
    {
      icon: Icon1,
      check: Check,
      activeCheck: ActiveCheck,
      name: "Bluberry cake with raw toppings",
      description: "Rs: 2,290",
      isActive: true,
    },
    {
      icon: Icon2,
      check: Check,
      activeCheck: ActiveCheck,
      name: "Chocolate truffle cake",
      description: "Rs: 2,190",
      isActive: false,
    },
    {
      icon: Icon3,
      check: Check,
      activeCheck: ActiveCheck,
      name: "Browine cake with fluffy cream",
      description: "Rs: 1,222",
      isActive: false,
    },
    {
      icon: Icon4,
      check: Check,
      activeCheck: ActiveCheck,
      name: "Ferro rocher cake",
      description: "Rs: 1,234",
      isActive: false,
    },
    {
      icon: Icon5,
      check: Check,
      activeCheck: ActiveCheck,
      name: "Custurd mixed with fruit cake",
      description: "Rs: 2.456",
      isActive: false,
    },
    {
      icon: Icon6,
      check: Check,
      activeCheck: ActiveCheck,
      name: "Best raw topping choco cake",
      description: "Rs: 2,345",
      isActive: false,
    },
    {
      icon: Icon7,
      check: Check,
      activeCheck: ActiveCheck,
      name: "Green cup cakes",
      description: "Rs: 1,234",
      isActive: false,
    },
    {
      icon: Icon8,
      check: Check,
      activeCheck: ActiveCheck,
      name: "Blueberry topping cakes",
      description: "Rs: 2.456",
      isActive: false,
    },
    {
      icon: Icon9,
      check: Check,
      activeCheck: ActiveCheck,
      name: "Strawberry cakes with blueberry",
      description: "Rs: 2,345",
      isActive: false,
    },
  ];

  const section = () => (
    <>
      <StepsTitle />
      <ProgressBar progressValue={50} step="step2" />
      <div className="details-section">
        <div className="details-title">
          <span className="details-title-text">Choose the Product</span>
          <span className="details-title-step">(Step 2 of 4)</span>
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
                imageId="optionImg"
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="button-wrapper">
        <button
          onClick={() => navigate("/Campaign/new/3")}
          className="continue-button"
        >
          <div className="dashboard-create-text">Continue</div>
        </button>
      </div>
    </>
  );

  return <Base>{section()}</Base>;
}
