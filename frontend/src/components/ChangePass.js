import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
const ConfirmPassWord = () => {
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    return (
        <div className="credentials">
        <h2>Confirm Password</h2>
        <form className="formStyle">
        <label htmlFor="pass">Password</label>
        <input type="password" id="pass" ref={passwordRef} placeholder="1234"/>
        <label htmlFor="confirm">Confirm Password</label>
        <input type="password" id="confirm" ref={confirmPasswordRef} placeholder="1234"/>
        <button className="btn">Continue</button>
        </form>
        <h5>Already Have An Account.<Link to="/" style={{color: "#ff782d"}}>Sign In</Link></h5>
        </div>
    )
}

export default ConfirmPassWord