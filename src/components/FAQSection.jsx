import React, { useState } from "react";
import orderImg from "../assets/copy.png";
import trackImg from "../assets/burger.png";
import deliveryImg from "../assets/phone.png";

function FAQSection() {
  const [activeTab, setActiveTab] = useState("faq");
  const [activeQuestion, setActiveQuestion] = useState("how");

  const questions = [
    { id: "how", text: "How does Order.UK work?" },
    { id: "payment", text: "What payment methods are accepted?" },
    { id: "track", text: "Can I track my order in real-time?" },
    { id: "discounts", text: "Are there any special discounts or promotions available?" },
    { id: "area", text: "Is Order.UK available in my area?" }
  ];

  const steps = [
    {
      img: orderImg,
      title: "Place an Order!",
      description: "Place order through our website or Mobile app"
    },
    {
      img: trackImg,
      title: "Track Progress",
      description: "You can track your order status with delivery time"
    },
    {
      img: deliveryImg,
      title: "Get your Order!",
      description: "Receive your order at a lightning fast speed!"
    }
  ];

  return (
    <div className="py-[90px] px-[100px] rounded-xl font-sans max-w-[1150px] justify-center ml-[3%] mb-[5%] bg-[#c2c0c0] max-md:hidden">
      
      {/* Tabs */}
      <div className="flex gap-5 mb-5 justify-center items-center flex-wrap">
        <h2 className="mb-5 text-[22px] font-bold w-full text-center">
          Know more about us!
        </h2>
        
        <button
          className={`bg-transparent border-none text-base cursor-pointer py-1.5 px-2.5 font-medium text-[#444] transition-all duration-300 ${
            activeTab === "faq" 
              ? "border-[3px] border-orange-500 rounded-[25px] text-black font-bold" 
              : "hover:text-orange-500"
          }`}
          onClick={() => setActiveTab("faq")}
        >
          Frequent Questions
        </button>
        
        <button
          className={`bg-transparent border-none text-base cursor-pointer py-1.5 px-2.5 font-medium text-[#444] transition-all duration-300 ${
            activeTab === "who" 
              ? "border-[3px] border-orange-500 rounded-[25px] text-black font-bold" 
              : "hover:text-orange-500"
          }`}
          onClick={() => setActiveTab("who")}
        >
          Who we are?
        </button>
        
        <button
          className={`bg-transparent border-none text-base cursor-pointer py-1.5 px-2.5 font-medium text-[#444] transition-all duration-300 ${
            activeTab === "partner" 
              ? "border-[3px] border-orange-500 rounded-[25px] text-black font-bold" 
              : "hover:text-orange-500"
          }`}
          onClick={() => setActiveTab("partner")}
        >
          Partner Program
        </button>
        
        <button
          className={`bg-transparent border-none text-base cursor-pointer py-1.5 px-2.5 font-medium text-[#444] transition-all duration-300 ${
            activeTab === "help" 
              ? "border-[3px] border-orange-500 rounded-[25px] text-black font-bold" 
              : "hover:text-orange-500"
          }`}
          onClick={() => setActiveTab("help")}
        >
          Help & Support
        </button>
      </div>

      {/* FAQ Content */}
      {activeTab === "faq" && (
        <div className="flex gap-[30px] mb-5">
          
          {/* Left Questions */}
          <div className="flex-1 flex flex-col gap-3">
            {questions.map((question) => (
              <button
                key={question.id}
                onClick={() => setActiveQuestion(question.id)}
                className={`border-none py-2.5 px-4 rounded-[25px] font-bold text-left cursor-pointer transition-all duration-300 ${
                  activeQuestion === question.id
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-transparent text-[#333] text-sm hover:bg-orange-100"
                }`}
              >
                {question.text}
              </button>
            ))}
          </div>

          {/* Right Steps */}
          <div className="flex-[2] flex gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-[#e7e6e6] rounded-xl p-4 text-center flex-1 shadow-[0_3px_6px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <img 
                  src={step.img} 
                  alt={step.title} 
                  className="w-[60px] mb-2.5 mx-auto"
                />
                <h4 className="text-base my-2 font-bold text-gray-800">
                  {step.title}
                </h4>
                <p className="text-[13px] text-[#555] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content for other tabs */}
      {activeTab === "who" && (
        <div className="py-8 px-4 text-center">
          <p className="text-base text-[#555] leading-relaxed">
            Order.UK is your trusted food delivery partner, connecting you with the best restaurants in your area. 
            We're committed to delivering quality food at lightning-fast speeds!
          </p>
        </div>
      )}

      {activeTab === "partner" && (
        <div className="py-8 px-4 text-center">
          <p className="text-base text-[#555] leading-relaxed">
            Join our partner program and grow your business with Order.UK. 
            Reach more customers and enjoy lower commission rates!
          </p>
        </div>
      )}

      {activeTab === "help" && (
        <div className="py-8 px-4 text-center">
          <p className="text-base text-[#555] leading-relaxed">
            Need help? Our support team is available 24/7 to assist you with any questions or concerns. 
            Contact us anytime!
          </p>
        </div>
      )}

      {/* Bottom Description */}
      {activeTab === "faq" && (
        <p className="text-center text-sm text-[#555] mt-2.5 leading-relaxed">
          Order.UK simplifies the food ordering process. Browse through our diverse menu,
          select your favorite dishes, and proceed to checkout. Your delicious meal will
          be on its way to your doorstep in no time!
        </p>
      )}
    </div>
  );
}

export default FAQSection;