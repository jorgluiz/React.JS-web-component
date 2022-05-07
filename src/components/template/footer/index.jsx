import React from "react";

import 'font-awesome/css/font-awesome.min.css'

import "./Footer.css"

const Footer = () => {
    return (
        <footer className="mainFooter">
            <span>
                developed with <i className='fa fa-heart text-danger'></i> by
                <strong> Jor<span className='text-danger'>g</span>e Luiz</strong>
            </span>
        </footer>
    )
}

export default Footer