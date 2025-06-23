
const AnkhLogo = () => {
  return (
    <div className="AnkhStudio">
      <h1 
        className="Ankh font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 animate-gradient"
        >
        ANKH
      </h1>
      <h4 className="Studio"
        style={{ color: '#d9b3ff' }}
      >
        STUDIO
      </h4>

      <div className={"StudioBorder"}
        style={{
          backgroundImage: `linear-gradient(to right, #e6e600, #ff00ff 60%)`
        }}
      />
    </div>
  )
}

export default AnkhLogo;
