"use client";
import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar/navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const [isTop, setIsTop] = useState<boolean>(true);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) setIsTop(false);
    else setIsTop(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="font-serif">
      <Navbar isTop={isTop} />
      {children}
    </div>
  );
};

export default PageLayout;
