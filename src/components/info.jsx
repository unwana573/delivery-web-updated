import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";

function Info() {
    const [activeTab, setActiveTab] = useState("delivery");

    const tabData = {
        delivery: {
            icon: faLocationDot,
            title: "Delivery information",
            schedule: [
                { day: "Monday", time: "12:00 AM–3:00 AM, 8:00 AM–3:00 AM" },
                { day: "Tuesday", time: "8:00 AM–3:00 AM" },
                { day: "Wednesday", time: "8:00 AM–3:00 AM" },
                { day: "Thursday", time: "8:00 AM–3:00 AM" },
                { day: "Friday", time: "8:00 AM–3:00 AM" },
                { day: "Saturday", time: "8:00 AM–3:00 AM" },
                { day: "Sunday", time: "8:00 AM–12:00 AM" }
            ],
            footer: "Estimated time until delivery: 20min"
        },
        contact: {
            icon: faListCheck,
            title: "Contact information",
            content: [
                "If you have allergies or other dietary restrictions, please contact the restaurant. The restaurant will provide food-specific information upon request.",
                { label: "Phone number:", value: "+934443-43" },
                { label: "Website:", value: "http://mcdonalds.uk/" }
            ]
        },
        times: {
            icon: faClock,
            title: "Operational Times",
            schedule: [
                { day: "Monday", time: "12:00 AM–3:00 AM" },
                { day: "Tuesday", time: "8:00 AM–3:00 AM" },
                { day: "Wednesday", time: "8:00 AM–3:00 AM" },
                { day: "Thursday", time: "8:00 AM–3:00 AM" },
                { day: "Friday", time: "8:00 AM–3:00 AM" },
                { day: "Saturday", time: "8:00 AM–3:00 AM" },
                { day: "Sunday", time: "8:00 AM–3:00 AM" }
            ]
        }
    };

    return (
        <div className="flex gap-2.5 max-w-[1350px] w-auto mx-[5%] my-[5%] shadow-[0px_4px_12px_rgba(0,0,0,0.2)] max-md:block max-md:text-center max-md:py-[50px] max-md:px-0 max-md:mb-[70px]">
            
            {/* Delivery Tab */}
            <div
                className={`flex-1 py-[60px] px-5 rounded-lg cursor-pointer transition-all duration-300 text-xl ${
                    activeTab === "delivery" 
                        ? "bg-[#0a0a2a] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)]" 
                        : "bg-[#f9f9f9] text-black hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("delivery")}
            >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 max-md:justify-center">
                    <FontAwesomeIcon icon={tabData.delivery.icon} className="text-[#fc8a06]" />
                    {tabData.delivery.title}
                </h3>
                {tabData.delivery.schedule.map((item, index) => (
                    <p key={index} className="text-[17px] font-medium py-1.5">
                        <b>{item.day}:</b> {item.time}
                    </p>
                ))}
                <p className="text-[17px] font-medium py-1.5 mt-3 text-[#fc8a06]">
                    {tabData.delivery.footer}
                </p>
            </div>

            {/* Contact Tab */}
            <div
                className={`flex-1 py-[60px] px-5 rounded-lg cursor-pointer transition-all duration-300 text-xl ${
                    activeTab === "contact" 
                        ? "bg-[#0a0a2a] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)]" 
                        : "bg-[#f9f9f9] text-black hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("contact")}
            >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 max-md:justify-center">
                    <FontAwesomeIcon icon={tabData.contact.icon} className="text-[#fc8a06]" />
                    {tabData.contact.title}
                </h3>
                <p className="text-[17px] font-medium py-1.5 leading-relaxed mb-4">
                    {tabData.contact.content[0]}
                </p>
                <p className="text-[17px] font-medium py-1.5">
                    <b>{tabData.contact.content[1].label}</b> {tabData.contact.content[1].value}
                </p>
                <p className="text-[17px] font-medium py-1.5">
                    <b>{tabData.contact.content[2].label}</b>{" "}
                    <a 
                        href={tabData.contact.content[2].value}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#fc8a06] hover:underline"
                    >
                        {tabData.contact.content[2].value}
                    </a>
                </p>
            </div>

            {/* Operational Times Tab */}
            <div
                className={`flex-1 py-[60px] px-5 rounded-lg cursor-pointer transition-all duration-300 text-xl ${
                    activeTab === "times" 
                        ? "bg-[#0a0a2a] text-white shadow-[0px_4px_12px_rgba(0,0,0,0.2)]" 
                        : "bg-[#f9f9f9] text-black hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("times")}
            >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 max-md:justify-center">
                    <FontAwesomeIcon icon={tabData.times.icon} className="text-[#fc8a06]" />
                    {tabData.times.title}
                </h3>
                {tabData.times.schedule.map((item, index) => (
                    <p key={index} className="text-[17px] font-medium py-1.5">
                        <b>{item.day}:</b> {item.time}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Info;