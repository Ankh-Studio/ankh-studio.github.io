// pages/index.tsx
import type { NextPage } from "next";
import React from "react";
import DefaultLayout from "../src/components/Layouts/DefaultLayout";
// import LandingPage from "../src/components/LandingPage";
import { ThemeProvider } from "../src/context/ThemeContext";
import { DebugUIProvider } from "../src/context/DebugUIContext";
import { BreakpointProvider, Breakpoints } from "../src/context/BreakpointContext";
import HomePage from "../src/components/HomePage";

const AnkhStudio: NextPage = () => {
  const breakpoints: Breakpoints = {
    Mobile  : "(max-width: 480px)",
    Tablet  : "(max-width: 1024px)",
    Desktop : "(min-width: 1025px)",
  };

  return (
    <ThemeProvider>
      <BreakpointProvider breakpoints={breakpoints}>
        <DebugUIProvider>
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        </DebugUIProvider>
      </BreakpointProvider>
    </ThemeProvider>
  );
};

export default AnkhStudio;
