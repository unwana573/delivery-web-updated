import React from "react";

function Fig() {
    const stats = [
        { number: "546+", label: "Registered Riders" },
        { number: "789,900+", label: "Orders Delivered" },
        { number: "690+", label: "Restaurants Partnered" },
        { number: "17,457+", label: "Food items" }
    ];

    return (
        <div className="flex justify-center">
            <ul className="flex justify-center text-center bg-orange-500 max-w-[90%] mb-[5%] rounded-xl text-white py-8 px-12 cursor-pointer list-none md:flex-row flex-col w-full md:w-auto">
                {stats.map((stat, index) => (
                    <React.Fragment key={index}>
                        <li className="transition-transform duration-300 hover:scale-110 py-5 md:py-0 px-14">
                            <h1 className="text-3xl md:text-5xl font-bold mb-2">
                                {stat.number}
                            </h1>
                            <p className="text-base md:text-lg font-medium">
                                {stat.label}
                            </p>
                        </li>
                        {index < stats.length - 1 && (
                            <hr className="w-4/5 h-px md:w-px md:h-20 bg-white/30 border-0 self-center my-2 mx-auto md:my-0" />
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
} 

export default Fig;