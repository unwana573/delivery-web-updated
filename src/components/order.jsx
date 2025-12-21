import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    const slides = [
        { img: order, title: "Burgers & Fast food", subtitle: "21 Restaurants" },
        { img: order_1, title: "Pizza & Italian", subtitle: "15 Restaurants" },
        { img: order_2, title: "Sushi & Japanese", subtitle: "10 Restaurants" },
        { img: order_3, title: "Indian Dishes", subtitle: "12 Restaurants" },
        { img: order_4, title: "Chinese Cuisine", subtitle: "12 Restaurants" },
        { img: order_5, title: "Mexican Food", subtitle: "12 Restaurants" },
        { img: order_6, title: "Thai Cuisine", subtitle: "12 Restaurants" },
        { img: order_7, title: "Mediterranean", subtitle: "12 Restaurants" },
        { img: order_8, title: "Korean Food", subtitle: "12 Restaurants" },
        { img: order_9, title: "Desserts", subtitle: "12 Restaurants" },
    ];

    return (
        <div className="w-full max-w-[1130px] my-[60px] mx-auto md:max-lg:my-10 md:max-lg:mx-10 md:max-lg:w-auto max-md:my-10 max-md:mx-10 max-md:w-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                Order.uk Popular Categories 😍
            </h1>
            
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={6}
                navigation
                pagination={{ clickable: true }}
                loop
                className="!pb-12"
                breakpoints={{
                    300: { slidesPerView: 1 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    900: { slidesPerView: 4 },
                    1280: { slidesPerView: 6 }
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="rounded-xl overflow-hidden bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:-translate-y-1.5 cursor-pointer">
                            <img 
                                src={slide.img} 
                                alt={slide.title} 
                                className="w-full h-[180px] object-cover" 
                            />
                            <div className="p-3 bg-[#f9f9f9]">
                                <h3 className="text-base font-bold m-0 text-[#1a1a1a]">
                                    {slide.title}
                                </h3>
                                <p className="text-sm mt-1.5 mb-0 text-[#f97316]">
                                    {slide.subtitle}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Order