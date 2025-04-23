import { DebugUIProps } from "@/context/DebugUIContext";
import { useDebugUIContext } from "@/hooks/useDebugUIContext";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type DebugUIWindowProps = {
  zIndex: number;
};

const DebugUIWindow = ({
  zIndex,
}: DebugUIWindowProps) => {
  const {
    showDebug,
    debugUIProps,
  } = useDebugUIContext();
  const [showLog, setShowLog] = useState(!true);

  const DevValue = ({
    title,
    value,
    className = "text-Dark-AccentOne",
  }: DebugUIProps) => (
    <div className={cn(
      "flex justify-around  border-Dark-Primary",
    )}>
      <div className="flex w-[60%] justify-end">
        <h1 className={cn(
          "text-center text-Dark-TextPrimary",
          "my-auto text-xl justify-start"
        )}>
          { title + " ||" }
        </h1>
      </div>
      <div className="flex w-[40%] justify-start pl-2">
        <h1 className={cn(
          "my-auto text-[1rem]",
          className
        )}>{ value }</h1>
      </div>
    </div>
  );


  if( !showDebug ) return <></>;

  return (
    <div style={{ 
      zIndex: zIndex,
      opacity: showLog
        ? 1.0
        : 0.1
    }} className={cn(
      "fixed top-32 right-32 bg-Dark-Background flex flex-col",
      " rounded-3xl w-48 h-24 flex",
      "justify-end text-center m-auto",
      "h-auto  w-[12vw] px-6  pt-4",
      showLog ? "pb-6" : "pb-0"
    )}>
      <div className={cn(
        "flex mx-auto w-full h-[3rem]",
        " mb-[1.5rem]  justify-center",
        " bg-Dark-Surface border border-Dark-TextSecondary rounded-l"
      )}>
        <div className="flex flex-row justify-between">
          <h1 className={cn(
            "block  my-auto mt-2 text-xl text-Dark-TextSecondary font-semibold mr-4"
          )}>Debug Parameters</h1>

          <button 
            className={cn(
              "w-12  text-Dark-TextSecondary border roudned-sm"
            )}
            onMouseDown={() => setShowLog(!showLog)}
          >
            { showLog ? "Hide" : "Show" }
          </button>
        </div>
      </div>

      { showLog && (<>
      { Object.entries(debugUIProps).map(([key, val]) => (
        <div key={key} >
          <DevValue 
            {...val}
          />
          <div className={cn(
            "flex w-full h-[1px] bg-Dark-AccentTwo opacity-20 mb-4 mt-2"
          )}/>
        </div>
      )) }
      </>) }
    </div>
  );
};

export default DebugUIWindow;
