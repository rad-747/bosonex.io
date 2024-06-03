import React from 'react';
import Link from 'next/link';
import CarouselComponent from '/Users/radhikapanchal/openai/corp/src/components/grid';

const HomePage = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-start min-h-screen">
      <div className="text-center mt-20">
        <h1 className="text-5xl mb-7 text-white">
          The Business Eco-system.
        </h1>
      </div>
      <p className="text-2xl text-white text-center max-w-3xl mb-4">
        Everything your business needs, at your fingertips
        <div>Open Business Marketplace + Toolkit.</div>
      </p>
      <Link
        href="/start"
        className="bg-white text-black px-5 py-2 rounded-full flex items-center"
      >
        Start Now <span className="ml-2">&#8594;</span>
      </Link>
      <div className="absolute top-2 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
      {/* Render the CarouselComponent */}
      <CarouselComponent />
      {/* Statement below the CarouselComponent */}
      <div className="text-white text-center mt-4 mb-8">
        <h1 className="text-4xl mb-4">Writes, brainstorms, edits</h1>
        <h1 className="text-4xl mb-4">and explores ideas with you</h1>
      </div>
      <img src="/pic1.jpg" alt="Pic 1" className="w-full max-w-[1084px] rounded-lg mx-auto mb-20" />
      <div className="text-white text-center mt-4 mb-10">
        <h1 className="text-4xl mb-4">Summarize meetings. Find new</h1>
        <h1 className="text-4xl mb-4">insights. Increase productivity.</h1>
      </div>
      <img src="/pic2.jpg" alt="Pic 2" className="w-full max-w-[1084px] rounded-lg mx-auto mb-20" />
      <div className="text-white text-center mt-4 mb-10">
        <h1 className="text-4xl mb-4">Generate and debug code. Automate</h1>
        <h1 className="text-4xl mb-4">repetitive tasks. Learn new APIs.</h1>
      </div>
      <img src="/pic3.jpg" alt="Pic 3" className="w-full max-w-[1084px] rounded-lg mx-auto mb-24" />
      <div className="text-white text-center mt-4 mb-10">
        <h1 className="text-4xl mb-4">Learn something new. Dive into a</h1>
        <h1 className="text-4xl mb-4">hobby. Answer complex questions.</h1>
      </div>
      <img src="/pic1.jpg" alt="Pic 1" className="w-full max-w-[1084px] rounded-lg mx-auto mb-20" />
      <div className="text-white text-center mt-4 mb-10">
        <h1 className="text-4xl mb-4">Get started with ChatGPT today</h1>
        <a href="/pricing" className="text-lg inline-flex items-center">
          View Pricing Plans <span className="text-sm ml-1 mt-20"></span>
        </a>
      </div>

      {/* Pricing Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white text-left mt-10 px-6 mb-7">
        {/* Free Plan */}
        <div className="bg-[#161718] p-6 rounded-md shadow-lg mx-auto" style={{ maxWidth: '500px' }}>
          <h2 className="text-2xl mb-6">Free</h2>
          <ul className="mb-4 space-y-7">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 4.293a1 1 0 010 1.414L8 14.414l-4.707-4.707a1 1 0 111.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Assistance with writing, problem solving and more
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 4.293a1 1 0 010 1.414L8 14.414l-4.707-4.707a1 1 0 111.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Access to GPT-3.5
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 4.293a1 1 0 010 1.414L8 14.414l-4.707-4.707a1 1 0 111.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Limited access to GPT-4o
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 4.293a1 1 0 010 1.414L8 14.414l-4.707-4.707a1 1 0 111.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Limited access to advanced data analysis, file uploads, vision, web browsing, and custom GPTs
            </li>
          </ul>
          <div className="text-2xl mb-2">$ 0/ month</div>
          <a href="/start-now" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-7 py-2 rounded-full inline-block mt-44 ml-2">
            Start now
          </a>
        </div>

        {/* Plus Plan */}
        <div className="bg-[#161718] p-6 rounded-md shadow-lg mx-auto" style={{ maxWidth: '500px' }}>
          <h2 className="text-2xl mb-6">Plus</h2>
          <ul className="mb-4 space-y-7">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 4.293a1 1 0 010 1.414L8 14.414l-4.707-4.707a1 1 0 111.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Early access to new features
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 4.293a1 1 0 010 1.414L8 14.414l-4.707-4.707a1 1 0 111.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Access to GPT-4, GPT-4o, GPT-3.5
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 4.293a1 1 0 010 1.414L8 14.414l-4.707-4.707a1 1 0 111.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Up to 5x more messages for GPT-4o
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 4.293a1 1 0 010 1.414L8 14.414l-4.707-4.707a1 1 0 111.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Access to advanced data analysis, file uploads, vision, and web browsing
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 4.293a1 1 0 010 1.414L8 14.414l-4.707-4.707a1 1 0 111.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              DALL·E image generation
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-white-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 4.293a1 1 0 010 1.414L8 14.414l-4.707-4.707a1 1 0 111.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Create and use custom GPTs
            </li>
          </ul>
          <div className="text-2xl mb-2 mt-7">$ 20/ month</div>
          <a href="/start-now" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-7 py-2 rounded-full inline-block mt-4 ml-2">
            Start now
          </a>
          <div className="flex items-center mt-2">
            <div className="text-sm mt-2">Limits apply</div>
          </div>
        </div>
      </div>
      // Add this code below the pricing plans grid
      <div className="bg-[#161718] px-72 py-28 rounded-md  mx-auto mt-14 mb-28" style={{ maxWidth: '1200px' }}>
  <h1 className="text-4xl text-white text-center mb-1">Join hundreds of millions of </h1>
  <h1 className="text-4xl text-white text-center">users and try ChatGPT today.</h1>
  <div className="flex justify-center mt-11">
    <a
      href="/try-chatgpt"
      className="bg-white text-black px-7 py-2 rounded-full inline-block"
    >
      Try ChatGPT
    </a>
  </div>
</div>

    </div>
  );
};

export default HomePage;
