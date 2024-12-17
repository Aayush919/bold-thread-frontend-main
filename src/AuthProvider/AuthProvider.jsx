import  { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/auth/verify', {
          withCredentials: true, 
        });
        console.log(response)
        setUser(response.data.user); 
      } catch (error) {
        console.error('User is not authenticated', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};
