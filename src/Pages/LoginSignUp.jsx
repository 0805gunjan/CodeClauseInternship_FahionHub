import React from 'react'
import './CSS/LoginSignUP.css'

const LoginSignUp = () => {
  return (
    <div className='Loginsignup'> 
      <div className="container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='LoginSignUp-login'>Already have an account? <span>Login</span></p>
        <div className="agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>

      </div>
    </div>
  )
}

export default LoginSignUp
