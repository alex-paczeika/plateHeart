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
            <div >
                <img className='between' src={require('./between.png')} />
            </div>
            <Fadein transitionDuration={5000}>
                <div >
                    <img className='logoAbout' src={require('./logo.png')} />
                </div>
                <div >
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
                </div>
                <Link to='/add'>
                    <button onClick={play} className='Startnow'>Start Now</button>
                </Link>
                <div >
                    <img className='' src={require('./finalbar.png')} />
                </div>
            </Fadein>
        </div>
    )
}

export default About
