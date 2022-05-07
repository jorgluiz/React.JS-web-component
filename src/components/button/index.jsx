import React from "react"

import "./Button.css"

const Button = ({children}) => {
    return(
        <button className="myButton">
            {children}
        </button>
    )
}

export default Button