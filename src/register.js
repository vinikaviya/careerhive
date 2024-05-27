





import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from "react-router-dom";
import './register.css'; // Ensure you import your CSS file

function Register() {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        password: "",
        mobile: ""
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const validateMobile = (mobile) => {
        const mobileRegex = /^[0-9]{10}$/;
        return mobileRegex.test(mobile);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!validateEmail(data.email) || !validatePassword(data.password) || !validateMobile(data.mobile)) {
            if (!data.fullName) {
                alert("Please fill all fields");
            } else if (!validateEmail(data.email)) {
                alert("Invalid email address");
            } else if (!validatePassword(data.password)) {
                alert("Password must be at least 8 characters long");
            } else if (!validateMobile(data.mobile)) {
                alert("Invalid mobile number");
            }
            setErrors(newErrors);
            return;
        }

        alert("Form submitted successfully");
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="form">
            <div className="title">Register</div>
            <div className="subtitle">Create your account</div>
            <form onSubmit={handleSubmit}>
                <div className="input-container ic1">
                    <input
                        type="text"
                        className="input"
                        id="fullName"
                        name="fullName"
                        placeholder=" "
                        onChange={handleInputChange}
                    />
                    <div className="cut"></div>
                    <label htmlFor="fullName" className="iLabel">Full Name</label>
                </div>
                {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
                
                <div className="input-container ic2">
                    <input
                        type="email"
                        className="input"
                        id="email"
                        name="email"
                        placeholder=" "
                        onChange={handleInputChange}
                    />
                    <div className="cut cut-short"></div>
                    <label htmlFor="email" className="iLabel">Email</label>
                </div>
                {errors.email && <div className="text-danger">{errors.email}</div>}
                
                <div className="input-container ic2">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="input"
                        id="password"
                        name="password"
                        placeholder=" "
                        onChange={handleInputChange}
                    />
                    <button
                        className="btn password-toggle-btn"
                        type="button"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </button>
                    <div className="cut"></div>
                    <label htmlFor="password" className="iLabel">Password</label>
                </div>
                {errors.password && <div className="text-danger">{errors.password}</div>}
                
                <div className="input-container ic2">
                    <input
                        type="tel"
                        className="input"
                        id="mobile"
                        name="mobile"
                        placeholder=" "
                        onChange={handleInputChange}
                    />
                    <div className="cut"></div>
                    <label htmlFor="mobile" className="iLabel">Mobile</label>
                </div>
                {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
                
                {errors.general && <div className="text-danger">{errors.general}</div>}
                
                <Link to="/userdashboard">
                    <button type="submit" className="submit">Submit</button>
                </Link>
            </form>
        </div>
    );
}

export default Register;
