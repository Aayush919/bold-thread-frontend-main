import axios from "axios";
import { useEffect, useState } from "react";
// import { CiStar } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { urls } from "../../config/urls";
import { FaRupeeSign } from "react-icons/fa";

export default function BottomWear() {
  const [sortBy, setSortBy] = useState("newest");
  const [filter, setFilter] = useState("all");

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
    window.scrollTo(0, 0); // Scroll to the top-left corner
  }, []);

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
    <div className="xl:ml-0 ml-[-32px] p-10  xl:p-0">
      <div className="py-8 ">
        <h1 className="text-3xl font-bold mb-8 text-center">Bottom Wear</h1>

        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 ml-3">
            <div className="flex items-center">
              <FaChevronDown className="mr-2" />
              <span className="mr-2">Sort by:</span>
              <select
                className="p-2 border rounded"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Filter:</span>
              <select
                className="p-2 border rounded"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Products</option>
                <option value="jeans">Jeans</option>
                <option value="tshirt">T-Shirts</option>
              </select>
            </div>
          </div>
        </div>

        <div
                className="mb-16 grid gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-10 px-2"
            >
                {products && products.length > 0 && products.map((category, index) => (
                    <div
                        key={index}
                        className="my-4 cursor-pointer flex-shrink-0 snap-center w-full max-w-sm mx-auto rounded-md overflow-hidden h-[335px] sm:h-[320px] md:h-[400px] lg:h-[420px] bg-white shadow-md"
                    >
                        <img src={`${urls}/document/variants[0][images][0]-1733507307529-141666883.jpg`} alt="" className='w-full h-52 object-cover' />
                        <div className='flex justify-between items-center px-3 mt-3'>
                            <h2 className='font-semibold text-lg truncate max-w-[75%]'>{category.name}</h2>
                            <h2 className='border-2 px-3 p-1 rounded-md border-black flex items-center justify-center '>
                                < FaRupeeSign className="h-3" />
                                {category.price}</h2>
                        </div>
                        <p className='text-xs px-3 mt-2 text-gray-600 truncate max-w-[75%]'>{category.description}</p>
                        <button className='text-white ml-3 text-xs rounded-md p-2 mt-4 bg-black' onClick={() => navigate(`/display/${category._id}`)}>
                            Order Now
                        </button>
                    </div>
                ))}
            </div>
      </div>

    </div>
  );
}
