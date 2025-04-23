import DebugUIWindow from "@/components/DebugUI";
import React, { createContext, useEffect, useRef, useState } from "react";

interface DebugUIContext {
  updateDebugProp : (prop: DebugUIProps) => void;
  debugUIProps    : UIProps;
  showDebug       : boolean;
  setShowDebug    : (show: boolean) => void;
}

export interface DebugUIContextParams {

}

export type DebugUIProps = {
  title: string,
  value: string | number,
  className?: string,
};

type UIProps = {
  [title: string]: DebugUIProps;
}

export const DebugUIContext = createContext<DebugUIContext | undefined>(undefined);

export const DebugUIProvider = ({ children }: {children: React.ReactNode}) => {
  const [showDebug, setShowDebug]       = useState<boolean>(true);
  const [debugUIProps, setDebugUIProps] = useState<UIProps>({});

  const updateDebugProp = (prop: DebugUIProps) => {
    setDebugUIProps(prev => {
      const last = prev[prop.title];
      if( last ){
        if( last.value !== prop.value ){
          prev[prop.title].value = prop.value;
        }
        if( last.className !== prop.className ){
          prev[prop.title].className = prop.className;
        }
        return prev;
      }

      prev[prop.title] = prop;
      return prev;
    });
  };

  return (
    <DebugUIContext.Provider value={{
      updateDebugProp,
      debugUIProps,
      showDebug,
      setShowDebug,
    }}>
      { children }
    </DebugUIContext.Provider>
  );
};
