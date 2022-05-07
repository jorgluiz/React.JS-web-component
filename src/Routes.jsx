// sistema de rotas faz chaveamento entra as páginas, em função da URL
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useContext } from "react"; // hook context

//pages
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Layout from "../src/components/layout"
import NotFoundPage from "./pages/notfound"
import PdfPage from "./pages/pdf"
import PostsPage from "./pages/posts"
import SearchPage from "./pages/search"

import Loading from "./components/loading";
///////// FN       // createContext()    
import { AuthContext, AuthProvider } from "./components/contexts/Auth";

const AppRoutes = () => {

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext)

        if (loading) {
            return <Loading />
        }

        if (!authenticated) {
            return <Navigate to="/signin" />
        }

        // component Private
        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/signin" element={<SigninPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route exact path="/" element={<Private> <Layout/> </Private>} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/pdf" element={<Private> <PdfPage /> </Private>} />
                    <Route path="/post" element={<Private> <PostsPage /> </Private>} />
                    <Route path="/search" element={<Private> <SearchPage /> </Private>} />
                </Routes>
            </AuthProvider>
        </Router >
    )
}

export default AppRoutes