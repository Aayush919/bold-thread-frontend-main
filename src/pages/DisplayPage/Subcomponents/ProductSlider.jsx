import axios from "axios";
import { useEffect, useState } from "react";
import { imgurl, urls } from "../../../config/urls";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../AuthProvider/AuthProvider";
import { useDispatch } from "react-redux";
import { togglePopup } from "../../../redux/Slices/PopupSlice";
import { useAddToCartMutation } from "../../../redux/Api/Cart";


const ProductSlider = () => {
  const { productId, variantId } = useParams();
  const { user } = useAuth(); // Get current user data from context
  const [addToCart] = useAddToCartMutation(); // Mutation hook from RTK Query
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVariant, setCurrentVariant] = useState();
  const [images, setImages] = useState([]);
  const [size, setSize] = useState(""); // For size selection
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch()


  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  const [products, setProducts] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${urls}/product/product/${productId}`
        );
        if (response && response.data) {

          console.log(response.data.data.data, 'response data')
          setProducts(response.data.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (!currentVariant) {

      setCurrentVariant(variantId)
      setCurrentSlide(0)



    }

    if (products && products.variants.length > 0) {
      const matchingVariant = products.variants.find(
        (variant) => variant._id === currentVariant
      );

      setImages(matchingVariant ? matchingVariant.images : []);
    }
  }, [currentVariant, products, variantId]);


  const handleVariantChange = (id) => {
    setCurrentVariant(id);
    setCurrentSlide(0)
  }




  const OrderHandler = () => {
    navigate(`/checkout/${productId}/${currentVariant}`, {
      state: { size, price: products?.price, quantity },
    });
  };


  const handleAddToCart = async () => {
    console.log(user, 'user is here already')
    if (!user) {
      dispatch(togglePopup())
      return; // Optionally show a login prompt or redirect
    }

    if (!products) {
      console.log('error to fetch product name')
      return
    }



    try {
      // Call the addToCart mutation with userId and productId
      const response = await addToCart({ productId: products._id, }).unwrap();
      console.log("Product added to cart successfully", response);
    } catch (error) {
      console.error("Error adding product to cart", error);
    }
  };




  const clothingDetails = {

    neckStyle: "Round Neck",
    pattern: "Solid",
    length: "Crop",
    printPatternType: "Plain",
    hood: "No Hood",
    occasion: "Casual",
  };


  return (
    <section className="p-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="slider-box w-full h-full mx-auto">
            <div className="relative w-full h-96 overflow-hidden rounded-2xl bg-gray-200">
              <img
                src={`${imgurl}/variants[0][images][0]-1733507307529-141666883.jpg`}
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

            {/* <div className="thumbs-slide flex mt-6 gap-4 justify-center flex-wrap">
              {images?.map((thumbnail, index) => (
                <img
                  key={index}
                  src={`${imgurl}/variants[0][images][0]-1733507307529-141666883.jpg`}
                  alt={`Thumbnail ${index + 1}`}
                  className={`cursor-pointer w-16 h-16 object-cover rounded-xl transition-all duration-500 ${currentSlide === index ? "ring-4 ring-black" : ""
                    }`}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </div> */}
          </div>

          <div className="pro-detail w-full max-w-[608px] lg:pl-8 xl:pl-16 mx-auto mt-8">
            <div className="flex items-center justify-between gap-6 mb-6">
              <div className="text">
                <h2 className="font-manrope font-bold text-3xl text-gray-900 mb-2">
                  {products?.name}
                </h2>
                <p className="text-base text-gray-500">{products?.description}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center">
                <h5 className="font-manrope font-semibold text-2xl text-gray-900">
                  <span className={`line-through ${products?.discount > 0 ? 'text-gray-500' : ''}`}>
                    Rs {products?.price || "0.00"}
                  </span>
                </h5>
                <span className="ml-3 font-semibold text-lg text-indigo-600">
                  {products?.discount > 0 ? `${products.discount}% off` : ""}
                </span>
              </div>
              <div className="text-gray-600">
                <p>Final Price:{products?.finalPrice}</p>
              </div>
            </div>

            {products && products.variants.length > 0 && <p className="font-medium text-lg text-gray-900 mb-2">Color</p>}
            <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm">
              {products && products.variants.length > 0 &&
                products.variants.map((variant, index) => (
                  <div key={variant._id} className="color-box group" onClick={() => handleVariantChange(variant._id)}>
                    <div>

                      <img
                        src={`${imgurl}/variants[0][images][0]-1733507307529-141666883.jpg`}
                        alt={variant.color}
                        className="border-2 border-gray-100 rounded-xl group-hover:border-black object-cover"
                      />
                      <p className="text-sm text-gray-400 text-center mt-2 group-hover:text-black">
                        {variant.color}
                      </p>
                    </div>
                  </div>
                ))}
            </div>


            <div className="grid grid-cols-3 gap-3 mb-6">
              {["S", "M", "L", "XL", "XXL"].map((sizeOption) => (
                <div
                  key={sizeOption}
                  className={`size-box w-100px py-1 border-2 rounded-lg cursor-pointer ${size === sizeOption ? "bg-indigo-600 text-white" : "bg-white"
                    }`}
                  onClick={() => setSize(sizeOption)}
                >
                  <p className="text-center">{sizeOption}</p>
                </div>
              ))}
            </div>


            <div className="flex items-center gap-4 mb-6">
              <button
                className="text-xl text-gray-700"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                className="text-xl text-gray-700"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>



            <div className="flex gap-4 mt-6">
              <button

                type="button"
                className="w-full text-black border-2 border-black hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:border-gray-700 dark:text-white dark:hover:text-black dark:hover:bg-transparent dark:focus:ring-gray-700"
              >
                Add To cart
              </button>
              <button
                type="button"
                className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={() => OrderHandler()}
              >
                Buy Now
              </button>

            </div>

            <p className="text-gray-600 mb-6">Deliver in 7 days | Cash on Delivery Available | In stock</p>

            {/* Seller Info */}
            <p className="font-bold text-lg text-gray-900 mb-6">Seller: Bold-Thread</p>
            <ul className="text-gray-600 mt-4">
              <li>Sleeve Length: {clothingDetails.sleeveLength || "Long Sleeves"}</li>
              <li>Neck Style: {clothingDetails.neckStyle || "Hood"}</li>
              <li>Pattern: {clothingDetails.pattern || "Printed"}</li>
              <li>Length: {clothingDetails.length || "Regular"}</li>
              <li>Type: {clothingDetails.type || "Pullover"}</li>
              <li>Print or Pattern Type: {clothingDetails.printPatternType || "Typography"}</li>
              <li>Hood: {clothingDetails.hood || "Hooded"}</li>
              <li>Occasion: {clothingDetails.occasion || "Casual"}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
