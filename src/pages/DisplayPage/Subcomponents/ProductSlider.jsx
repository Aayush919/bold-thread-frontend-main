
import { useState } from "react";

const ProductSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNV9waG90b19vZl9hX2NsZWFuX3doaXRlX2ZvbGRlZF9ob29kaWVfbW9ja3VwX19mZDMzYTIxYy1hMTM1LTQwYjUtOGMxOC0wZDdlMmFjZTE0ZGJfMS5qcGc.jpg",
        "https://t4.ftcdn.net/jpg/09/48/84/67/360_F_948846751_uZTVbJm2m3rf7THjEzMG0y8qYQNHoSuM.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230624/fZFl/64968b80eebac147fcf6e418/-473Wx593H-465227249-white-MODEL2.jpg",
        "https://t4.ftcdn.net/jpg/09/48/84/67/360_F_948846751_uZTVbJm2m3rf7THjEzMG0y8qYQNHoSuM.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230624/fZFl/64968b80eebac147fcf6e418/-473Wx593H-465227249-white-MODEL2.jpg",
    ];

    const thumbnails = [
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yNV9waG90b19vZl9hX2NsZWFuX3doaXRlX2ZvbGRlZF9ob29kaWVfbW9ja3VwX19mZDMzYTIxYy1hMTM1LTQwYjUtOGMxOC0wZDdlMmFjZTE0ZGJfMS5qcGc.jpg",
        "https://t4.ftcdn.net/jpg/09/48/84/67/360_F_948846751_uZTVbJm2m3rf7THjEzMG0y8qYQNHoSuM.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230624/fZFl/64968b80eebac147fcf6e418/-473Wx593H-465227249-white-MODEL2.jpg",
        "https://t4.ftcdn.net/jpg/09/48/84/67/360_F_948846751_uZTVbJm2m3rf7THjEzMG0y8qYQNHoSuM.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230624/fZFl/64968b80eebac147fcf6e418/-473Wx593H-465227249-white-MODEL2.jpg",
    ];

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleThumbnailClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="p-1">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="slider-box w-full h-full mx-auto">
                        <div className="relative w-full h-96 overflow-hidden rounded-2xl bg-gray-200">
                            <img
                                src={images[currentSlide]}
                                alt={`Slide ${currentSlide + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <button
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
                                onClick={handlePrev}
                            >
                                &#8592;
                            </button>
                            <button
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
                                onClick={handleNext}
                            >
                                &#8594;
                            </button>
                        </div>

                        <div className="thumbs-slide flex mt-6 gap-4 justify-center flex-wrap">
                            {thumbnails.map((thumbnail, index) => (
                                <img
                                    key={index}
                                    src={thumbnail}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`cursor-pointer w-16 h-16 object-cover rounded-xl transition-all duration-500 ${currentSlide === index ? "ring-4 ring-black" : ""}`}
                                    onClick={() => handleThumbnailClick(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="pro-detail w-full max-w-[608px] lg:pl-8 xl:pl-16 mx-auto mt-8">
                        <div className="flex items-center justify-between gap-6 mb-6">
                            <div className="text">
                                <h2 className="font-manrope font-bold text-3xl text-gray-900 mb-2">Hoodie</h2>
                                <p className="text-base text-gray-500">hoodie unisex</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 mb-8">
                            <div className="flex items-center">
                                <h5 className="font-manrope font-semibold text-2xl text-gray-900">Rs 199.00</h5>
                                <span className="ml-3 font-semibold text-lg text-indigo-600">30% off</span>
                            </div>
                        </div>

                        <p className="font-medium text-lg text-gray-900 mb-2">Color</p>
                        <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm">
                            <div className="color-box group">
                                <div>
                                    <img
                                        src="https://warriorworld.in/cdn/shop/files/2260-black_aa6f1827-3563-40b4-b439-773e5c920f37.jpg?v=1732018851&width=1100"
                                        alt="Black color"
                                        className="border-2 border-gray-100 rounded-xl group-hover:border-indigo-600 object-cover"
                                    />
                                    <p className="text-sm text-gray-400 text-center mt-2 group-hover:text-indigo-600">Black</p>
                                </div>
                            </div>
                            <div className="color-box group">
                                <div>
                                    <img
                                        src="https://warriorworld.in/cdn/shop/files/2246-brown.jpg?v=1732092286&width=1100"
                                        alt="Brown color"
                                        className="border-2 border-gray-100 rounded-xl group-hover:border-indigo-600 object-cover"
                                    />
                                    <p className="text-sm text-gray-400 text-center mt-2 group-hover:text-indigo-600">Brown</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-6">
                            <button type="button" className="w-full text-black border-2 border-black hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:border-gray-700 dark:text-white dark:hover:text-black dark:hover:bg-transparent dark:focus:ring-gray-700">Add To cart</button>
                            <button type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Buy Nowk</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSlider;
