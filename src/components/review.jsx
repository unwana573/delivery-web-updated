import React, { useRef } from 'react';
import man from "../assets/man.jpg"
import man_1 from "../assets/man_1.jpg"
import woman from "../assets/woman.jpg"
import woman_1 from "../assets/woman_1.jpg"

const Review = () => {
    // --- Data and State ---
    const reviewsGridRef = useRef(null);
    
    const overallRating = 3.4;
    const totalReviews = 1360;

    const DUMMY_REVIEWS = [
        {
            id: 1,
            name: 'Alex J.',
            location: 'South London',
            rating: 5,
            date: '24th September, 2023',
            text: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
            avatarUrl: man
        },
        {
            id: 2,
            name: 'Sarah K.',
            location: 'North London',
            rating: 4,
            date: '24th September, 2023',
            text: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
            avatarUrl: man_1
        },
        {
            id: 3,
            name: 'Michael B.',
            location: 'West London',
            rating: 5,
            date: '24th September, 2023',
            text: 'The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald\'s standard – hot and satisfying.',
            avatarUrl: woman
        },
        {
            id: 4,
            name: 'Lola M.',
            location: 'East London',
            rating: 4.5,
            date: '25th September, 2023',
            text: 'Quick service, but the drink order was slightly wrong. The burger was perfectly hot, though! Great for a fast lunch stop.',
            avatarUrl: woman_1
        },
        {
            id: 5,
            name: 'Raj K.',
            location: 'Central London',
            rating: 3,
            date: '26th September, 2023',
            text: 'The atmosphere was busy, and it took a while to get the food, but the staff handled the rush well. Standard quality food.',
            avatarUrl: man
        },
    ];

    // --- Logic ---
    const handleScroll = (direction) => {
        if (reviewsGridRef.current) {
            const scrollContainer = reviewsGridRef.current;
            const firstCard = scrollContainer.firstChild;
            
            const scrollAmount = firstCard 
                ? firstCard.offsetWidth + 24 
                : 350; 
            
            if (direction === 'prev') {
                scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };
    
    // --- Nested Components ---
    
    /** Renders the star rating display. */
    const StarRating = ({ rating }) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rating);
    
        const starIcon = (fill) => (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill={fill} 
                stroke="currentColor" 
                strokeWidth="1.5" 
                className="w-4 h-4 text-amber-400"
            >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.27 3.25L6.9 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        );
    
        const halfStarIcon = () => (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none"
                stroke="currentColor" 
                strokeWidth="1.5" 
                className="w-4 h-4 text-amber-400"
            >
                <defs>
                    <linearGradient id="half">
                        <stop offset="50%" stopColor="#fbbf24" />
                        <stop offset="50%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                <path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.27 3.25L6.9 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        );
    
        return (
            <div className="flex gap-0.5">
                {[...Array(fullStars)].map((_, i) => <React.Fragment key={`full-${i}`}>{starIcon("currentColor")}</React.Fragment>)}
                {hasHalfStar && halfStarIcon()}
                {[...Array(emptyStars)].map((_, i) => <React.Fragment key={`empty-${i}`}>{starIcon("transparent")}</React.Fragment>)}
            </div>
        );
    };

    /** Component for a single customer review card. */
    const ReviewCard = ({ review }) => {
        return (
            <div className="bg-white p-6 rounded-xl shadow-lg flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                            <img 
                                src={review.avatarUrl} 
                                alt={`${review.name}'s avatar`}
                                className="w-full h-full object-cover"
                                onError={(e) => { 
                                    e.target.onerror = null; 
                                    e.target.src = `https://placehold.co/150x150/000000/ffffff?text=${review.name.substring(0, 1)}` 
                                }}
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">{review.name}</p>
                            <p className="text-sm text-gray-500">{review.location}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <StarRating rating={review.rating} />
                        <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                    {review.text}
                </p>
            </div>
        );
    };

    /** Navigation Arrow Button */
    const NavArrow = ({ direction, onClick }) => (
        <button 
            onClick={onClick}
            className="w-12 h-12 rounded-full bg-orange-500 shadow-md text-white flex items-center justify-center transition-all duration-300 hover:bg-orange-600 active:scale-95 border-none cursor-pointer"
            aria-label={direction === 'left' ? "Previous Review" : "Next Review"}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-6 h-6"
            >
                {direction === 'left' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                )}
            </svg>
        </button>
    );

    // --- Main Return ---
    return (
        <div className="min-h-[70vh] py-5 px-2.5 my-[90px] flex justify-center items-start font-['Inter',sans-serif] bg-gray-100 sm:py-8 sm:px-8">
            <div className="w-full max-w-[1280px]">
                
                {/* Reviews Header and Navigation */}
                <div className="flex justify-between items-center mb-10 px-0 lg:px-0 px-4">
                    <h2 className="text-3xl font-extrabold text-gray-800">
                        Customer Reviews
                    </h2>
                    <div className="flex gap-4">
                        <NavArrow direction="left" onClick={() => handleScroll('prev')} />
                        <NavArrow direction="right" onClick={() => handleScroll('next')} />
                    </div>
                </div>

                {/* Reviews Grid/Slider */}
                <div 
                    className="flex flex-nowrap gap-6 justify-start overflow-x-scroll scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    ref={reviewsGridRef}
                >
                    {DUMMY_REVIEWS.map(review => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>

                {/* Overall Rating Summary */}
                <div className="mt-16 flex justify-center">
                    <div className="text-center">
                        <p className="text-7xl font-bold text-gray-800">
                            {overallRating.toFixed(1)}
                        </p>
                        <div className="flex justify-center mt-2 mb-1">
                            <StarRating rating={overallRating} />
                        </div>
                        <p className="text-sm text-gray-500">
                            {totalReviews.toLocaleString()} reviews
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;