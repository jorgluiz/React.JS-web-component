import React from "react";

import "./Gird.css"

import Content from "../template/content"
import Header from "../template/header"
import Aside from "../template/aside"
import Footer from "../template/footer"

const Layout = ({children}) => {
    return (
        <div id="app-layout">
            <Content>{children}</Content>
            <Header />
            <Aside />
            <Footer />

        </div>
    )
}

export default Layout