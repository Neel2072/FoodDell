import React, { useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'

const LoginPopup = ({ SetShowLogin }) => {

    const [cuurentState, setCurrentState] = useState("Sign Up")

    return (
        <div className='login_popup'>
            <div className="login_popup_container">
                <div className="login_popup_title">
                    <h2>{cuurentState}</h2>
                    <img onClick={() => SetShowLogin(false)} src={assets?.cross_icon} alt="" />
                </div>
                <div className="login_popup_inputs">
                    {cuurentState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Your Password' required />
                </div>
                <button>{cuurentState === "Sign Up" ? "Create Account " : "Login"} </button>
                <div className="login_popup_condition">
                    <input type="checkbox" required />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur mollitia hic laboriosam?</p>
                </div>

                {cuurentState === "Login" ? <p>Create A new Account ? <span onClick={()=> setCurrentState("Sign Up")}>Click Here</span></p> 
                                        : <p>Already have a account <span onClick={()=> setCurrentState("Login")}>Login Here</span></p>}

            </div>
        </div>
    )
}

export default LoginPopup