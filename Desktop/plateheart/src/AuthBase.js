import React from 'react'
import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";
import About from './pages/About';
import Home from './pages/Home';
import LoadingToRedirect from './Routers/LoadingToRedirect';




const AuthBase = () => {

    const { user, loading, error } = useUserContext();
    return (
        <div className="logi">
            {error && <p className="error">{error}</p>}
            {loading ? <LoadingToRedirect></LoadingToRedirect> : <> {user ? <About></About> : <Auth />} </>}
        </div >
    )
}

export default AuthBase
