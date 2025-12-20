import chefImg from "../assets/chef.jpg"
import chefImg_1 from "../assets/deliver.jpg"

function Chef() {
    return (
        <div className="flex justify-center gap-6 mb-[5%] max-lg:ml-[2%] max-md:block max-md:ml-[5%] max-md:mt-[12%]">
            {/* Card 1 - Partner with us */}
            <div className="relative max-w-[830px] rounded-xl overflow-hidden font-sans group max-md:mb-[6%] max-md:w-auto">
                <img 
                    src={chefImg} 
                    alt="Chef Partner" 
                    className="w-full h-auto block object-cover max-md:w-[90%]"
                />

                {/* Gradient overlay */}
                <div className="absolute top-0 left-0 w-[70%] h-full bg-gradient-to-r from-[rgba(11,4,49,0.6)] to-transparent pointer-events-none"></div>

                {/* Top tag */}
                <div className="absolute top-3 left-3 bg-white text-black py-1.5 px-3 rounded-md text-sm font-semibold shadow-[0_2px_6px_rgba(0,0,0,0.15)] z-[2]">
                    Earn more with lower fees
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-5 left-5 text-white z-[2]">
                    <p className="m-0 text-sm text-[#ffa733]">
                        Signup as a business
                    </p>
                    <h1 className="my-1.5 mx-0 text-2xl font-bold">
                        Partner with us
                    </h1>
                    <button className="bg-[#ff7b00] text-white py-2.5 px-5 border-none rounded-[25px] text-sm font-bold cursor-pointer transition-all duration-300 hover:bg-[#e66d00] hover:scale-105 transform">
                        Get Started
                    </button>
                </div>
            </div>

            {/* Card 2 - Ride with us */}
            <div className="relative max-w-[830px] rounded-xl overflow-hidden font-sans group max-md:mb-[6%] max-md:w-auto">
                <img 
                    src={chefImg_1} 
                    alt="Delivery Partner" 
                    className="w-full h-auto block object-cover max-md:w-[90%]"
                />

                {/* Gradient overlay */}
                <div className="absolute top-0 left-0 w-[70%] h-full bg-gradient-to-r from-[rgba(11,4,49,0.6)] to-transparent pointer-events-none"></div>

                {/* Top tag */}
                <div className="absolute top-3 left-3 bg-white text-black py-1.5 px-3 rounded-md text-sm font-semibold shadow-[0_2px_6px_rgba(0,0,0,0.15)] z-[2]">
                    Avail exclusive perks
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-5 left-5 text-white z-[2]">
                    <p className="m-0 text-sm text-[#ffa733]">
                        Signup as a rider
                    </p>
                    <h1 className="my-1.5 mx-0 text-2xl font-bold">
                        Ride with us
                    </h1>
                    <button className="bg-[#ff7b00] text-white py-2.5 px-5 border-none rounded-[25px] text-sm font-bold cursor-pointer transition-all duration-300 hover:bg-[#e66d00] hover:scale-105 transform">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chef