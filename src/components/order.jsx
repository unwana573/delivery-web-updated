import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Star, Clock, MapPin } from "lucide-react";
import order from "../assets/order.avif"
import order_1 from "../assets/order_1.avif"
import order_2 from "../assets/order_2.avif"
import order_3 from "../assets/order_3.avif"
import order_4 from "../assets/order_4.avif"
import order_5 from "../assets/order_5.avif"
import order_6 from "../assets/order_6.avif"
import order_7 from "../assets/order_11.webp"
import order_8 from "../assets/order_8.avif"
import order_9 from "../assets/order_10.webp"

function Order() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        { 
            img: order, 
            title: "Burgers & Fast Food", 
            subtitle: "21 Restaurants",
            deliveryTime: "20-30 min",
            rating: 4.8,
            reviews: 2453
        },
        { 
            img: order_1, 
            title: "Pizza & Italian", 
            subtitle: "15 Restaurants",
            deliveryTime: "25-35 min",
            rating: 4.9,
            reviews: 3421
        },
        { 
            img: order_2, 
            title: "Sushi & Japanese", 
            subtitle: "10 Restaurants",
            deliveryTime: "30-40 min",
            rating: 4.7,
            reviews: 1876
        },
        { 
            img: order_3, 
            title: "Indian Dishes", 
            subtitle: "12 Restaurants",
            deliveryTime: "25-35 min",
            rating: 4.6,
            reviews: 2134
        },
        { 
            img: order_4, 
            title: "Chinese Cuisine", 
            subtitle: "12 Restaurants",
            deliveryTime: "20-30 min",
            rating: 4.5,
            reviews: 1654
        },
        { 
            img: order_5, 
            title: "Mexican Food", 
            subtitle: "12 Restaurants",
            deliveryTime: "25-35 min",
            rating: 4.7,
            reviews: 1943
        },
        { 
            img: order_6, 
            title: "Thai Cuisine", 
            subtitle: "12 Restaurants",
            deliveryTime: "30-40 min",
            rating: 4.6,
            reviews: 1567
        },
        { 
            img: order_7, 
            title: "Mediterranean", 
            subtitle: "12 Restaurants",
            deliveryTime: "25-35 min",
            rating: 4.8,
            reviews: 2098
        },
        { 
            img: order_8, 
            title: "Korean Food", 
            subtitle: "12 Restaurants",
            deliveryTime: "30-40 min",
            rating: 4.9,
            reviews: 2765
        },
        { 
            img: order_9, 
            title: "Desserts", 
            subtitle: "12 Restaurants",
            deliveryTime: "15-25 min",
            rating: 4.7,
            reviews: 3012
        },
    ];

    return (
        <div className="w-full py-20 px-4 bg-white">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <p className="text-[#FC8A06] font-semibold text-sm uppercase tracking-wider mb-3">
                            Browse by Category
                        </p>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                            Popular Food Categories
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Discover curated selections from top-rated restaurants in your area
                        </p>
                    </div>

                    {/* Navigation & Stats */}
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gray-50 rounded-full border border-gray-200">
                            <span className="text-sm text-gray-600 font-medium">
                                {activeIndex + 1}
                            </span>
                            <span className="text-gray-400">/</span>
                            <span className="text-sm text-gray-400 font-medium">
                                {slides.length}
                            </span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <button className="custom-prev w-11 h-11 rounded-full bg-gray-100 hover:bg-[#FC8A06] flex items-center justify-center transition-all duration-300 group border border-gray-200 hover:border-[#FC8A06]">
                                <ChevronLeft size={20} className="text-gray-700 group-hover:text-white transition-colors" />
                            </button>
                            <button className="custom-next w-11 h-11 rounded-full bg-gray-100 hover:bg-[#FC8A06] flex items-center justify-center transition-all duration-300 group border border-gray-200 hover:border-[#FC8A06]">
                                <ChevronRight size={20} className="text-gray-700 group-hover:text-white transition-colors" />
                            </button>
                        </div>

                        <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 group">
                            View All
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={4}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }}
                    pagination={{ 
                        clickable: true,
                        dynamicBullets: true
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    loop={true}
                    className="!pb-16"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 16 },
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                        1280: { slidesPerView: 4, spaceBetween: 24 }
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-[#FC8A06] transition-all duration-500 cursor-pointer hover:shadow-xl">
                                {/* Image Container */}
                                <div className="relative h-[240px] overflow-hidden bg-gray-100">
                                    <img 
                                        src={slide.img} 
                                        alt={slide.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                                    />
                                    
                                    {/* Subtle Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
                                    
                                    {/* Delivery Time Badge */}
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                                        <Clock size={14} className="text-gray-600" />
                                        <span className="text-xs font-semibold text-gray-800">{slide.deliveryTime}</span>
                                    </div>

                                    {/* Rating Badge */}
                                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                                        <Star size={14} className="fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm font-bold text-gray-800">{slide.rating}</span>
                                        <span className="text-xs text-gray-500">({slide.reviews})</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-[#FC8A06] transition-colors duration-300">
                                        {slide.title}
                                    </h3>
                                    
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-1.5 text-gray-500">
                                            <MapPin size={14} />
                                            <span className="font-medium">{slide.subtitle}</span>
                                        </div>
                                        
                                        <button className="opacity-0 group-hover:opacity-100 text-[#FC8A06] font-semibold text-sm transition-opacity duration-300 flex items-center gap-1">
                                            Browse
                                            <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>

                                {/* Hover Border Effect */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FC8A06] rounded-2xl transition-all duration-300 pointer-events-none"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-gray-200">
                    <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 bg-[#FC8A06]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FC8A06] transition-colors duration-300">
                            <Clock size={24} className="text-[#FC8A06] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Get your food delivered within 30 minutes or less, guaranteed fresh and hot
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                            <Star size={24} className="text-blue-500 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Top Quality</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Curated restaurants with verified reviews and premium ingredients
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                        <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500 transition-colors duration-300">
                            <MapPin size={24} className="text-green-500 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Wide Coverage</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Delivering to multiple locations with real-time order tracking
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order