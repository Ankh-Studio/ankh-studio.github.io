
/**  Animated Starry Background: 100% SASS
 **/
const StarryBackground = () => {
  return (
    <div style={{ opacity: 0.5 }}>
      <div className="starry_bg_animation right-[0vw]">
        <div className="stars"/>
        <div className="stars3"/>
      </div>
      <div className="starry_bg_animation left-[50vw]">
        <div className="stars2"/>
        <div className="stars4"/>
      </div>
    </div>
  );
};

export default StarryBackground; 
