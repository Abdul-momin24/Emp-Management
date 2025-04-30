import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-Photoroom.png";

const Start = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    // Verifying the user session
    const verifyUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/verify");
        const { Status, role, id } = data;

        if (Status) {
          if (role === "admin") {
            navigate("/dashboard");
          } else {
            navigate(`/employee_detail/${id}`);
          }
        }
      } catch (err) {
        console.error("Error verifying user:", err);
      }
    };

    verifyUser();
  }, [navigate]);

  return (
    <>
      <div className="header bg-gradient-to-br from-sky-600 to-cyan-500 p-4">
        <div className="div flex items-center justify-center">
          <div className="flex-shrink-0 h-20">
            {/* Image container */}
            <img src={logo} className="object-cover h-full" alt="Logo" />
          </div>
          <h1 className="font-extrabold">EMPLOYEE360 LOGIN PANEL</h1>
        </div>
    

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-600 to-cyan-500 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center h-fit">
          <h2 className="text-2xl font-bold text-gray-800 m-2">Login As</h2>

          <div className="flex justify-between gap-4 mt-5">
            <button
              type="button"
              onClick={() => navigate("/employee_login")}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
            >
              Employee
            </button>
            <button
              type="button"
              onClick={() => navigate("/adminlogin")}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Start;
