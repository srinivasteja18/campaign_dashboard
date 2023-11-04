import React, { useState } from "react";
import Base from "../core/Base";
import StepsTitle from "./StepsTitle";
import FinalCard from "./FinalCard";
import ProfileIcon from "../../assets/step4/profile.svg";
import Pic1 from "../../assets/step4/pic1.svg";
import Pic2 from "../../assets/step4/pic2.svg";
import Pic3 from "../../assets/step4/pic3.svg";
import Pic4 from "../../assets/step4/pic4.svg";
import { useNavigate } from "react-router-dom";

export default function Step4() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  const handleOnclick = (index) => {
    setActiveIndex(index);
  };

  const list = [
    {
      id: 1,
      profile: ProfileIcon,
      name: "Mukund Cake Shop",
      description:
        "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      img: Pic1,
    },
    {
      id: 2,
      profile: ProfileIcon,
      name: "Mukund Cake Shop",
      description:
        "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      img: Pic2,
    },
    {
      id: 3,
      profile: ProfileIcon,
      name: "Mukund Cake Shop",
      description:
        "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      img: Pic3,
    },
    {
      id: 4,
      profile: ProfileIcon,
      name: "Mukund Cake Shop",
      description:
        "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      img: Pic4,
    },
  ];

  const section = () => (
    <>
      <StepsTitle />
      <div className="details-section">
        <div className="details-title">
          <span className="details-title-text">Ready to go</span>
          <span className="details-title-step">(Step 4 of 4)</span>
        </div>
        <div className="line"></div>

        <div className="campaign-final-list">
          {list ? (
            list.map((card, index) => (
              <FinalCard
                isActive={index === activeIndex}
                onClick={() => handleOnclick(index)}
                key={index}
                data={card}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="button-wrapper">
        <button
          onClick={() => navigate("/Campaign")}
          className="continue-button"
        >
          <div className="dashboard-create-text">Start Campaign</div>
        </button>
      </div>
    </>
  );
  return <Base>{section()}</Base>;
}
