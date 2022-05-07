import React from "react";

import "./PageNotFound.css"
import Header from "../../components/template/header";

const NotFoundPage = () => {

    return (
        <>
            <Header/>
            <div className="page-not-found">
                <p className="p1">Page Not Found</p>
                <p className="p2">We couldn't find what you were looking for</p>
                <p className="p3"><strong>Please contact the owner of the site that linked you to he original URL and let them know their link is broken</strong></p>
            </div>
        </>

    )
}

export default NotFoundPage