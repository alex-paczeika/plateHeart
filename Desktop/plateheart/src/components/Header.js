import React, { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from "react-router-dom"
import './Header.css'
import useSound from 'use-sound'
import boopSfx from './buttonSound.mp3';

const Header = () => {

    const [activeTab, setActiveTab] = useState("Home");
    const location = useLocation();
    const [search, setSearch] = useState('');
    const [play] = useSound(boopSfx);

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
                {/* <img className='logo' src={require('./logo.png')} /> */}
            </div>

            <div className='header-right'>

                <form onSubmit={handleSubmit} style={{ display: 'inline' }}>
                    <input
                        type='text'
                        className='inputField'
                        placeholder='🔍  TM01ZZZ'
                        onChange={(e) => setSearch(e.target.value.toLocaleUpperCase())}
                        value={search}

                    ></input>

                </form>


                <Link onClick={play} to='/home'>
                    <p className={`${activeTab === "Home" ? "active" : ""}`}
                        onClick={() => setActiveTab("Home")}>

                        Home

                    </p>


                </Link>


                <Link onClick={play} to='/add'>
                    <p className={`${activeTab === "AddContact" ? "active" : ""}`}
                        onClick={() => setActiveTab("AddContact")}>
                        AddMyPlate
                    </p>

                </Link>
                <Link onClick={play} to='/about'>
                    <p className={`${activeTab === "About" ? "active" : ""}`}
                        onClick={() => setActiveTab("About")}>
                        About
                    </p>

                </Link>

            </div>
        </div >
    )
}

export default Header