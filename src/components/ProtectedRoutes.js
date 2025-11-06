import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null); // Start as null to indicate loading
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const checkAuth = async () => {
      const username = localStorage.getItem("username");
      const password = localStorage.getItem("password");

      if (username && password) {
        try {
          const response = await axios.post(
            "https://api-portfolio-hak.onrender.com/login",
            {
              role: username,
              pass: password,
            }
          );

          if (response.status === 200) {
            setIsAuth(true);
            localStorage.setItem("isAuth", "true"); // Store authentication status
          }
        } catch (error) {
          console.error("Authentication failed:", error);
          setIsAuth(false);
          localStorage.removeItem("isAuth"); // Clear auth if failed
        }
      } else {
        setIsAuth(false);
      }
      setLoading(false); // Mark loading as complete
    };

    checkAuth();
  }, []);

  if (loading) return <p>Loading...</p>; // Prevent redirect before authentication is checked
  return isAuth ? children : <Navigate to="/login" />;
};

export default ProtectedRoutes;
