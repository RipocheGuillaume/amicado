import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hook/useAuth";

function PrivateRoute() {
  const { authenticate, status } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      const result = await authenticate();
      setIsAuthenticated(result);
      setIsLoading(false);
    }
    checkAuth();
  }, [authenticate]);

  if (isLoading) {
    // Afficher un indicateur de chargement si la vérification est en cours
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
