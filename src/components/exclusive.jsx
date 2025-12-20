import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import slider from "../assets/slider_11.jpg"
import slider_1 from "../assets/slider_1.avif"
import slider_2 from "../assets/slider_2.avif"
import slider_3 from "../assets/slider_3.avif"
import slider_4 from "../assets/slider_4.avif"
import slider_5 from "../assets/slider_5.avif"
import slider_6 from "../assets/slider_6.avif"
import slider_7 from "../assets/slider_7.avif"
import slider_8 from "../assets/slider_8.avif"
import slider_9 from "../assets/slider_9.avif"
import slider_10 from "../assets/slider_10.webp"

function Exclusive() {
    const [activeCategory, setActiveCategory] = useState("all");

    const categories = [
        { id: "all", label: "All" },
        { id: "vegan", label: "Vegan" },
        { id: "sushi", label: "Sushi" },
        { id: "pizza", label: "Pizza & Fast food" },
        { id: "others", label: "Others" }
    ];

    const slides = [
        { img: slider, alt: "Restaurant", category: "pizza" },
        { img: slider_1, alt: "Chef Burgers", category: "pizza" },
        { img: slider_2, alt: "London", category: "sushi" },
        { img: slider_3, alt: "Extra Slide", category: "vegan" },
        { img: slider_4, alt: "Extra Slide", category: "pizza" },
        { img: slider_5, alt: "Extra Slide", category: "sushi" },
        { img: slider_6, alt: "Extra Slide", category: "vegan" },
        { img: slider_7, alt: "Extra Slide", category: "others" },
        { img: slider_8, alt: "Extra Slide", category: "pizza" },
        { img: slider_9, alt: "Extra Slide", category: "sushi" },
        { img: slider_10, alt: "Extra Slide", category: "others" },
    ];

    const filteredSlides = activeCategory === "all" 
        ? slides 
        : slides.filter(slide => slide.category === activeCategory);

    return (
        <div className="w-full py-8 px-4 md:px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-12 bg-gradient-to-b from-[#FC8A06] to-[#f7931e] rounded-full"></div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Up to 40% Off 🎊
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 mt-1">
                            Order.uk exclusive deals
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                                activeCategory === category.id
                                    ? "bg-[#FC8A06] text-white shadow-lg shadow-orange-300"
                                    : "bg-white text-gray-700 hover:bg-orange-50 border border-gray-200"
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-[1400px] mx-auto">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={3}
                    navigation
                    pagination={{ 
                        clickable: true,
                        dynamicBullets: true 
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="rounded-2xl p-4 !pb-14"
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 16 },
                        640: { slidesPerView: 1.5, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 2.5, spaceBetween: 24 },
                        1280: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                >
                    {filteredSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
                                <img 
                                    src={slide.img} 
                                    alt={slide.alt} 
                                    className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
                                />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="absolute top-4 right-4 bg-[#FC8A06] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                    -40% OFF
                                </div>

                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                                    {slide.category}
                                </div>
                                
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform transition-transform duration-500 group-hover:translate-y-0">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 bg-[#FC8A06] rounded-full animate-pulse"></div>
                                        <span className="text-orange-300 text-sm font-medium uppercase tracking-wider">
                                            Restaurant
                                        </span>
                                    </div>
                                    <h3 className="text-white text-xl md:text-2xl font-bold mb-2 group-hover:text-[#FC8A06] transition-colors duration-300">
                                        Chef Burgers London
                                    </h3>
                                    <div className="flex items-center gap-4 text-white/80 text-sm">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            4.5
                                        </span>
                                        <span>•</span>
                                        <span>20-30 min</span>
                                        <span>•</span>
                                        <span>$$</span>
                                    </div>
                                    
                                    <button className="mt-4 w-full bg-[#FC8A06] text-white py-2.5 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#e67e22]">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex justify-center mt-8">
                <button className="px-8 py-3 bg-gradient-to-r from-[#FC8A06] to-[#f7931e] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    View All Restaurants
                </button>
            </div>
        </div>
    );
}

export default Exclusive