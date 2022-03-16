import React, { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";
import './Footer.css';
const Footer = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("Home");

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveTab("Home");
        } else if (location.pathname === '/myPlate') {
            setActiveTab('myPlate')
        }

    }, [location]);





    return (
        <div>
            <div className="footer">
                <Link style={{ textDecoration: 'none' }} to='/home'>
                    <img className='logofooter' src={require('./home.png')} />
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/myPlate'>
                    <img className='logofooter' src={require('./myprofile.jpeg')} />
                </Link>

            </div>
        </div>
    )
}

export default Footer
