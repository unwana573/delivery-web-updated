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
            <ul className="flex justify-center text-center justify-around bg-[#FC8A06] max-w-[90%] mb-[5%] rounded-xl text-white py-[30px] px-50 cursor-pointer list-none max-md:block max-md:w-full">
                {stats.map((stat, index) => (
                    <React.Fragment key={index}>
                        <li className="transition-transform duration-300 hover:scale-110 max-md:py-5 max-md:text-lg px-14">
                            <h1 className="text-4xl md:text-5xl font-bold mb-2 max-md:text-3xl">
                                {stat.number}
                            </h1>
                            <p className="text-base md:text-lg font-medium max-md:text-lg max-md:block">
                                {stat.label}
                            </p>
                        </li>
                        {index < stats.length - 1 && (
                            <hr className="w-px h-20 bg-white/30 border-0 self-center max-md:w-4/5 max-md:h-px max-md:my-2 max-md:mx-auto" />
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
} 

export default Fig