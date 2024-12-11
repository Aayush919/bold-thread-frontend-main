// import axios from "axios";
// import { useEffect, useState } from "react";
// import { CiStar } from "react-icons/ci";
// import { FaChevronDown } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import { urls } from "../../config/urls";

import NewArrivals from "../Home/Subcomponents/NewArrivals";

export default function NewArrival() {
  // const [sortBy, setSortBy] = useState("newest");
  // const [filter, setFilter] = useState("all");



  //   const sortedAndFilteredProducts = [products]
  //     .filter((product) => filter === "all" || product.category === filter)
  //     .sort((a, b) => {
  //       if (sortBy === "price-low-high") return a.price - b.price;
  //       if (sortBy === "price-high-low") return b.price - a.price;
  //       if (sortBy === "rating") return b.rating - a.rating;
  //       return 0;
  //     });





  return (
    <div className="   p-2">



      {/* <div className="flex flex-col md:flex-row justify-between mb-6">
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
            </div> */}
      {/* <div className="flex items-center">
              <span className="ml-6">Filter:</span>
              <select
                className="p-2 border rounded"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Products</option>
                <option value="jeans">Jeans</option>
                <option value="tshirt">T-Shirts</option>
              </select>
            </div> */}
      {/* </div>
        </div> */}


      <NewArrivals />
    </div >

  );
}
