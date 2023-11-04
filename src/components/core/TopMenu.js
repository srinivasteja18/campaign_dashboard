import React from "react";
import DropDownIcon from "../../assets/topMenu/dropdown.svg";
import CakeIcon from "../../assets/topMenu/cake.svg";
import GiftIcon from "../../assets/topMenu/gift.svg";
import LanguageIcon from "../../assets/topMenu/language.svg";
import NotificationIcon from "../../assets/topMenu/notification.svg";
import PremiumIcon from "../../assets/topMenu/premium.svg";

export default function TopMenu() {
  return (
    <>
      <div className="top-nav">
        <div className="top-nav-group-1">
          <p className="p">Free trial ends in 2 days</p>
          <div className="top-nav-buy-plan">
            <img src={PremiumIcon} alt="premium" />
            <div className="top-nav-buy-plan-text">Buy Plan</div>
          </div>
        </div>
        <div className="top-nav-img-wrapper">
          <img src={GiftIcon} alt="Gift" />
          <img src={NotificationIcon} alt="Notification" />
        </div>
        <div className="top-nav-group-2">
          <img id="cake-img" src={CakeIcon} alt="Cake" />
          <div className="top-nav-user">
            <div className="top-nav-user-text">Mukund cake shop</div>
            <img id="arrow-img" src={DropDownIcon} alt="Arrow Down" />
          </div>
          <img src={LanguageIcon} alt="Language" />
        </div>
      </div>
    </>
  );
}
