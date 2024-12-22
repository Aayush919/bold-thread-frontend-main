import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons for showing/hiding password
import { useAuth } from "../AuthProvider/AuthProvider";
import { useRegisterMutation } from "../redux/Api/Auth";  // Import the mutation

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfPassword] = useState("");
  const [phone, setPhone] = useState(""); // New phone number state
  const [address, setAddress] = useState(""); // New address state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for showing password
  const [showCnfPassword, setShowCnfPassword] = useState(false); // State for showing confirm password

  const navigate = useNavigate();
  const { setIndicate } = useAuth();
  const [register] = useRegisterMutation();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  const phoneRegex = /^[0-9]{10}$/; // Simple phone number validation for 10 digits

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!username || !email || !password || !cnfpassword || !phone || !address) {
      setError("All fields are required.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one letter and one number."
      );
      return;
    }

    if (password !== cnfpassword) {
      setError("Password and Confirm Password must match.");
      return;
    }

    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await register({ username, email, password, phone, address }).unwrap(); // Unwrap handles errors cleanly
      console.log(response);
      navigate('/'); // Navigate after successful registration
    } catch (error) {
      console.error("Error during API call:", error);
      setError(error?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md m-4">
        <div className="bg-white py-8 px-6 shadow-lg rounded-xl sm:px-10 border border-gray-200">
          <div className="absolute top-4 left-4 cursor-pointer" onClick={() => navigate(-1)}>
            <FaArrowLeft className="h-6 w-6 text-black" />
          </div>
          <h2 className="text-2xl font-bold text-center text-black">Create Your Account</h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Sign up to get started and explore more features!
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
            {error && (
              <div className="text-red-500 text-sm mb-4 border border-red-300 bg-red-100 px-4 py-2 rounded-md">
                {error}
              </div>
            )}

            <div className="mt-4">
              <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">Username</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  username@12
                </span>
                <input
                  id="username"
                  name="username"
                  placeholder="Aayush"
                  type="text"
                  required=""
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="appearance-none block w-full px-4 py-2 border border-black rounded-lg shadow-sm placeholder-gray-500 text-black focus:outline-none focus:ring-0 focus:border-black sm:text-sm " />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-2 border border-black rounded-lg shadow-sm placeholder-gray-500 text-black focus:outline-none focus:ring-0 focus:border-black sm:text-sm" />
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="mt-4">
              <label htmlFor="phone" className="block text-sm font-medium leading-5 text-gray-700">Phone Number</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="phone"
                  name="phone"
                  placeholder="1234567890"
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="appearance-none block w-full px-4 py-2 border border-black rounded-lg shadow-sm placeholder-gray-500 text-black focus:outline-none focus:ring-0 focus:border-black sm:text-sm" />
              </div>
            </div>

            {/* Address Field */}
            <div className="mt-4">
              <label htmlFor="address" className="block text-sm font-medium leading-5 text-gray-700">Address</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="address"
                  name="address"
                  placeholder="Your Address"
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="appearance-none block w-full px-4 py-2 border border-black rounded-lg shadow-sm placeholder-gray-500 text-black focus:outline-none focus:ring-0 focus:border-black sm:text-sm" />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
              <div className="mt-1 rounded-md shadow-sm relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-2 border border-black rounded-lg shadow-sm placeholder-gray-500 text-black focus:outline-none focus:ring-0 focus:border-black sm:text-sm" />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash className="h-5 w-5 text-gray-500" /> : <FaEye className="h-5 w-5 text-gray-500" />}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">Confirm Password</label>
              <div className="mt-1 rounded-md shadow-sm relative">
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type={showCnfPassword ? "text" : "password"}
                  required
                  value={cnfpassword}
                  onChange={(e) => setCnfPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-2 border border-black rounded-lg shadow-sm placeholder-gray-500 text-black focus:outline-none focus:ring-0 focus:border-black sm:text-sm" />
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => setShowCnfPassword(!showCnfPassword)}
                >
                  {showCnfPassword ? <FaEyeSlash className="h-5 w-5 text-gray-500" /> : <FaEye className="h-5 w-5 text-gray-500" />}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-black shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition duration-150"
                >
                  {loading ? "Creating account..." : "Create account"}
                </button>
              </span>
            </div>
          </form>

          <p className="text-center mt-6 text-sm text-gray-700">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-600 font-medium cursor-pointer hover:underline"
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
