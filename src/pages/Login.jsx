// src/pages/Login.jsx
import React from 'react';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
            {/* Logo */}
            <div className="mb-6">
                <svg
                    className="w-10 h-10 text-white mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 168 168"
                >
                    <circle fill="currentColor" cx="84" cy="84" r="84" />
                    <path
                        fill="#000"
                        d="M123 55c-30-17-69-14-95 5l12 16c21-16 55-19 80-7v-14z"
                    />
                </svg>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold mb-6 text-center">Welcome back</h1>

            {/* Email / Username */}
            <input
                type="text"
                placeholder="Email or username"
                className="w-full max-w-md p-3 rounded-md mb-4 bg-[#121212] border border-gray-700 outline-none"
            />

            {/* Continue Button */}
            <button className="w-full max-w-md bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-full mb-4">
                Continue
            </button>

            <p className="mb-4">or</p>

            {/* Social / Alternative login buttons */}
            <div className="flex flex-col w-full max-w-md gap-3">
                <button className="flex items-center justify-center gap-2 border border-gray-600 rounded-full py-2 hover:bg-gray-800">
                    <span>📱</span> Continue with phone number
                </button>
                <button className="flex items-center justify-center gap-2 border border-gray-600 rounded-full py-2 hover:bg-gray-800">
                    <span>G</span> Continue with Google
                </button>
                <button className="flex items-center justify-center gap-2 border border-gray-600 rounded-full py-2 hover:bg-gray-800">
                    <span>f</span> Continue with Facebook
                </button>
                <button className="flex items-center justify-center gap-2 border border-gray-600 rounded-full py-2 hover:bg-gray-800">
                    <span></span> Continue with Apple
                </button>
            </div>

            {/* Signup Link */}
            <p className="mt-6 text-gray-400">
                Don't have an account?{' '}
                <span className="text-white font-bold cursor-pointer">Sign up</span>
            </p>
        </div>
    );
};

export default Login;
