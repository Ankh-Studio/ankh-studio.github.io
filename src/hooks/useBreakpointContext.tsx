import { useContext } from "react";
import { BreakpointContext } from "@/context/BreakpointContext";

export const useBreakpointContext = () => {
  const context = useContext(BreakpointContext);
  if( !context ) throw new Error("useBreakpointContext must be used within a BreakpointProvider");
  return context;
};
