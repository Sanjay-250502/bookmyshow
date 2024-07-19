import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "../CSS/login.css"
const Login = () => {
  const nav=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [register,setRegister] = useState({
    email: '',
    password: ''
  })
  const handleLoginChange = (e) => {
      setRegister({
        ...register,
        [e.target.name]: e.target.value
      })
  }
  const handleLogin = async () => {
    if (!register.email || !register.password) {
      alert("Please fill in all fields.");
      return;
    }
    try{
     const loginFetch = await axios.get("http://localhost:3001/registerdata")
     const responseLogin = loginFetch.data
    // console.log(responseLogin)
     const isUserFound = responseLogin.some(user => 
       user.email === register.email && user.password === register.password
     );

    if (isUserFound) {
      setLoginSuccess(true);
      nav('/Home') 
    } else {
      alert("Login Failed");
    }
    setRegister({
      email: '',
      password: ''
    })
    }
    catch(error){
      console.log(error)
    }
  }
  return (
    <>
   <div className="wrapper">
  <div className="login_box">
    <div className="login-header">
      <span>Login</span>
    </div>

    <div className="input_box">
      <input type="text" id="user" 
      className="input-field" 
      value={register.email} 
      name='email' 
      onChange={handleLoginChange}
      required/>
      <label for="user" className="label-1">Email:</label>
      <i class="bx bx-envelope icon"></i>
    </div>

    <div className="input_box">
      <input type={showPassword ? "text" : "password"}  
      id="pass" 
      value={register.password}
      name='password'
      className="input-field" 
      onChange={handleLoginChange}
      required/>
      <label for="pass" className="label-1">Password:</label>
      <i className={showPassword ? "bx bx-hide icon" : "bx bx-show icon"} onClick={handleTogglePasswordVisibility}></i>
    </div>

    <div className="input_box">
      <input type="submit" 
      className="input-submit" 
      value="Login"
      onClick={handleLogin}/>
    </div>

    <div className="register">
      <span>Don't have an account?
      <Link to= "/Register" className='nav-link register-link nav-link'>Register</Link>
      </span>
    </div>
  </div>
</div>
    </>
  )
}

export default Login