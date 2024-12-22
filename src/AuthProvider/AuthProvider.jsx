import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useVerifyAuthQuery } from '../redux/Api/Auth';

// Create a context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const { data, isLoading, isError } = useVerifyAuthQuery();

  useEffect(() => {
    if (isError) {
      console.error('User is not authenticated');
      setUser(null);
      return;
    }



    if (data) {
      setUser(data.user);
    }

    setLoading(isLoading);
  }, [data, isError, isLoading]);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};
