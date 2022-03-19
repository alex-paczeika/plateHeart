import React, { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";
import './Footer.css';
const Footer = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("Home");


    useEffect((e) => {
        if (location.pathname === '/home') {
            // setActiveTab("Home");
            const img1 = document.getElementById('img1');
            img1.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/homered.png?alt=media&token=e64633c3-1559-4734-89bf-9cfe7904b26e');

        } else if (location.pathname === '/myPlate') {
            // setActiveTab('myPlate')
            const img2 = document.getElementById('img2');
            img2.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/myprofilered.png?alt=media&token=556803aa-e1fd-4608-b696-d2cd447c80e7');
        }
        else if (location.pathname === '/setting') {
            // setActiveTab('setting')
            const img3 = document.getElementById('img3');
            img3.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/settingred.png?alt=media&token=880168b7-9154-474e-acdc-463ad9dcd401');
        }
        else if (location.pathname === '/notifications') {
            // setActiveTab('setting')
            const img4 = document.getElementById('img4');
            img4.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/notificationred.png?alt=media&token=75fb45ca-84d9-454a-90f3-aa9efa5a0a46');
        }

    }, [location]);



    return (
        <div>
            <div className="footer">
                <Link style={{ textDecoration: 'none' }} to='/home'>
                    <img id='img1' className='logofooter' src={require('../assets/home.png')} />
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/myPlate'>
                    <img id='img2' className='logofooter' src={require('../assets/myprofile.png')} />
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/notifications'>
                    <img id='img4' className='logofooter' src={require('../assets/notification.png')} />
                </Link>
                <Link style={{ textDecoration: 'none' }} to='/setting'>
                    <img id='img3' className='logofooter' src={require('../assets/setting.png')} />
                </Link>
            </div>
        </div>
    )
}

export default Footer
