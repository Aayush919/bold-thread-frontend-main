import { CiShoppingCart } from "react-icons/ci";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { urls } from "../../../config/urls";

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState([]);
  const [product, setProduct] = useState(null);
  let navigate = useNavigate();
  const { productId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${urls}/product/product/${productId}`);
        setProduct(response.data.data.data);
        setVariant(response.data.data.data.variants);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [productId]);

  return (
    <div className="w-full h-full mt-10 sm:mt-20 px-4 sm:px-8 lg:px-16 xl:px-32 mb-10">
      <div key={product && product._id} className="flex flex-col lg:flex-row justify-center mx-auto pb-10 lg:gap-8">

        {/* Image Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-5 mb-6 lg:mb-0">
          {/* Thumbnail Images */}
          <div className="grid grid-cols-3 gap-3 sm:w-28 lg:w-28">
            {variant.length > 0 && variant[0]?.images?.map((imgSrc, index) => (
              <img
                key={index}
                className="w-full h-full mt-3 cursor-pointer object-contain"
                src={`${urls}/document/${imgSrc}`}
              />
            ))}
          </div>

          {/* Main Product Image */}
          <div className="w-full sm:w-1/2 lg:w-[300px] xl:w-[400px] relative overflow-hidden bg-cover">
            <img
              src={`${urls}/document/${variant[0]?.images[0]}`}
              alt={product?.name}
              className="w-full h-full object-contain" // Ensures the image is contained within the box
            />
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-0 xl:mt-0 mt-10">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">{product && product.name}</h1>

          {/* Rating Section */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-gray-600">(42 reviews)</span>
          </div>

          {/* Price Section */}
          <p className="text-xl sm:text-2xl font-semibold mb-4">{product && product.price}</p>

          {/* Description */}
          <p className="text-gray-600 mb-6">{product && product.description}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <label htmlFor="size-select" className="block text-sm font-medium text-gray-700 mb-2">Size</label>
            <select
              id="size-select"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select a size</option>
              <option value="s">Small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
              <option value="xl">X-Large</option>
            </select>
          </div>

          {/* Quantity Selection */}
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Action Buttons */}
          <button
            className="w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            <CiShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </button>

          <button
            onClick={() => navigate(`/checkout/${product._id}/${variant[0]._id}`)}
            className="mt-10 w-full flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
