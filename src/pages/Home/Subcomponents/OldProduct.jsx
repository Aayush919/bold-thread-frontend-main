import axios from "axios";
import { useEffect, useState } from "react";
import { urls } from "../../../config/urls";
import { useNavigate } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa6";

const OldProduct = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${urls}/product/tags/lowsell`);
        if (response && response.data) {
          setProducts(response.data.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="overflow-hidden relative w-full py-6">
      <div className="flex items-center space-x-4 animate-marquee">
        {products && products.length > 0 && products?.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer flex-shrink-0 snap-center w-[250px] sm:w-[300px] rounded-md overflow-hidden bg-white shadow-md relative"
          >
            <img
              src={`${urls}/document/variants[0][images][0]-1733507307529-141666883.jpg`}
              alt=""
              className="w-full h-52 object-cover"
            />
            <div className="flex justify-between items-center px-3 mt-3">
              <h2 className="font-semibold text-lg truncate max-w-[75%]">{category?.name}</h2>
              <h2 className="border-2 px-3 p-1 rounded-md border-black flex items-center justify-center">
                <FaRupeeSign className="h-3" />
                {category?.price}
              </h2>
            </div>
            <p className="text-xs px-3 mt-2 text-gray-600 truncate max-w-[75%]">{category?.description}</p>

            {/* Button container with absolute positioning */}
            <div className="relative bottom-2 left-0 right-0 flex items-center gap-5 mt-5 w-full  flex flex-col sm:flex-row items-center  gap-5 w-full px-2">
              <button
                className="text-white text-xs rounded-md p-2 bg-black w-full sm:w-auto"
                onClick={() => navigate(`/display/${category._id}`)}
              >
                Order Now
              </button>
              <button className="p-2 text-xs flex items-center justify-center bg-transparent border rounded-md border-black transition duration-300 w-full sm:w-auto">
                Add to Cart
              </button>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default OldProduct;
