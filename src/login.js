


// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BsEye, BsEyeSlash } from 'react-icons/bs';
// import { Link } from "react-router-dom";

// function Content() {
//   const [data, setData] = useState({ email: "", password: "" });
//   const [errors, setErrors] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);

//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return emailRegex.test(email);
//   }

//   const validatePassword = (password) => {
//     return password.length >= 8;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//     setErrors({ ...errors, [name]: "" });
//   };

//   const submit = (e) => {
//     e.preventDefault();
//     const newErrors = {};
//     if (!validateEmail(data.email) || !validatePassword(data.password)) {
//       if (!validateEmail(data.email)) {
//         newErrors.email = "Invalid email address";
//         alert(newErrors.email);
//       }
//       if (!validatePassword(data.password)) {
//         newErrors.password = "Password must be at least 8 characters long";
//         alert(newErrors.password);
//       }
//       setErrors(newErrors);
//       return;
//     }
    
   
//     alert("Form submitted successfully");
//   }

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <>
//       <div className="login-image">
//         <div className="d-flex justify-content-center align-items-center vh-150">
//           <div className="login-container p-1 rounded shadow-sm">
//             <form onSubmit={submit}>
//               <h1 className="text-center mb-1">Login</h1>
//               <div className="mb-1"><br></br>
//                 <label htmlFor="email" className="form-label">Email</label>
//                 <div className="input-group">
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     name="email"
//                     placeholder="Enter email"
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 {errors.email && <div className="text-danger">{errors.email}</div>}
//               </div>
//               <div className="mb-2">
//                 <label htmlFor="password" className="form-label">Password</label>
//                 <div className="input-group">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     className="form-control"
//                     id="password"
//                     name="password"
//                     placeholder="Enter password"
//                     onChange={handleInputChange}
//                     required
//                   />
//                   <button
//                     className="btn password-toggle-btn"
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                   >
//                     {showPassword ? <BsEyeSlash /> : <BsEye />}
//                   </button>
//                 </div>
//                 {errors.password && <div className="text-danger">{errors.password}</div>}
//               </div>
//               <div className="justify-content-center">
//                 <center>
//                   <Link to="/admindashboard">
//                   <button type="submit" className="btn btn-primary">Submit</button></Link>
//                 </center>
//               </div>
//             </form>
//             <p className="text-center mt-3">
//               Do not have an account? <Link to='/register'>Register</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Content;





import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link } from "react-router-dom";
import './login.css'; // Assuming you save the CSS in FormStyles.css

function Content() {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const submit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validateEmail(data.email) || !validatePassword(data.password)) {
      if (!validateEmail(data.email)) {
        newErrors.email = "Invalid email address";
        alert(newErrors.email);
      }
      if (!validatePassword(data.password)) {
        newErrors.password = "Password must be at least 8 characters long";
        alert(newErrors.password);
      }
      setErrors(newErrors);
      return;
    }
    
    alert("Form submitted successfully");
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
    <div className="login-bg">
      <div className="login-image">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="form_main">
            <form onSubmit={submit}>
              <h1 className="heading">Login</h1>
              <div className="inputContainer">
                <label htmlFor="email" className="form-label"></label>
                <input
                  type="email"
                  className="inputField"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleInputChange}
                  required
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>
              <div className="inputContainer">
                <label htmlFor="password" className="form-label"></label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="inputField"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={handleInputChange}
                  required
                />
                <button
                  className="btn password-toggle-btn"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </button>
                {errors.password && <div className="text-danger">{errors.password}</div>}
              </div>
              <div className="justify-content-center">
              <Link to="/admindashboard">
                <button type="submit" id="button">Submit</button></Link>
              </div>
            </form>
            <p className="text-center mt-3 forgotLink">
              Do not have an account? <Link to='/register'>Register</Link>
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Content;

