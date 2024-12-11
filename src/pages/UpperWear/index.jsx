
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { urls } from '../../config/urls';
import { FaRupeeSign } from 'react-icons/fa';

export default function UpperWear() {
  let navigate = useNavigate()



  const [products, setProducts] = useState([]);


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
        const response = await axios.get(`${urls}/product/category/upperwear`);
        if (response && response.data) {

          setProducts(response.data.data.data);
        }
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


  console.log('re-render')
  return (
    <div className='p-2'>
      <div data-aos="zoom-in" className='flex justify-center align-middle gap-14 w-full bg-transparent font-semibold  xl:p-5'>
        <Link to={"/Tshirt"} >TShirt</Link>
        <Link to={"/Shirt"}>Shirt</Link>
        <Link to={"/Hoodie"}>Hoodie</Link>
        <Link to={"/Sweatshirt"}>Sweatshirt</Link>
      </div>

      <div
        className="mb-16 grid gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-10 px-2"
      >
        {products && products.length > 0 && products?.map((category, index) => (
          <div
            key={index}
            className="cursor-pointer flex-shrink-0 snap-center w-full max-w-sm mx-auto rounded-md overflow-hidden bg-white shadow-md relative"
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
  )
}