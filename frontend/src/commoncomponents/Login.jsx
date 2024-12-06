import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");


    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }


    if (!passwordRegex.test(password)) {
      setError("Password must be at least 8 characters.");
      return;
    }

    try {
      const response = await axios.post("/api/user/login", { email, password });

      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.token);
        navigate("/");
      }
    }
    catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} method="POST">
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-10">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 shadow-lg rounded hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Log in
                </button>
              </span>
            </div>
          </form>

          <button className="flex justify-around items-center text-center w-full mx-auto py-2 px-2 font-medium shadow-lg rounded bg-white my-3 hover:bg-four">
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              className="relative w-5 h-5 ml-0 mr-2"
              alt="google logo"
            />
            <span className="w-5/6">Log in with Google</span>
          </button>

          <p className="text-center my-2 cursor-pointer">
            Create a new <span onClick={() => navigate('/signup')}>account</span> ?
          </p>
        </div>
      </div>
    </div>
  );
}
