import { DebugUIContext } from "@/context/DebugUIContext";
import { useContext } from "react";

export const useDebugUIContext = () => {
  const context = useContext(DebugUIContext);
  if( !context ) throw new Error("useDebugUIContext must be used within a PageScrollProvider");
  return context;
};
