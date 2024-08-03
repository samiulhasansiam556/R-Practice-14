import React from 'react';
import { Navigate,Outlet} from 'react-router-dom';
import { auth } from '../Firebase/FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export function ProtectedRoute({ children }) {
  const [loading, setLoading] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet/>: <Navigate to="/login" />;
}
