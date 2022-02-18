import React from 'react'
import './About.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useUserContext } from "../context/userContext";

const About = (props) => {


    const { user, logoutUser } = useUserContext();
    return (

        <div style={{ color: 'white', marginTop: "0px" }}>
            <button onClick={logoutUser}>Log out</button>
            <div >
                <img className='between' src={require('./between.png')} />
            </div>
            <Link to='/home'>
                <button className='Start now'>Start Now</button>
            </Link>
            <div >
                <img className='' src={require('./item1.png')} />
            </div>
            <div >
                <img className='' src={require('./item2.png')} />
            </div>


        </div>
    )
}

export default About
