import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  
  const features = [
    { title: "Fast & Reliable", desc: "Shorten links in a fraction of a second with 99.9% uptime." },
    { title: "Secure", desc: "We prioritize your privacy and ensure your data is encrypted." },
    { title: "Analytics", desc: "Track how many people clicked your link in real-time." },
    { title: "Custom Links", desc: "Create branded aliases that are easy to remember." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About URL-Shortener</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto px-4">
          Making the internet a shorter, cleaner, and more trackable place, one link at a time.
        </p>
      </section>

      {/* Mission Section */}
 

      {/* Features Grid */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        </div>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Ready to shorten your first link?</h2>
        <button 
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition transform hover:scale-105"
        >
          Get Started Now
        </button>
      </section>
    </div>
  );
};

export default About;