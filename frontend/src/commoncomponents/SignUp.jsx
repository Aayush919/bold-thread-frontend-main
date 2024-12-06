import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    console.log('chla kya brown...')
    console.log(username,email,password,cnfpassword)

    if (!username || !email || !password || !cnfpassword) {
      setError("All fields are required.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError("Password must be at least 8 characters long and contain at least one letter and one number.");
      return;
    }

    if (password !== cnfpassword) {
      setError("Password and Confirm Password must match.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/api/user/signup", { username, email, password });
      console.log(response.data);
      navigate('/')

    } catch (error) {
      console.error("Error during API call:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit}>
            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            <div className="mt-6">
              <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">Username</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span
                  className="inline-flex h-10 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  username@12
                </span>
                <input id="username" name="username" placeholder="Aayush" type="text" required=""
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="flex-1  border border-gray-300 form-input pl-3 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
              </div>
            </div>

            <div className="mt-6">
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
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">Confirm Password</label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  required
                  value={cnfpassword}
                  onChange={(e) => setCnfPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  {loading ? "Creating account..." : "Create account"}
                </button>
              </span>
            </div>
          </form>
          <p className="text-center my-2" onClick={() => navigate('/login')} >
            You already have an account please <span className="cursor-pointer">Log in </span> ?
          </p>
        </div>
      </div>
    </div>

  );
}
