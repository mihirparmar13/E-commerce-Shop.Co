import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SingUp() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSignup = (e) => {
        e.preventDefault();
        localStorage.setItem("USER", JSON.stringify(formData));
        localStorage.setItem("isLogin", true);
        toast("Signup Successful");
       navigate("/home");
    }

    return (
        <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10">

                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold tracking-wide">
                        SHOP<span className="text-orange-500">.CO</span>
                    </h1>
                    <p className="text-gray-500 mt-3 text-sm">
                        Create your new account
                    </p>
                </div>


                <form className="space-y-6" onSubmit={handleSignup}>
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <div className="mt-2 flex items-center border border-gray-300 rounded-2xl px-4 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100 transition-all">
                            <FiUser className="text-gray-400 text-lg" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                onChange={handleChange}
                                className="w-full px-3 py-4 outline-none bg-transparent"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <div className="mt-2 flex items-center border border-gray-300 rounded-2xl px-4 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100 transition-all">
                            <FiMail className="text-gray-400 text-lg" />
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full px-3 py-4 outline-none bg-transparent"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="mt-2 flex items-center border border-gray-300 rounded-2xl px-4 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-100 transition-all">
                            <FiLock className="text-gray-400 text-lg" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                onChange={handleChange}
                                placeholder="Create password"
                                className="w-full px-3 py-4 outline-none bg-transparent"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-gray-500 hover:text-black"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-black hover:bg-orange-500 text-white py-4 rounded-2xl font-semibold transition-all duration-300"
                    >
                        Create Account
                    </button>


                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to="/"
                            className="text-orange-500 font-semibold hover:text-orange-600"
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default SingUp;