import React, { useState, useEffect } from "react";
import CreateIcon from "../../assets/dashboard/create.svg";
import SearchIcon from "../../assets/dashboard/search.svg";
import Campaign from "./Campaign";
import Bluberry from "../../assets/dashboard/bluberry.svg";
import Brownie from "../../assets/dashboard/brownie.svg";
import Chocolate from "../../assets/dashboard/chocolate.svg";
import Pumpkin from "../../assets/dashboard/pumpkin.svg";
import Cupcake from "../../assets/dashboard/cupcakes.svg";
import Base from "../core/Base";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [searchCampaigns, setSearchCampaigns] = useState([]);
  const navigate = useNavigate();
  const handleSearchOnChange = (e) => {
    const searchText = e.target.value;
    const result = campaignList.filter((campaign) =>
      campaign.name.toLowerCase().includes(searchText)
    );
    setSearchCampaigns(result);
  };

  const handlePlatformOnChange = (e) => {
    const platform = e.target.value;
    if (platform === "All Platforms") {
      setSearchCampaigns(campaignList);
      return;
    }
    const result = campaignList.filter(
      (campaign) => campaign.platform === platform
    );
    // console.log(platform, result)
    setSearchCampaigns(result);
  };

  const handleStatusOnChange = (e) => {
    const status = e.target.value;
    if (status === "All Status") {
      setSearchCampaigns(campaignList);
      return;
    }
    const result = campaignList.filter(
      (campaign) => campaign.status === status
    );
    console.log(status, result);
    setSearchCampaigns(result);
  };

  const campaignList = [
    {
      toggle: true,
      image: Bluberry,
      name: "Bluberry cake Campaign",
      created: "14 july",
      start_date: "10-10-2023",
      end_date: "12-11-2023",
      clicks: 300,
      budget: 3400,
      location: "Chennai",
      platform: "Facebook",
      status: "Live now",
      actions: ["delete"],
    },
    {
      toggle: false,
      image: Chocolate,
      name: "Chocolate cake campaign",
      created: "21 july",
      start_date: "9-10-2023",
      end_date: "10-11-2023",
      clicks: 500,
      budget: 2100,
      location: "Bangalore",
      platform: "Google",
      status: "Paused",
      actions: ["delete", "edit"],
    },
    {
      toggle: false,
      image: Brownie,
      name: "Browine cake campaign",
      created: "12 july",
      start_date: "23-9-2023",
      end_date: "10-10-2023",
      clicks: 900,
      budget: 4500,
      location: "Hyderabad",
      platform: "Facebook",
      status: "Exhausted",
      actions: ["delete", "edit"],
    },
    {
      toggle: true,
      image: Pumpkin,
      name: "Pumpkin cake camapign",
      created: "14 October",
      start_date: "5-10-2023",
      end_date: "7-11-2023",
      clicks: 500,
      budget: 7000,
      location: "Mumbai",
      platform: "Youtube",
      status: "Live now",
      actions: ["delete", "edit"],
    },
    {
      toggle: true,
      image: Cupcake,
      name: "Cup cakes campaign",
      created: "14 september",
      start_date: "15-10-2023",
      end_date: "30-11-2023",
      clicks: 100,
      budget: 1400,
      location: "Chennai",
      platform: "Facebook",
      status: "Live now",
      actions: ["delete", "edit"],
    },
  ];

  useEffect(() => {
    setSearchCampaigns(campaignList);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const section = () => (
    <>
      <div className="dashboard-title-wrapper">
        <div className="dashboard-title">
          <div className="dashboard-title-text">Your Campaigns</div>
          <p className="dashboard-description-text">
            Check the list of campigns you created
          </p>
        </div>
        <div
          onClick={() => navigate("/Campaign/new/1")}
          className="dashboard-create-wrapper"
        >
          <img src={CreateIcon} alt="Create" />
          <div className="dashboard-create-text">Create new campaign</div>
        </div>
      </div>
      <div className="campaigns-div">
        <div className="campaigns-filter-header">
          <div className="campaigns-search-wrapper">
            <form className="search-form">
              <label className="search-label">
                <img src={SearchIcon} alt="search" />
                <input
                  placeholder="Search for the Campaign"
                  onChange={handleSearchOnChange}
                  className="search-input"
                  type="text"
                />
              </label>
            </form>
          </div>
          <div className="campaigns-filter-wrapper">
            <label className="filter-label">
              <span className="filter-label-text">Platform: </span>
              <select
                onChange={handlePlatformOnChange}
                className="filter-dropdown"
              >
                <option className="filter-dropdown-text" value="All Platforms">
                  All Platforms
                </option>
                <option className="filter-dropdown-text" value="Google">
                  Google
                </option>
                <option className="filter-dropdown-text" value="Facebook">
                  Facebook
                </option>
                <option className="filter-dropdown-text" value="Youtube">
                  Youtube
                </option>
              </select>
            </label>

            <label className="filter-label">
              <span className="filter-label-text">Status: </span>
              <select
                onChange={handleStatusOnChange}
                className="filter-dropdown"
              >
                <option className="filter-dropdown-text" value="All Status">
                  All Status
                </option>
                <option className="filter-dropdown-text" value="Live now">
                  Live Now
                </option>
                <option className="filter-dropdown-text" value="Paused">
                  Paused
                </option>
                <option className="filter-dropdown-text" value="Exhausted">
                  Exhausted
                </option>
              </select>
            </label>

            <label className="filter-label">
              <select className="filter-dropdown">
                <option className="filter-dropdown-text" value="30">
                  Last 30 days
                </option>
                <option className="filter-dropdown-text" value="60">
                  Last 60 days
                </option>
              </select>
            </label>
          </div>
        </div>

        <div className="campaign-header">
          <div className="toggle-div">
            <input type="checkbox" />
            <p>On/Off</p>
          </div>
          <p>Campaign</p>
          <p>Date Range</p>
          <div className="campaign-header-2">
            <p className="campaign-header-2-item">Clicks</p>
            <p className="campaign-header-2-item">Budget</p>
            <p className="campaign-header-2-item">Location</p>
            <p className="campaign-header-2-item">Platform</p>
            <p className="campaign-header-2-item">Status</p>
            <p className="campaign-header-2-item">Actions</p>
          </div>
        </div>
        <div className="campaign-list">
          {searchCampaigns ? (
            searchCampaigns.map((campaign, index) => (
              <Campaign key={index} data={campaign} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );

  return <Base>{section()}</Base>;
}
