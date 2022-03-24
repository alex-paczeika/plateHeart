import React from 'react'
import './About.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useUserContext } from "../context/userContext";

import Fadein from 'react-fade-in'
import Header from '../components/Header';
const About = (props) => {



    return (

        <div className='backgroundAbout'>
            {/* <Header></Header> */}

            < Fadein transitionDuration={5000} >

                <div >

                    <img className='logoAbout' src={"https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/assets%2Fwhiteheart.png?alt=media&token=2209be75-bcf6-4b38-b7ec-f05aac5ffd96"} />
                </div>
                <h2 className='welcometext' >Welcome to PlateHeart</h2>
                <Link to='/add'>

                    <button className='Startnow'>Join now</button>
                </Link>
                {/* <div >
                    <img className='' src={require('./finalbar.png')} />
                </div> */}

            </Fadein >
        </div >
    )
}

export default About
