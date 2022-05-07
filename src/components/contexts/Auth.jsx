import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { logged } from "../../utils/services/api"

export const AuthContext = createContext() // creating context

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // useEffect
    useEffect(() => {
        const recoveredUser = localStorage.getItem("user")
    
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }

        setLoading(false)
    }, [])

    // getting values email and password of my form ( signIn )
    const signin = async (email, password) => {
        const response = await logged(email, password) // req http type ( post )

        const loggedUser = response.data.user
        const token = response.data.accessToken

        localStorage.setItem("user", JSON.stringify(loggedUser))
        localStorage.setItem("token", token)

        // api.defaults.headers.Authorization = `Bearer ${token}`

        setUser(loggedUser)
        navigate("/")
    }

    // logout
    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        // api.defaults.headers.Authorization = null
        setUser(null)
        navigate("/signin")
    }

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, signin, logout }}>
            {children}
        </AuthContext.Provider>
    )
}