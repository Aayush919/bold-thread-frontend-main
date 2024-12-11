import { useState, useEffect } from "react";
import b1 from '../../../assets/banner/banner1.png'
import b2 from '../../../assets/banner/banner2.png'
import b3 from '../../../assets/banner/banner3.png'


const Crouser = () => {
    const images = [b1, b2, b3]
    // const images = [
    //     "https://img.freepik.com/premium-psd/new-arrival-t-shirt-banner-template_361928-1580.jpg",
    //     "https://media.contra.com/image/upload/aj53mqlr3nih4jnyy5og",
    //     "https://www.vocso.com/blog/wp-content/uploads/2023/02/TheMangaStore-Ecommerce-Case-Study.jpg",
    // ];

    const [currentIndex, setCurrentIndex] = useState(1); // Start from the 1st (real) image
    const [isTransitioning, setIsTransitioning] = useState(false);

    const totalSlides = images.length;

    // Add cloned first and last slides for looping
    const slides = [
        images[images.length - 1], // Clone of last slide
        ...images,
        images[0], // Clone of first slide
    ];

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    });

    const nextSlide = () => {
        if (isTransitioning) return; // Prevent overlapping transitions
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return; // Prevent overlapping transitions
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    // Smooth looping mechanism
    useEffect(() => {
        let timeout;
        if (currentIndex === 0) {
            // Jump to the last real slide
            timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(totalSlides);
            }, 300);
        } else if (currentIndex === totalSlides + 1) {
            // Jump to the first real slide
            timeout = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 300);
        } else {
            timeout = setTimeout(() => setIsTransitioning(false), 300);
        }
        return () => clearTimeout(timeout);
    }, [currentIndex, totalSlides]);

    return (
        <div className="relative w-full max-w-full mx-auto overflow-hidden shadow-lg mt-8">
            {/* Images */}
            <div
                className={`flex transition-transform duration-700 ease-in-out ${isTransitioning ? "" : "transition-none"} aspect-w-20 aspect-h-9"`}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {slides && slides.length > 0 && slides.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full xl:h-[95vh] h-[30vh]'object-cover object-center flex-shrink-0"
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-900"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-900"
            >
                ❯
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index + 1)}
                        className={`w-3 h-3 rounded-full ${currentIndex - 1 === index
                            ? "bg-blue-500"
                            : "bg-gray-300 hover:bg-gray-500"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Crouser;
