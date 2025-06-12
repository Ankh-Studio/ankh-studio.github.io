import { useMemo } from "react";

const PlanetEarth = () => {
  const beams = 13;

  const Earth = useMemo(() => {
    return (
      <video
        className={"Earth_video"}
        autoPlay
        loop
        muted
        playsInline
        src="/videos/Earth_2160x750.mp4"
      />
    );
  }, []);
  
  const Sol = useMemo(() => {
    return (
      <div className={"Earth_overlay_position Arc_screen"}>
        <div className={"Sol"}>
          <div className={"Sol_alignment"}>
            <div className={"Sol_solana"}>
              <div className={"Sun"}/>
              { [...Array(beams).keys()].map((key) => (
                <div key={key} 
                  className={"Sun_flare"}
                  style={{
                    transform: `
                      rotate(${180 / beams * key}deg) 
                      scaleX(2) 
                      scaleY(1.5)`,
                    zIndex: beams - key,
                  }}
                >
                  <div className={"Sun_beam"}/>
                </div>
              )) }
            </div>
          </div>
          <div className={"Sol_alignment"}>
            <div className={"Sol_arc"}>
              <div className={"Arc"}/>
            </div>
          </div>
        </div>
      </div>
    );
  }, []);

  return (
    <div className={`Earth`}
    >
      <div className={"Earth_overlay_position"}>
        <div className={"Earth_atmosphere"}/>
      </div>
      <div className={"Earth_overlay_position"}>
        <div className={"Earth_shadow"}/>
      </div>

      <div className={"Earth_overlay_position Earth_sunCast"} />

      { Sol }
      { Earth }
    </div>
  );
};

export default PlanetEarth;
