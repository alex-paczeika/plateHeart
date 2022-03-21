import React from 'react'
import './About.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useUserContext } from "../context/userContext";
import useSound from 'use-sound'
import boopSfx from './buttonSound.mp3';
import Fadein from 'react-fade-in'
import Header from '../components/Header';
const About = (props) => {


    const [play] = useSound(boopSfx);

    return (

        <div style={{ color: 'white', marginTop: "0px" }}>
            {/* <Header></Header> */}

            <Fadein transitionDuration={5000}>
                <div >
                    <img className='logoAbout' src={"https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/assets%2Flogo.png?alt=media&token=7e06c248-f47e-4c0d-adae-06bf36129628"} />
                </div>
                {/* <div >
                    <img className='publicitylogo' src={require('./publicityfinal.png')} />
                </div>
                <div >
                    <img className='downarrowgif' src={require('./loader.gif')} />
                </div>
                <div >
                    <img className='textpublicity' src={require('./textpublicity.png')} />
                </div>
                <div >
                    <img className='' src={require('./finalbar.png')} />
                </div>

                <div >
                    <img className='publicitylogo' src={require('./marketingphoto.png')} />
                </div> */}
                <Link to='/add'>
                    <button onClick={play} className='Startnow'>Start Now</button>
                </Link>
                {/* <div >
                    <img className='' src={require('./finalbar.png')} />
                </div> */}
            </Fadein>
        </div>
    )
}

export default About
