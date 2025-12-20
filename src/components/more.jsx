import couple from "../assets/efhwveui-removebg-preview.png"
import apple from "../assets/applestore.png"
import google from "../assets/playstore.png"

function More() {
    return (
        <div className="flex justify-center items-center bg-[#e7e6e6] max-w-[89%] my-[50px] mx-auto py-[50px] px-5 rounded-2xl gap-10 max-lg:max-w-[95%] max-lg:py-10 max-lg:px-4 max-lg:gap-5 max-md:flex-col max-md:max-w-[95%] max-md:my-[30px] max-md:py-[30px] max-md:px-2.5">
            
            <div className="more-1">
                <img 
                    src={couple} 
                    alt="Couple using app" 
                    className="h-[350px] max-w-full object-contain max-lg:h-[300px] max-md:h-[250px] max-md:mb-2.5"
                />
            </div>

            <div className="text-left max-w-[450px] max-md:text-center max-md:max-w-full max-md:px-2.5">
                <h1 className="text-[50px] font-bold text-[rgb(5,5,48)] mb-1.5 max-lg:text-[40px] max-md:text-[32px]">
                    Ordering is more
                </h1>
                
                <h2 className="text-[#e7e6e6] bg-[rgb(5,5,48)] w-fit text-[40px] rounded-[25px] text-center py-2.5 px-6 mb-5 max-lg:text-[30px] max-lg:py-2 max-lg:px-5 max-md:text-2xl max-md:mx-auto max-md:py-1.5 max-md:px-4">
                    <span className="text-[#FC8A06]">Personalised</span> & instant
                </h2>
                
                <p className="text-[15px] mb-6 max-md:text-center">
                    Download the order.uk app for faster ordering
                </p>
                
                <ul className="flex gap-4 items-center pl-0 list-none max-md:justify-center">
                    <li>
                        <img 
                            src={apple} 
                            alt="Download on App Store" 
                            className="h-[45px] cursor-pointer transition-transform duration-300 hover:scale-105"
                        />
                    </li>
                    <li>
                        <img 
                            src={google} 
                            alt="Get it on Google Play" 
                            className="h-[45px] cursor-pointer transition-transform duration-300 hover:scale-105"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default More