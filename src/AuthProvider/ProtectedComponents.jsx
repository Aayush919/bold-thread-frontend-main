
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedComponent = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>; 

  if (!user) {
    navigate('/login');
    return null;
  }
  
  return <div>Welcome, {user.username}!</div>; 
};

export default ProtectedComponent;
