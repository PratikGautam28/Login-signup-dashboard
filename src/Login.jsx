import React, {  use, useState } from 'react'
 import './login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [showPassword,setShowPassword]=useState(false);
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const navigate=useNavigate();

    const handleSubmit=(e)=>{

        e.preventDefault();
      if(email==="admin@me.com" && password==="123"){
         setMessage("login sucess")
          setIsSuccess(true);
        navigate("/dashboard")}
         else{
            setMessage("login failed")
              setIsSuccess(false);
         }
    }

  return (
    <div className="login-page">  

      <div className="login-card">


      <h1>  Welcome back</h1>
      <p className='subtitle'>  login to your account </p>

<form className="form" onSubmit={handleSubmit}>

    <label className='label' >Email</label>

 <input  className="input1"
 type="email"
 placeholder='Enter your email'
 value={email}
 required 
 onChange={(e)=>setEmail(e.target.value)}

 />     


    <label   className='label' >Password</label>


<div className='password-box'>
    <input   className="input2"
  type={showPassword?"text":"password"}

 placeholder='Enter your password'
 value={password}
 required
 onChange={(e)=>setPassword(e.target.value)}
 />

 <button
 type='button'
 className='eye-btn'
 onClick={()=>setShowPassword(!showPassword)}>

       {showPassword ? "🙈" : "👁️"}

 </button>

</div>
 


 <div className='forget'
 onClick={()=>console.log("forget password ")}>
    Forget Password?
 </div>


{message && (
  <p className={isSuccess ? "success" : "error"}>
    {message}
  </p>
)}

 <button  className="btn" type="submit" >
    Login
 </button>

</form>



<p className='signup'> 
    Don't have an account ?
    <span onClick={()=>navigate("/signup")}>  Create account </span>
</p>
     </div>
    </div>
  )
}

export default Login
