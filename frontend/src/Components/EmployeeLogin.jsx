import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'; 

const EmployeeLogin = () => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/employee/employee_login', values)
            .then(result => {
                if (result.data.loginStatus) {
                    localStorage.setItem("valid", true);
                    navigate('/employee_detail/' + result.data.id);
                } else {
                    console.log(result.data.Error)
                    setError(result.data.Error);
                }
            })
            .catch(err => console.log(err));
    };
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <div className='min-h-screen bg-gradient-to-br from-sky-600 to-cyan-500 p-4'>
        <div className=''>
                        <button onClick={handleBack} style={{ display: 'flex', alignItems: 'center' }}>
                        <FaArrowLeft style={{ marginRight: '8px' }} />Back
                        </button>
        </div>

            <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-sky-600 to-cyan-500 p-4">
            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Employee Login</h2>
                
                {error && (
                    <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            onChange={(e) => setValues({ ...values, password: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                            required
                        />
                    </div>
                    {error && (
                        <div className="text-center text-sm text-gray-600 mt-2 cursor-pointer">
                            Forgot your password?
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 rounded-md transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
        </div>
        
    );
};

export default EmployeeLogin;
