import React from 'react'
import Formurl from '../component/FormUrl'

const Home = () => {
  return (
    <main className='min-h-[85vh] flex flex-col items-center justify-center px-4 bg-linear-to-b from-white to-gray-50'>
      
      {/* Hero Section */}
      <div className='text-center mb-10 space-y-4'>
        <h1 className='text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight'>
          Shorten Your <span className='text-blue-600'>Links</span>. 
          <br />
          Expand Your Reach.
        </h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Create short, powerful links in seconds. Perfect for social media, 
          tracking, and keeping your branding clean.
        </p>
      </div>

      {/* The Shortener Input Component */}
      <div className='w-full max-w-3xl'>
        <Formurl />
      </div>

      {/* Optional Trust/Feature badges */}
      <div className='mt-12 flex gap-8 text-sm text-gray-400 font-medium'>
        <span>✓ Secure & Fast</span>
        <span>✓ Detailed Analytics</span>
        <span>✓ Custom Aliases</span>
      </div>

    </main>
  )
}

export default Home