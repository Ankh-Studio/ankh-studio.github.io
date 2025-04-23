import { useBreakpoint } from "@/hooks/useBreakpoint";
import { Tab } from "@headlessui/react";
import React, { createContext, useState } from "react";

export type Breakpoints = {
  Mobile  : string;
  Tablet  : string;
  Desktop : string;
};
type FilterBPProps = {
  mobile?       : any;
  tablet?       : any;
  desktop?      : any;
  defaultStyle? : any;
};

interface BreakpointProviderProps {
  breakpoints : Breakpoints;
  children    : React.ReactNode;
};

interface BreakpointContextProps {
  isMobile      : boolean | null;
  isTablet      : boolean | null;
  isDesktop     : boolean | null;
  isReady       : () => boolean;
  bpFilter : (props: FilterBPProps) => any;
}

export const BreakpointContext = createContext<BreakpointContextProps|undefined>(undefined);

export const BreakpointProvider: React.FC<BreakpointProviderProps> = ({ 
  breakpoints,
  children,
}) => {
  const isMobile  = useBreakpoint(breakpoints.Mobile);
  const isTablet  = useBreakpoint(breakpoints.Tablet);
  const isDesktop = useBreakpoint(breakpoints.Desktop);

  const isReady = (): boolean => {
    return isMobile === null
      || isTablet === null
      || isDesktop === null;
  };

  /** Filters through three potential CSS Styles
   *  based on the internal values of 
   *  `isMobile, isTablet, and isDesktop`
   *  returning the correct styles based on the 
   *  current Breakpoint size.
   *
   *  Parameter `defaultStyle` is used for adding
   *  a Style to more than one Breakpoint.
   *
   *  i.e., If you only want to update styling when in Desktop mode.
   *     `bpFilter({
   *       desktop: { width: '100vw' },
   *       defaultStyle: { width: '50vw' },
   *     })`
   **/
  const bpFilter = ({
    mobile  = {},
    tablet  = {},
    desktop = {},
    defaultStyle,
  }: FilterBPProps) => {
    if( isMobile ) return mobile;
    if( isTablet ) return tablet;
    if( isDesktop) return desktop;
    return defaultStyle;
  };

  return (
    <BreakpointContext.Provider value={{
      isMobile,
      isTablet,
      isDesktop,
      isReady,
      bpFilter,
    }}>
      { children }
    </BreakpointContext.Provider>
  );
};
