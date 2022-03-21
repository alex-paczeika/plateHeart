import React, { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";
import './Footer.css';
const Footer = (props) => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("Home");


    useEffect((e) => {
        if (location.pathname === '/home') {
            // setActiveTab("Home");
            const img1 = document.getElementById('img1');
            img1.setAttribute('src', require("../assets/homered.png"));

        } else if (location.pathname === '/myPlate') {
            // setActiveTab('myPlate')
            const img2 = document.getElementById('img2');
            img2.setAttribute('src', require("../assets/myprofilered.png"));
        }
        else if (location.pathname === '/setting') {
            // setActiveTab('setting')
            const img3 = document.getElementById('img3');
            img3.setAttribute('src', require("../assets/settingred.png"));
        }
        else if (location.pathname === '/notifications') {
            // setActiveTab('setting')
            const img4 = document.getElementById('img4');
            img4.setAttribute('src', require("../assets/notificationred.png"));
        }

    }, [location]);



    return (
        <div>
            <div className="footer">
                <Link style={{ textDecoration: 'none' }} to='/home'>
                    <img id='img1' className='logofooter' src={require("../assets/home.png")} />
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/myPlate'>
                    <img id='img2' className='logofooter' src={require("../assets/myprofile.png")} />
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/notifications'>
                    <a className='notification'>
                        <span className='badge'>{props.numberLikes}</span>
                        <img id='img4' className='logofooter' src={require("../assets/notification.png")} />
                    </a>
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/setting'>
                    <img id='img3' className='logofooter' src={require('../assets/setting.png')} />
                </Link>

            </div>
        </div>
    )
}

export default Footer
