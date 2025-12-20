import React, { useState } from "react";
import burgers from "../testData/burgerData";
import fries from "../testData/friesdata";
import snacks from "../testData/snacksdata";
import salad from "../testData/saladdata";
import cold_drink from "../testData/cold_drink_data";
import dessert from "../testData/dessertdata";

function Offer() {
  const [activeTab, setActiveTab] = useState("offers");

  const tabs = [
    "offers", "Burgers", "Fries", "Snacks",
    "Salad", "Cold", "Desserts", "Hot", "Sauces", "Orbit"
  ];

  const dataMap = {
    Burgers: burgers,
    Fries: fries,
    Snacks: snacks,
    Salad: salad,
    Cold: cold_drink,
    Desserts: dessert,
  };

  return (
    <div className="block w-[90%] mx-auto pt-[30px] mb-12">
      {/* Header Section */}
      <div className="my-5">
        <ul className="flex items-center justify-between gap-[15%] flex-wrap mx-0 my-5 list-none p-0">
          <li>
            <h1 className="text-[1.8rem] text-[#050530] font-bold max-lg:text-[1.6rem]">
              All Offers – McDonald's East London
            </h1>
          </li>
          <li className="max-md:hidden">
            <input 
              type="search" 
              placeholder="Search from menu" 
              className="h-[45px] w-[240px] rounded-[25px] border-[1.5px] border-[#ccc] px-4 text-[15px] font-medium outline-none transition-all duration-300 focus:border-[#fc8a06] focus:shadow-[0_0_5px_rgba(252,138,6,0.5)]"
            />
          </li>
        </ul>
      </div>

      {/* Tabs */}
      <div className="my-[30px]">
        <ul className="flex flex-wrap justify-center gap-5 text-base bg-[#f5f5f5] py-5 px-[30px] rounded-2xl mx-0 my-[30px] list-none max-md:overflow-x-auto max-md:whitespace-nowrap max-md:p-2.5 max-md:rounded-xl max-md:scrollbar-none max-md:[&::-webkit-scrollbar]:hidden max-lg:gap-4 max-lg:text-[0.95rem]">
          {tabs.map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer py-2.5 px-[18px] rounded-[20px] transition-all duration-300 hover:bg-[#f0f0f0] hover:scale-105 ${
                activeTab === tab 
                  ? "bg-[#050530] text-white font-bold shadow-[0_4px_10px_rgba(5,5,48,0.2)]" 
                  : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "Cold" ? "Cold Drinks" : tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Display */}
      <div className="offers-content">
        {activeTab === "offers" ? (
          <div className="text-center mt-[50px] animate-[fadeIn_0.4s_ease-in-out]">
            <h2 className="text-[#050530] mb-2.5 text-2xl font-bold">
              Welcome to McDonald's East London!
            </h2>
            <p className="text-gray-600 text-lg">
              Select a category to view offers.
            </p>
          </div>
        ) : (
          <div className="p-5 animate-[fadeIn_0.4s_ease-in-out]">
            <h1 className="mb-6 text-[#050530] text-3xl font-bold">
              {activeTab === "Cold" ? "Cold Drinks" : activeTab}
            </h1>
            
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 max-md:grid-cols-1">
              {dataMap[activeTab]?.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-5 flex justify-between items-start shadow-[0_4px_10px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_6px_15px_rgba(0,0,0,0.15)] max-md:flex-row max-md:p-4"
                >
                  <div className="burger-info flex-1">
                    <h4 className="text-base mb-2 text-black font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#555] mb-2">
                      {item.description}
                    </p>
                    <p className="mt-2.5 font-bold text-[#050530] text-lg">
                      {item.price}
                    </p>
                  </div>
                  
                  <div className="relative ml-4">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-[110px] rounded-lg max-md:w-[100px]"
                    />
                    <button 
                      className="absolute bottom-1.5 right-1.5 bg-[#fc8a06] text-white border-none rounded-full w-[30px] h-[30px] text-xl cursor-pointer transition-all duration-300 hover:bg-[#e67e22] hover:scale-110 flex items-center justify-center"
                      aria-label={`Add ${item.title} to cart`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(15px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </div>
  );
}

export default Offer;