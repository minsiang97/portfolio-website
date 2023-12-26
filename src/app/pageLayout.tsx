"use client";
import React from "react";
import Navbar from "./components/navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
    </div>
  );
};

export default PageLayout;
