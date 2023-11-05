import React, { useState } from "react";
import Base from "../core/Base";
import StepsTitle from "./StepsTitle";
import { useNavigate } from "react-router-dom";
import LocationIcon from "../../assets/step3/location.svg";
import ProgressBar from "./ProgressBar";

export default function Step3() {
  const [timeline, setTimeline] = useState(false);
  const [location, setLocation] = useState(false);

  const navigate = useNavigate();

  const section = () => (
    <>
      <StepsTitle />
      <ProgressBar progressValue={80} step="step3"/>
      <div className="settings-details">
        <div className="details-section setting-section">
          <div className="details-title">
            <span className="details-title-text">Campaign Settings</span>
            <span className="details-title-step">(Step 3 of 4)</span>
          </div>
          <div className="line"></div>

          {/* budget information */}

          <div className="budget-info">
            <div className="budget-info-text"> Budget and Dates Info </div>
            <div className="budget-timeline">
              <p className="budget-label">Budget Timeline</p>
              <div className="budget-toggle-wrapper">
                <div
                  onClick={() => setTimeline(false)}
                  className={
                    timeline
                      ? "budget-toggle budget-toggle-inactive"
                      : "budget-toggle budget-toggle-active"
                  }
                >
                  Lifetime
                </div>
                <div
                  onClick={() => setTimeline(true)}
                  className={
                    timeline
                      ? "budget-toggle-2 budget-toggle-active"
                      : "budget-toggle-2 budget-toggle-inactive"
                  }
                >
                  Daily
                </div>
              </div>
            </div>
            <div className="budget-dates-wrapper">
              <div className="budget-date">
                <label className="budget-label">Start date</label>
                <br />
                <input type="date" />
              </div>
              <div className="budget-date">
                <label className="budget-label">End date</label>
                <br />
                <input type="date" />
              </div>
            </div>
            <div className="budget-money">
              <label className="budget-label">Enter Campaign Budget</label>
              <br />
              <input type="range" min={100} max={100000} />
              <div className="budget-money-labels">
                <p className="budget-label">100</p>
                <p className="budget-label budget-label-right">1,00,000</p>
              </div>
            </div>
          </div>

          {/* Location information */}
          <div className="budget-info">
            <div className="budget-info-text">Location Info</div>
            <div className="budget-timeline">
              <p className="budget-label">Location Type</p>
              <div className="budget-toggle-wrapper">
                <div
                  onClick={() => setLocation(false)}
                  className={
                    location
                      ? "budget-toggle budget-toggle-inactive"
                      : "budget-toggle budget-toggle-active"
                  }
                >
                  Location
                </div>
                <div
                  onClick={() => setLocation(true)}
                  className={
                    location
                      ? "budget-toggle-2 budget-toggle-active"
                      : "budget-toggle-2 budget-toggle-inactive"
                  }
                >
                  Radius
                </div>
              </div>
            </div>

            <div className="location-search">
              <label className="budget-label">Search Location</label>
              <br />
              <input type="text"/>
                <img src={LocationIcon} alt="location" />
            </div>
            <div className="budget-money">
              <label className="budget-label">Select Target Radius</label>
              <input type="range" min={1} max={30} />
              <div className="budget-money-labels">
                <p className="budget-label">1</p>
                <p className="budget-label budget-label-right">30</p>
              </div>
            </div>
          </div>
        </div>

        <div className="button-wrapper budget-button">
          <button
            onClick={() => navigate("/Campaign/new/4")}
            className="continue-button"
          >
            <div className="dashboard-create-text">Continue</div>
          </button>
        </div>
      </div>
    </>
  );
  return <Base>{section()}</Base>;
}
