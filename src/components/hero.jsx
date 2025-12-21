import pizza from "../assets/hero_1-removebg-preview.png";
import she from "../assets/hero.png";
import hero_img from "../assets/Logo.png";

function Hero() {
    return (
        <>
        <div className="ml-15 relative flex flex-row items-center bg-[#e7e6e6] mt-[50px] mx-5 h-[450px] w-[90%] rounded-2xl justify-between self-center p-5 max-md:max-w-[700px] max-md:w-auto max-md:mr-5 md:max-lg:min-w-[730px] md:max-lg:w-auto md:max-lg:self-center overflow-hidden">
            
            <div className="absolute w-[339px] h-[396px] right-0 top-65 -translate-y-1/2 bg-[#FC8A06] rounded-tl-[150px] rounded-br-2xl max-lg:hidden z-0">
                <h1 className="mt-[15%]"></h1>
                <li className="bg-white w-[220px] mt-4 ml-[15%] pl-4 pt-1.5 pb-1.5 rounded-2xl list-none">  
                    <img src={hero_img} alt="" className="h-[25px]" />
                    <h6 className="text-[0.8rem] font-semibold">We've Received your order</h6>
                    <p className="text-xs font-extralight">Awaiting Restaurant acceptance</p>
                </li>
                <li className="bg-white w-[220px] mt-4 ml-[35%] pl-4 pt-1.5 pb-1.5 rounded-2xl list-none">
                    <img src={hero_img} alt="" className="h-[25px]" />
                    <h6 className="text-[0.8rem] font-semibold">Order Accepted</h6>
                    <p className="text-xs font-extralight">Your order will be delivered shortly</p>
                </li>
                <li className="bg-white w-[220px] mt-4 ml-[25%] pl-4 pt-1.5 pb-1.5 rounded-2xl list-none">
                    <img src={hero_img} alt="" className="h-[25px]" />
                    <h6 className="text-[0.8rem] font-semibold">Your rider's nearby</h6>
                    <p className="text-xs font-extralight">They're almost there-get ready!</p>
                </li>
            </div>

            <div className="pl-8 max-md:justify-center max-md:text-center relative z-100">
                <h5 className="text-lg">Order Restaurant food, takeaway and groceries.</h5>
                <h1 className="pt-2.5 pb-5 text-4xl font-bold">
                    Feast Your Senses, <br /> 
                    <span className="text-[#FC8A06]">Fast and Fresh</span>
                </h1>
                <form>
                    <p className="mb-3 text-sm">Enter a postcode to see what we deliver</p>
                    <div className="subscribe-box">
                        <div className="flex items-center border border-[#ddd] rounded-[25px] overflow-hidden bg-white">
                            <input 
                                type="email" 
                                placeholder="youremail@gmail.com" 
                                required 
                                className="flex-1 p-3 border-none outline-none text-sm"
                            />
                            <button 
                                type="submit"
                                className="bg-[#f7931e] border-none py-3 px-5 text-white cursor-pointer font-bold transition-colors duration-300 hover:bg-[#e67e22]"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="relative max-md:hidden z-10">
                <img 
                    className="h-80 absolute right-[330px] z-[2] top-[90px] rounded-2xl" 
                    src={she} 
                    alt="hero-img" 
                />
                <img 
                    className="z-[2] h-[380px] relative right-[400px] top-[58px]" 
                    src={pizza}  
                    alt="hero-img" 
                />
            </div>

        </div>
        </>
    );
}

export default Hero;