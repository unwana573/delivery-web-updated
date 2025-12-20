import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faTableList } from "@fortawesome/free-solid-svg-icons";
import burge from "../assets/burger_2.avif";

function Mac() {
    return (
        <div className="flex justify-center items-center bg-[#e7e6e6] max-w-full h-[450px] rounded-2xl mx-[5%] my-[5%] gap-[5%] px-8 max-md:h-auto max-md:py-10">
            
            <div className="flex-1 max-md:text-center max-md:justify-self-center">
                <div>
                    <p className="text-[15px] text-gray-600 mb-2">
                        I'm lovin' it!
                    </p>
                    <h1 className="text-[45px] font-bold text-gray-800 mb-6 leading-tight max-lg:text-4xl max-md:text-3xl">
                        McDonald's East London
                    </h1>
                    
                    <div className="flex gap-5 flex-wrap max-md:flex-col max-md:items-center max-md:gap-3">
                        <button className="h-[50px] rounded-[25px] bg-[rgb(12,12,54)] text-white px-[30px] text-[15px] font-semibold cursor-pointer transition-all duration-300 hover:bg-[rgb(20,20,70)] hover:scale-105 hover:shadow-lg flex items-center gap-2 whitespace-nowrap">
                            <FontAwesomeIcon icon={faTableList} className="text-lg" />
                            Minimum Order: 12 GBP
                        </button>
                        <button className="h-[50px] rounded-[25px] bg-[rgb(12,12,54)] text-white px-[30px] text-[15px] font-semibold cursor-pointer transition-all duration-300 hover:bg-[rgb(20,20,70)] hover:scale-105 hover:shadow-lg flex items-center gap-2 whitespace-nowrap">
                            <FontAwesomeIcon icon={faTruck} className="text-lg" />
                            Delivery in 20-25 Minutes
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center max-md:hidden">
                <img 
                    src={burge} 
                    alt="McDonald's Burger" 
                    className="rounded-2xl max-w-full h-auto object-cover shadow-xl max-lg:max-w-[300px] transition-transform duration-500 hover:scale-105"
                />
            </div>
        </div>
    );
}

export default Mac