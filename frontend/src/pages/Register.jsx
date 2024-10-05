import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(username, email, password);
      navigate("/"); // Redirect to home page after registration
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="rounded-lg shadow-lg flex flex-col md:flex-row max-w-4xl">
        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Create Account</h2>
          {/* <p className="text-gray-500 mb-6 text-center">Sign up with your details</p> */}


          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 mb-4 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-600 transition">
              SIGN UP
            </button>
          </form>
        </div>

        {/* Welcome Back Section */}
        <div className="w-full md:w-1/2 rounded-lg bg-black text-white flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-bold">Welcome Back!</h2>
          <p className="mb-6 text-center">
            To stay connected, please login with your personal info
          </p>
          <button
            onClick={() => navigate("/login")}
            className="border border-white py-2 px-4 rounded-md hover:bg-white hover:text-black transition"
          >
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
