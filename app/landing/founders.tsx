import { useWindowSize } from "~/hooks/windowSize"
import anubis from "/images/anubis.png"
import khonsu from "/images/khonsu.png"
import osiris from "/images/osiris.png"
import { useEffect, useState } from "react"

const Founders = () => {

  return (
    <section id="founders">
      <div className="founder_container py-20 px-6 z-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Meet Our Founders</h2>
          <p className="text-center text-gray-400 mb-24 text-lg">Guided by ancient wisdom, powered by future technology</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                name: "Brandon Coburn", 
                deity: "Anubis",
                role: "Chief Technology Officer", 
                expertise: "AI Architecture & Systems Design",
                image : anubis,
                color: "emerald-500",
                gradient: "from-emerald-500 to-teal-600",
                description: "Guardian of digital transformation and keeper of technological wisdom"
              },
              { 
                name: "Johnathan Reeves", 
                deity: "Khonsu",
                role: "Chief Executive Officer", 
                expertise: "Business Strategy & Innovation",
                image: khonsu,
                color: "blue-500",
                gradient: "from-blue-500 to-indigo-600",
                description: "Navigator of time and architect of strategic futures"
              },
              { 
                name: "Tyler Aldrich", 
                deity: "Osiris",
                role: "Chief Product Officer", 
                expertise: "Product Development & UX",
                image: osiris,
                color: "green-600",
                gradient: "from-emerald-400 to-green-600",
                description: "Creator of digital life and master of user experiences"
              }
            ].map((founder, index) => (
              <div
                key={index}
                className="text-center group relative z-10"
              >
                  <div className={`absolute inset-0 w-64 h-64 mx-auto bg-gradient-to-br ${founder.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}/>
                  <div className={`relative w-64 h-64 rounded-full mx-auto overflow-hidden border-4 border-transparent ${founder.color} transition-all duration-500`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}/>
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"/>
                    <div className="relative w-full h-full bg-gray-800 flex items-center justify-center">
                      <img 
                        className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-500"
                        src={founder.image} 
                        alt={founder.deity} 
                      />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-1">{founder.name}</h3>
                <p className={`bg-gradient-to-r ${founder.color} bg-clip-text text-transparent font-semibold mb-2`}>
                  {founder.role}
                </p>
                <p className="text-gray-400 text-sm mb-3">{founder.expertise}</p>
                <p className="text-gray-500 text-xs italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {founder.description}
                </p>
              </div>
            ))}
          </div>
          {/*
              <SquareWithHole />
            */}
        </div>
        {/**<Pyramid className={"w-full h-full Pyramid -z-[10]"}/>**/}
      </div>
    </section>
  )
}

export default Founders;
