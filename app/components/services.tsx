const ServiceDetails = [
            {
              title: "Custom AI Development",
              description: "Build tailored AI solutions that address your specific business challenges and objectives.",
              icon: "🤖"
            },
            {
              title: "Machine Learning Models",
              description: "Design and train sophisticated ML models for prediction, classification, and optimization.",
              icon: "🧠"
            },
            {
              title: "AI Integration",
              description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
              icon: "🔗"
            },
            {
              title: "Natural Language Processing",
              description: "Develop intelligent systems that understand and process human language effectively.",
              icon: "💬"
            },
            {
              title: "Computer Vision",
              description: "Create visual AI systems for image recognition, analysis, and automated processing.",
              icon: "👁️"
            },
            {
              title: "AI Consulting",
              description: "Strategic guidance to help you navigate your AI transformation journey.",
              icon: "💡"
            }
          ]

const Services = () => {
  return (
    <section id="services" className="service_container relative min-h-screen py-20 px-6 red">
      <div className="absolute -z-1 inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"/>
      <div className="absolute  -z-1 inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"/>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-24 text-center text-purple-200">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {ServiceDetails.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Services;
