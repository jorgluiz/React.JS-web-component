import React from "react"

import "./ButtonControl.css"

const ButtonControl = (props) => {

    const { text, onClick } = props

    return (
        <button className="button-controls" onClick={onClick}>
            {text}
        </button>
    )
}

export default ButtonControl