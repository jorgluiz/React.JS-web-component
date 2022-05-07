import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"

//my context
import { AuthContext } from "../../components/contexts/Auth"
import Button from "../../components/button"

import "./Signin.css"

const SigninPage = () => {      // hook context
    const { signin } = useContext(AuthContext)

    let [email, setEmail] = useState("") //state of component
    let [password, setPassword] = useState("") //state of component

    const onEmailChange = (e) => {
        setEmail(email = e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(password = e.target.value)
    }

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault()

        //signin (AuthContext)
        signin(email, password)
    }

    return (
        <div className="content">
            <div className="container-signin">
                <form className="form-signin" onSubmit={handleSubmit}> {/* event submit */}
                    <h1 className="title">log in</h1>
                                                      {/* set value email */}
                    <input className="signin1" type="email" value={email} onChange={onEmailChange} id="signin-email" placeholder="E-MAIL" />
                                                            {/* set value password */}
                    <input className="signin1" type="password" value={password} onChange={onPasswordChange} id="signin-password" placeholder="PASSWORD" />

                    <div className="actions-signin">
                        <Button type="submit">ENTER</Button>
                    </div>
                    <div>
                    <p style={{display: "inline-block", marginRight: "5px"}}>don't have account </p>
                    <div style={{display: "inline-block"}}>
                        <Link to={"/signup"}>register</Link>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SigninPage