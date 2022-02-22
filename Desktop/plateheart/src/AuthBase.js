import React from 'react'
import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";
import About from './pages/About';
import Home from './pages/Home';




const AuthBase = () => {

    const { user, loading, error } = useUserContext();
    return (
        <div className="logi">
            {error && <p className="error">{error}</p>}
            {loading ? <h2>Loading...</h2> : <> {user ? <About></About> : <Auth />} </>}
        </div >
    )
}

export default AuthBase
