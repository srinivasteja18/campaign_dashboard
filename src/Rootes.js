import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./components/Dashboard/Dashboard";
import EmptyPage from "./components/core/emptyPage";
import App from "./App";
import Step1 from "./components/NewCampaign/Step1";
import Step2 from "./components/NewCampaign/Step2";
import Step3 from "./components/NewCampaign/Step3";
import Step4 from "./components/NewCampaign/Step4";



export default function Rootes() {
  return (
    <Router>
      <Routes>
        <Route element={<App />} exact path="/"></Route>
        <Route element={<Dashboard />} exact path="/Campaign"></Route>
        <Route element={<EmptyPage />} exact path="/Home"></Route>
        <Route element={<EmptyPage />} exact path="/Products"></Route>
        <Route element={<EmptyPage />} exact path="/Customers"></Route>
        <Route element={<Step1 />} exact path="/Campaign/new/1"></Route>
        <Route element={<Step2 />} exact path="/Campaign/new/2"></Route>
        <Route element={<Step3 />} exact path="/Campaign/new/3"></Route>
        <Route element={<Step4 />} exact path="/Campaign/new/4"></Route>
      </Routes>
    </Router>
  );
}
