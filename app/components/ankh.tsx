

const Ankh = ({color}: {color: string}) => {
  return (
    <svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke={color} stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="50" cy="35" rx="16" ry="20"/>
        <line x1="50" y1="60" x2="50" y2="85"/>
        
        <line x1="25" y1="65" x2="75" y2="65"/>
      </g>
    </svg>
  );
}

export default Ankh;
