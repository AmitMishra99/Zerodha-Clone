import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constant";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    emailID: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const url = isLogin ? `${BASE_URL}/login` : `${BASE_URL}/signup`;

      const payload = isLogin
        ? {
            emailID: formData.emailID,
            password: formData.password,
          }
        : formData;

      const res = await axios.post(url, payload);

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }

      window.location.href = "http://localhost:5174";
    } catch (err) {
      const message = err.response?.data?.msg || "Something went wrong";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 border rounded p-5 shadow-sm bg-white">
          <h2 className="text-center mb-4">{isLogin ? "Login" : "Signup"}</h2>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-3">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="mb-3">
              <input
                type="email"
                name="emailID"
                className="form-control"
                placeholder="Email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>

            {/* ✅ Error Message */}
            {error && <div className="alert alert-danger py-2">{error}</div>}

            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{ backgroundColor: "#387ed1" }}
              disabled={loading}
            >
              {loading ? "Processing..." : isLogin ? "Login" : "Continue"}
            </button>
          </form>

          <hr className="my-4" />

          <div className="text-center">
            <button
              className="btn btn-link text-decoration-none"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? "Don't have an account? Signup"
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
