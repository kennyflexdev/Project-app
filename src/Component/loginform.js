import React, { useState } from "react";
import "./loginform.css"

const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn">Login</div>

            <p className="text">Follow us on our social media platform</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="whatsapp"></div>
                <div className="google"></div>
                <div className="gmail"></div>
            </div>

        </div>
    )
}

export default LoginForm