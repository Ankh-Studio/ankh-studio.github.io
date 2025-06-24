
/**  Animated Starry Background: 100% SASS
 **/
const StarryBackground = ({className}: { className?: string | undefined }) => {
  return (
    <div 
      className={className}
      style={{ opacity: 0.2 }}>
      <div className="starry_bg_animation">
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
