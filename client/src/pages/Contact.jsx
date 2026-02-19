import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800">Thanks for reaching out!</h2>
        <p className="text-gray-600 mt-2">We've received your message and will reply soon.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-blue-600 font-medium hover:text-blue-800"
        >
          ← Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto my-16 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-500 text-sm mt-1">We'd love to hear from you</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-semibold text-gray-600">Name</label>
          <input 
            type="text" 
            required 
            placeholder="John Doe"
            className="w-full p-3 mt-1 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-600">Email</label>
          <input 
            type="email" 
            required 
            placeholder="john@example.com"
            className="w-full p-3 mt-1 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-600">Message</label>
          <textarea 
            required 
            rows="4" 
            placeholder="How can we help?"
            className="w-full p-3 mt-1 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;