import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get("http://localhost:3000/verify")
      .then((result) => {
        if (result.data.Status) {
          if (result.data.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/employee_detail/" + result.data.id);
          }
        }
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-600 to-cyan-500 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login As</h2>
        
        <div className="flex justify-between gap-4">
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
  );
};

export default Start;
