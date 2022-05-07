import React, { useContext, useEffect, useState } from "react"
import { useRef } from "react"
import { Link } from "react-router-dom"

import { AuthContext } from "../../contexts/Auth"
// import { useOutSideClick } from "../../../utils/dropdown/useOutSideClick"

import "./Header.css"

const Header = () => {
    const refContainer = useRef()

    const { logout } = useContext(AuthContext)

    const user = localStorage.getItem("user")
    const userName = JSON.parse(user)

    const initials = userName.name.substr(0, 2)

    const [isOpen, setIsOpen] = useState(false)
    const onClick = () => setIsOpen(!isOpen)

    useEffect(() => {
        const handler = (event) => {
            if (!refContainer.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })



    return (
        <header  className='mainHeader'>
            <div className="home"><Link to={"/"}>Home</Link></div>
            <div className="mainDropdown">
                <button ref={refContainer} onClick={onClick} className="main-button">
                    <div className="user-position userPosition-initials">{initials.toUpperCase()}</div>
                </button>
                <div  className={`dropdown-content menu ${isOpen ? "active" : "inactive"}`}>
                    <div className="exit" onClick={logout}>Exit</div>
                    <div className="welcome">Welcome {userName.name}</div>
                </div>
            </div>
        </header>
    )
}

export default Header

//

// useEffect(() => {
//     let handle = (event) => {
//         if (!menuRef.current.contains(event.target)) {
//             setIsExpanded(false)
//         }
//     }
//     document.addEventListener("mousedown", handle)

//     return () => {
//         document.removeEventListener("mousedown", handle)
//     }
// })