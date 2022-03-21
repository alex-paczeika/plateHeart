import React, { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from "react-router-dom"
import './Header.css'
import useSound from 'use-sound'
import boopSfx from './buttonSound.mp3';
import { useUserContext } from "../context/userContext";

const Header = () => {

    const [activeTab, setActiveTab] = useState("Home");
    const location = useLocation();
    const [search, setSearch] = useState('');
    const [play] = useSound(boopSfx);
    const { user, logoutUser } = useUserContext();
    const history = useHistory();

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveTab("Home");
        } else if (location.pathname === '/add') {
            setActiveTab('AddContact')
        } else if (location.pathname === '/about') {
            setActiveTab('About')
        }

    }, [location]);



    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?name=${search}`)
        setSearch("");

    }

    return (
        <div className='header'>
            <div >
                <img className='logo' src={"https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/assets%2Flogotext.png?alt=media&token=76619059-8fef-413e-9cd5-33d2e0eac485"} />
            </div>

            {/* <div className='header-right'>

                <Link style={{ textDecoration: 'none' }} onClick={play} to='/home'>
                    <p className={`${activeTab === "Home" ? "active" : ""}`}
                        onClick={() => setActiveTab("Home")}>
                        Home
                    </p>
                </Link>
                <Link style={{ textDecoration: 'none' }} onClick={play} to='/myPlate'>
                    <p className={`${activeTab === "MyPlate" ? "active" : ""}`}
                        onClick={() => setActiveTab("MyPlate")}>
                        My Plate
                    </p>
                </Link>



            </div> */}
        </div >
    )
}

export default Header
