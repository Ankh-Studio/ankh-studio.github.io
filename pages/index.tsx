// pages/index.tsx
import type { NextPage } from "next";
import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import LandingPage from "@/components/LandingPage";
import { ThemeProvider } from "@/context/ThemeContext";
import { DebugUIProvider } from "@/context/DebugUIContext";
import { BreakpointProvider, Breakpoints } from "@/context/BreakpointContext";

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
            <LandingPage />
          </DefaultLayout>
        </DebugUIProvider>
      </BreakpointProvider>
    </ThemeProvider>
  );
};

export default AnkhStudio;
