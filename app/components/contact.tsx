

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Build Something Amazing</h2>
        <p className="text-xl text-gray-300 mb-12">
          Ready to transform your business with AI? Get in touch with us today.
        </p>
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-1 rounded-lg max-w-md mx-auto">
          <div className="bg-black rounded-lg p-8">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-800 focus:border-purple-500 focus:outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-800 focus:border-purple-500 focus:outline-none transition-colors"
              />
              <textarea
                placeholder="Tell us about your project"
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-800 focus:border-purple-500 focus:outline-none transition-colors resize-none"
              ></textarea>
              <button
                onClick={() => window.location.href = 'mailto:contact@ankhstudio.com'}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center space-x-6 text-gray-400">
          <a href="mailto:contact@ankhstudio.com" className="hover:text-purple-400 transition-colors">
            contact@ankhstudio.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
