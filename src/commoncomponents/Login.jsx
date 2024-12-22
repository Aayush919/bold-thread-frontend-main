import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { urls } from "../config/urls";
import { useLoginMutation } from "../redux/Api/Auth";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);



  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!email || !password) {
      setError('All fields are required.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and contain at least one letter and one number.');
      return;
    }

    // Call RTK Query's login mutation
    try {
      await login({ email, password }).unwrap(); // `.unwrap` handles promise resolution
      console.log('Login successful!');
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password. Please try again.');
    }
  };



  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col justify-center py-12 sm:px-6 lg:px-8 ">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md m-4">
        <div className="absolute top-4 left-4 cursor-pointer" onClick={() => navigate(-1)}>
          <FaArrowLeft className="h-6 w-6 text-black" />
        </div>
        <div className="bg-white py-8 px-6 shadow-lg rounded-xl sm:px-10 border border-gray-200">
          <h2 className="text-2xl font-bold text-center text-black">Welcome Back</h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Sign in to your account and explore more!
          </p>
          <form onSubmit={handleSubmit} method="POST" className="mt-6">
            {error && (
              <div className="text-red-500 text-sm mb-4 border border-red-300 bg-red-100 px-4 py-2 rounded-md">
                {error}
              </div>
            )}

            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-800">
                Email address
              </label>
              <div className="mt-1 relative">
                <input
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="appearance-none block w-full px-4 py-2 border border-black rounded-lg shadow-sm placeholder-gray-500 text-black focus:outline-none focus:ring-0 focus:border-black sm:text-sm"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-800">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none block w-full px-4 py-2 border border-black rounded-lg shadow-sm placeholder-gray-500 text-black focus:outline-none focus:ring-0 focus:border-black sm:text-sm"
                />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)} // Toggle show/hide
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-500" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-black shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition duration-150"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </button>
            </div>
          </form>

          <p className="text-center mt-6 text-sm text-gray-700">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-600 font-medium cursor-pointer hover:underline"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>



  );
}
