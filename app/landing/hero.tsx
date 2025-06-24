import { GradientText } from "~/components/gradient_text";

const Hero = ({
  scrollToSection
}: { scrollToSection: (sectionId: string) => void 
}) => {

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"/>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"/>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <GradientText className="mb-6 font-bold text-5xl md:text-7xl">
          Building AI Systems That Transform Business
        </GradientText>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          We are digital architects of the new age, forging technology that bridges millennia. 
        </p>
        <button
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
          onClick={() => scrollToSection('contact')}
        >
          Start Your Project
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-purple-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
