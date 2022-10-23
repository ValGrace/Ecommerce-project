import React, {useRef, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaGoogle, FaFacebook} from 'react-icons/fa'
import { useAuth } from '../Context/AuthContext'
import "./signup.css"

const SignupPage = () => {
    const emailRef = useRef()
    const passRef = useRef()
    const confirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')
    const history = useHistory()
  async function handleSubmit(e) {
        e.preventDefault()
        if(passRef.current.value !== confirmRef.current.value){
            return setError('Passwords do not match')
        }
        try { 
            setError('')
            setLoading(true)
        await signup(emailRef.current.value, passRef.current.value)
        history.push("/dash")
    }catch {
        setError('Failed to create an account')
    }
    setLoading(false)
}
    return (
        
        <div className="credentials">
            <div className="section">
                
            <h2>Create Account</h2>
            <h5>Welcome to Anypay</h5>
            </div>
            <div className="socials">
            <button id="btn"><FaFacebook style={{"color": "blue"}}/>  Facebook</button>
            <button id="btn"><FaGoogle />    Google</button>
            </div>
            {error && <p>{error}</p>}
            <form className="formStyle" onSubmit={handleSubmit}>
                <label htmlFor="email" className="email-label">Email</label>
                <input type="email" id="email" ref={emailRef} placeholder="xxx@gmail.com" required />
                <label htmlFor="pass" className="pass-label">Password</label>
                <input type="password" id="password" ref={passRef} placeholder="1234" required />
                <label htmlFor="confirm" className="pass-label">Confirm Password</label>
                <input tye="password" id="confirm" ref={confirmRef} placeholder="1234" required />
                <button disabled={loading} className="btn" type="submit">Continue</button>
            </form>
            <h4>Already Have An Account. <Link to="/login" style={{"color": "#ff782d"}}>Log In</Link></h4>
        </div>
        
      
    )
}

export default SignupPage