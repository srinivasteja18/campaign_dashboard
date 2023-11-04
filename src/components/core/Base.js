import React from "react";
import LeftNav from "./LeftNav";
import TopMenu from "./TopMenu";

export default function Base({ children }) {
  return (
    <>
      <LeftNav />
      <TopMenu />
      <div className="section">{children}</div>
    </>
  );
}
