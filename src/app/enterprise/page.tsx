// pages/enterprise.js
'use client';
import React from 'react';
import Link from 'next/link';
import CarouselComponent from '/Users/radhikapanchal/openai/corp/src/app/enterprise/slider'; // Adjust the path as necessary
import TabComponent from '/Users/radhikapanchal/openai/corp/src/app/enterprise/tab'; // Adjust the path as necessary

const EnterprisePage = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-start min-h-screen">
      <div className="text-center mt-20">
        <span className="text-md text-white mb-2">ChatGPT Enterprise</span>
        <h1 className="text-4xl mt-4 mb-4 text-white">
          Redefine work in the age of AI
        </h1>
      </div>
      <p className="text-xl text-white text-center max-w-3xl mb-4">
        Enterprise-grade security and privacy and
        <div>the most powerful version of ChatGPT yet.</div>
      </p>
      <Link
        href="/"
        className="bg-white text-black px-5 py-2 rounded-full flex items-center"
      >
        Talk with our team <span className="ml-2">&#8594;</span>
      </Link>
      <div className="text-center mt-20">
        <h1 className="text-4xl mt-4 mb-4 text-white">
          A new way of working
        </h1>
      </div>
      <p className="text-xl text-white text-center max-w-3xl mb-4">
        92% of the Fortune 500 already use OpenAI in their business
      </p>
      <div className="mt-8 w-full px-8">
        <CarouselComponent className="mt-10" />
      </div>
      <div className="text-center mt-20">
        <h1 className="text-4xl mt-4 mb-4 text-white">
          Customize ChatGPT to any workflow       
          <div>and collaborate across teams</div>  
        </h1>
      </div>
      <TabComponent />
    </div>
  );
};

export default EnterprisePage;
