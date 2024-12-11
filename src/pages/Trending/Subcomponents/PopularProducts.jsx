import axios from "axios";
import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { urls } from "../../../config/urls";
import { FaRupeeSign } from "react-icons/fa";

function PopularProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  //   const sortedAndFilteredProducts = [products]
  //     .filter((product) => filter === "all" || product.category === filter)
  //     .sort((a, b) => {
  //       if (sortBy === "price-low-high") return a.price - b.price;
  //       if (sortBy === "price-high-low") return b.price - a.price;
  //       if (sortBy === "rating") return b.rating - a.rating;
  //       return 0;
  //     });

  useEffect(() => {
    const fetchProducts = async () => {
      // setLoading(true);
      try {
        // Tumhare backend ke API endpoint ko call karo
        const response = await axios.get(`${urls}/product/tags/Trending`);
        setProducts(response.data.data.data);
        // setProducts(response.data.data); // Response mein data access karo
      } catch (err) {
        console.log(err);
        // setError(err.message || "Error fetching products.");
      }
      // finally {
      //     // setLoading(false);
      // }
    };

    fetchProducts();
  }, []);
  return (
    <div className="p-2">
    
    
      <h2 className="text-2xl font-bold text-center m-6">Popular Products</h2>
    <div className=" mb-16 grid gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-10 px-2">

      {products &&
        products.length > 0 &&
        products.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer flex-shrink-0 snap-center w-full max-w-sm mx-auto rounded-md overflow-hidden h-[335px] sm:h-[320px] md:h-[400px] lg:h-[420px] bg-white shadow-md my-4"
          >
            <img
              src={`${urls}/document/variants[0][images][0]-1733507307529-141666883.jpg`}
              alt=""
              className="w-full h-52 object-cover"
            />
            <div className="flex justify-between items-center px-3 mt-3">
              <h2 className="font-semibold text-lg truncate max-w-[75%]">
                {category.name}
              </h2>
              <h2 className="border-2 px-3 p-1 rounded-md border-black flex items-center justify-center ">
                <FaRupeeSign className="h-3" />
                {category.price}
              </h2>
            </div>
            <p className="text-xs px-3 mt-2 text-gray-600 truncate max-w-[75%]">
              {category.description}
            </p>
            <button
              className="text-white ml-3 text-xs rounded-md p-2 mt-4 bg-black"
              onClick={() => navigate(`/display/${category._id}`)}
            >
              Order Now
            </button>
          </div>
        ))}
    </div>
    </div>
  );
}

export default PopularProducts;
