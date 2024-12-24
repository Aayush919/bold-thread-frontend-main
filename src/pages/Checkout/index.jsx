import { useState, useEffect } from "react";
import Phonepay from "./Phonepay";
import { useLocation, useParams } from "react-router-dom";

function Checkout() {
  const { productId, variantId } = useParams(); // Get the productId and variantId from the URL params
  const location = useLocation(); // Get the state from the router
  const { size, price, quantity } = location.state || {};
  const [formData, setFormData] = useState({
    userId: "", // You can set this from the current logged-in user
    name: "",
    email: "",
    alternativeNumber: "",
    phoneNumber: "",
    products: [
      {
        productId: productId || "", // Set productId from useParams
        variantId: variantId || "", // Set variantId from useParams
        quantity: quantity || 1, // Default to 1 if no quantity is provided
        price: price || 0, // Default to 0 if no price is provided
        size: size || "", // Default to an empty string if no size is provided
      },
    ],
    totalAmount: 0,
    paymentStatus: "Pending",
    deliveryAddress: "",
    pincode: "",
    city: "",
    state: "",
    orderStatus: "Pending",
    invoiceNumber: "",
    invoiceDate: new Date(),
    taxAmount: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can make an API call to submit the order data to the backend.
    console.log(formData);
  };



  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      products: [
        {
          ...prevData.products[0],
          productId: productId,
          variantId: variantId,
          size: size,
          price: price,
          quantity: quantity,
        },
      ],
    }));
  }, [productId, variantId, size, price, quantity]);
  return (
    <div className="font-sans p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">Checkout</h2>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Personal Details */}
          <div className="mt-12">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mt-1">Personal Details</h3>
              </div>
              <div className="md:col-span-2">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="alternativeNumber"
                      placeholder="Alternative number"
                      value={formData.alternativeNumber}
                      onChange={handleChange}
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="mt-12">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">Shipping Address</h3>
                </div>
                <div className="md:col-span-2">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="deliveryAddress"
                        placeholder="Street address"
                        value={formData.deliveryAddress}
                        onChange={handleChange}
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleChange}
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-12">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mt-1">Payment Method</h3>
                </div>
                <div className="md:col-span-2">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center">
                      <input type="radio" className="w-5 h-5 cursor-pointer" id="phonepay" name="paymentMethod" />
                      <label htmlFor="phonepay" className="ml-4 flex gap-2 cursor-pointer">

                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-wrap justify-end gap-4 mt-12">
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Pay now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
