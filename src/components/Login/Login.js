import React, { useCallback, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const login = useCallback(async () => {
    if (!role || !pass) {
      alert("Please enter both username and password.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await axios.post(
        "https://api-portfolio-hak.onrender.com/login",
        {
          role,
          pass,
        }
      );

      if (response.status === 200) {
        localStorage.setItem("username", response.data.role);
        localStorage.setItem("password", response.data.pass);
        localStorage.setItem("isAuth", "true"); // Store auth status
        console.log("login");
        navigate("/admin");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  }, [role, pass, navigate]);

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <div>
          <div className="input-group">
            <label>Username</label>
            <input
              onChange={(e) => setRole(e.target.value)}
              value={role}
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={login}
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
