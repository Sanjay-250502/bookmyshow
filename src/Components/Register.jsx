import React, {useEffect, useState } from 'react';
import "../CSS/register.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [data,setData] = useState([])
  const [userInput,setUserInput] = useState({
    fullname: '',
    email:'',
    password:'',
    cpassword:'',
  })
  const navigation = useNavigate();

  const fetchData = async () => {
    try{
        const response = await axios.get("http://localhost:3000/registerdata")
        const registerFetch = response.data
        setData(registerFetch)
    }
    catch(error){
        console.log(`Error reading registerAPI:${error}`)
    }
   }
   console.log(data)
   useEffect(()=>{
    fetchData()
   },[])
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleInputChange = (e) => {
   setUserInput({
    ...userInput,
    [e.target.name]: e.target.value
   })
  }
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleTogglePasswordInVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handleRegister = async () => {
      if(!userInput.fullname || !userInput.email || !userInput.password || !userInput.cpassword) {
        alert("Please fill in all fields.");
        return;
      }
      if (userInput.password !== userInput.cpassword) {
        alert("Password and Confirm Password do not match.");
        return;
      }  
    try {
        const newData = ({
            ...userInput,
            email: userInput.email,
            fullname: userInput.fullname,
            password: userInput.password,
            cpassword:userInput.cpassword
        })
        await axios.post('http://localhost:3001/registerdata', newData)
        fetchData()
        alert("Registered Successfully!")
        navigation('/')
        setUserInput(
            {
                email: "",
                fullname: "",
                password: "",
                cpassword: ""
            }
        )
    }
    catch (error) {
        console.log("Error", error)
    }
  }
  return (
    <>
      <div className="wrapper1">
        <div className="register_box">
          <div className="register-header">
            <span>Register</span>
          </div>

          <div className="input_box">
            <input type="text" 
            id="fullname" 
            className="input-field" 
            value={userInput.fullname} 
            name='fullname' 
            onChange={handleInputChange} required />
            <label htmlFor="fullname" className="label">Full Name:</label>
            <i className="bx bx-user icon"></i>
          </div>

          <div className="input_box">
            <input type="email" 
            id="email" 
            className="input-field" 
            value={userInput.email} 
            name='email' 
            onChange={handleInputChange} required />
            <label htmlFor="email" className="label">Email:</label>
            <i className="bx bx-envelope icon"></i>
          </div>

          {/* <div className="input_box">
            <input type="password" id="password" className="input-field" value={data.password} name='password' onChange={handleInputChange} required />
            <label htmlFor="password" className="label">Password</label>
            <i className="bx bx-lock-alt icon"></i>
          </div> */}

          <div className="input_box">
            <input type={showPassword ? "text" : "password"} 
            id="password" 
            className="input-field" 
            value={userInput.password} 
            name='password' 
            onChange={handleInputChange} required />
            <label htmlFor="password" className="label">Password:</label>
            <i className={showPassword ? "bx bx-hide icon" : "bx bx-show icon"} onClick={handleTogglePasswordVisibility}></i>
          </div>

          {/* <div className="input_box">
            <input type="password" id="confirm_password" className="input-field" value={data.confirmPassword} name='confirmPassword' onChange={handleInputChange} required />
            <label htmlFor="confirm_password" className="label">Confirm Password</label>
            <i className="bx bx-lock-alt icon"></i>
          </div> */}

           <div className="input_box">
            <input type={showConfirmPassword ? "text" : "password"} 
            id="confirm_password" 
            className="input-field" 
            value={userInput.cpassword} 
            name='cpassword' 
            onChange={handleInputChange} required />
            <label htmlFor="confirm_password" className="label">Confirm Password:</label>
            <i className={showConfirmPassword ? "bx bx-hide icon" : "bx bx-show icon"} onClick={handleTogglePasswordInVisibility}></i>
          </div>

          <div className="input_box">
            <input type="submit" className="input-submit" onClick={handleRegister} />
          </div>

          <div className="login">
            <span>Already have an account? 
            <Link to="/" className='nav-link nav-ba-r nav-link'>Login</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;
