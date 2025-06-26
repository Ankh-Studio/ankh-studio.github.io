import { useEffect, useMemo, useRef, useState } from "react";

const PlanetEarth = () => {

  const [isSafari, setIsSafari] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const beams = 13;

  useEffect(() => {
    if( videoRef.current !== null ){
      videoRef.current.playbackRate = 0.6;
    }
  }, []); 

  useEffect(() => {
    const ua = navigator.userAgent;
    const isSafariBrowser =
      /^((?!chrome|android).)*safari/i.test(ua); // Excludes Chrome on macOS/iOS
    setIsSafari(isSafariBrowser);
  }, []);

  const Earth = useMemo(() => {
    return (
      <div className={"Earth"}>
        <div className={"Earth_container"}>
          <video
            ref={videoRef}
            className={"Earth_video"}
            autoPlay
            loop
            muted
            playsInline
            src="/videos/Earth_2160x750.mp4"
          />
        </div>
        <div className="earth-shadow_container">
          <div className="earth-shadow"/> 
        </div>
        <div className="earth-atmosphere_container">
        <div className="earth-atmosphere">
        </div>
        </div>
      </div>
    )
  }, []);

  return (
    <>{ Earth }</>
  )
  
  //const Sol = useMemo(() => {
  //  return (
  //    <div className={"Earth_overlay_position Arc_screen"}>
  //      <div className={"Sol"}>
  //        <div className={"Sol_alignment"}>
  //          <div className={"Sol_solana"}>
  //            <div className={"Sun"}/>
  //            { [...Array(beams).keys()].map((key) => (
  //              <div key={key} 
  //                className={"Sun_flare"}
  //                style={{
  //                  transform: `
  //                    rotate(${180 / beams * key}deg) 
  //                    scaleX(2) 
  //                    scaleY(1.5)`,
  //                  zIndex: beams - key,
  //                }}
  //              >
  //                <div className={"Sun_beam"}/>
  //              </div>
  //            )) }
  //          </div>
  //        </div>
  //        <div className={"Sol_alignment"}>
  //          <div className={"Sol_arc"}>
  //            <div className={"Arc"}/>
  //          </div>
  //        </div>
  //      </div>
  //    </div>
  //  );
  //}, []);

  //return (
  //  <div className={`Earth`}>
  //    <div className={"Earth_container"}>
  //      { Earth }
  //      <div className={"Earth_overlay_position"}>
  //        <div className={"Earth_atmosphere"}/>
  //      </div>
  //
  //      <div className={"Earth_overlay_position "}>
  //        <div className={"Earth_shadow "}/>
  //      </div>
  //
  //      <div className={"Earth_overlay_position Earth_sunCast"} />
  //
  //      { Sol }
  //    </div>
  //  </div>
  //);
};

export default PlanetEarth;
