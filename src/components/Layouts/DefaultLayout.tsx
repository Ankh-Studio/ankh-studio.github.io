import React from "react";
import { useThemeContext } from "@/hooks/useThemeContext";
import { twJoin } from "tailwind-merge";
import Navigation from "../Navigation";


interface DefaultLayoutProps {
  children : any,
};

const DefaultLayout = ({ children}: DefaultLayoutProps) => {
  const { themeColors } = useThemeContext();

  return (
    <>
    <div 
      style={{
        background: themeColors.Background,
      }}
      className={twJoin(
        "absolute top-0 left-0 w-full h-[600vh] z-[-20]",
      )}
    >
      <div className={"h-full w-full"}>
        <Navigation />
        { children }
      </div>
    </div>
    </>
  );
};

export default DefaultLayout;
