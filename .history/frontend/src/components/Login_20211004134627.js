import React, {useRef, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaGoogle, FaFacebook} from 'react-icons/fa'
import { useAuth } from '../Context/AuthContext'

const LoginPage = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login} = useAuth()
    const [error, setError] = useState('')
    
    const history = useHistory()
  async function handleSubmit(e){
    e.preventDefault()
    try {
        setError('')
        await login(emailRef.current.value, passwordRef.current.value)
        history.push("/dash")
    }catch{
        console.log(error)
        setError('Failed to log in. Check if details are correct')
    }
   }
 
    return (
       
        <div className="credentials">
            <div className="section">
            <h2>Sign In</h2>
            <p>Welcome back</p>
            </div>
            <div className="socials">
            <button id="btn"><FaFacebook style={{"color": "blue"}}/> Facebook</button>
            <button id="btn"><FaGoogle />Google</button>
            </div>
            <form onSubmit={handleSubmit} className="formStyle">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={emailRef} required placeholder="anypay123@gmail.com" />
                <label htmlFor="pass">Password <span></span></label>
                <input type="password" id="pass" ref={passwordRef} required placeholder="1234"/>
                <Link to="/changepasscode" style={{"color": "#ff782d"}}>Forgot password</Link>
                <button type="submit" className="btn">Sign In</button>
            </form>
            <p>New to AnyPay.<Link to='/' style={{"color": "#ff782d"}}>Create Account</Link></p>
        
        </div>
    )
}
export default LoginPage