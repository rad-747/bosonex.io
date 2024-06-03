'use client';
// components/TabComponent.js
import React, { useState, useRef, useEffect } from 'react';

const tabs = [
  { name: "Engineering", image: "/engineering.webp" },
  { name: "Marketing", image: "/marketing.webp" },
  { name: "Sales", image: "/sales.webp" },
  { name: "IT", image: "/it.webp" },
  { name: "HR", image: "/marketing.webp" },
  { name: "Operations", image: "/engineering.webp" }
];

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef([]);

  useEffect(() => {
    const activeIndex = tabs.findIndex(tab => tab.name === activeTab.name);
    if (tabRefs.current[activeIndex]) {
      const { offsetLeft, offsetWidth } = tabRefs.current[activeIndex];
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
        height: tabRefs.current[activeIndex].offsetHeight
      });
    }
  }, [activeTab]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex justify-center w-full mt-9 relative">
        <div
          className="absolute top-0 transition-all duration-300 ease-in-out"
          style={{ ...indicatorStyle, backgroundColor: 'white', borderRadius: '9999px' }}
        ></div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={el => tabRefs.current[index] = el}
            className={`px-5 py-2 mx-2 mb-9 rounded-full relative z-10 transition-colors duration-200 ${
              activeTab.name === tab.name
                ? "text-black"
                : "text-white hover:bg-[#282829]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-4 w-full flex justify-center">
        <img src={activeTab.image} alt={activeTab.name} className="max-w-lg max-h-lg object-cover rounded-md" />
      </div>
    </div>
  );
};

export default TabComponent;
