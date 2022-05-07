import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/button"
import { register } from "../../utils/services/api";

import "./Signup.css"

const SignupPage = () => {
    const navigate = useNavigate()

    const [signup, setSignup] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const onUserNameChange = (e) => {
        setSignup({
            ...signup,
            username: e.target.value
        })
    }

    const onEmailChange = (e) => {
        setSignup({
            ...signup,
            email: e.target.value
        })
    }

    const onPasswordChange = (e) => {
        setSignup({
            ...signup,
            password: e.target.value
        })
    }

    const onConfirmPasswordChange = (e) => {
        setSignup({
            ...signup,
            confirmPassword: e.target.value
        })
    }

    //function with parameter (data)
    const signupForm = (signup) => {
        //function API
        register(signup)
    }

    // submit form
    const handleSubmit = (e) => {
        e.preventDefault()

        signupForm({
            ...signup,
            username: signup.username,
            email: signup.email,
            password: signup.password,
            confirmPassword: signup.confirmPassword,
        })
        setSignup({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        })

        navigate("/signin")
    }

    return (
        <div className="container-center">
            <div className="container-signup">
                <form className="form-signup" onSubmit={handleSubmit}>
                    <h3>Cadastro de usuário</h3>
                    <input className="signup1" value={signup.username} onChange={onUserNameChange} placeholder="NOME" />
                    <input className="signup2" type="email" value={signup.email} onChange={onEmailChange} placeholder="EMAIL" />
                    <input className="signup3" type="password" value={signup.password} onChange={onPasswordChange} placeholder="PASSWORD" />
                    <input className="signup4" type="password" value={signup.confirmPassword} onChange={onConfirmPasswordChange} placeholder="CONFIRME PASSWORD" />

                    <div className="actions-signup">
                        <Button type="submit">Registrar</Button>
                    </div>

                    <div className="margin-signup">
                    <p style={{display: "inline-block", marginRight: "5px"}}>back to screen</p>
                    <div style={{display: "inline-block"}}>
                    <Link to={"/signin"}>Login</Link>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupPage