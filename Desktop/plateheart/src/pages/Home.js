import React, { useState, useEffect } from 'react'
import fireDb from "../firebase";
import { Link, useHistory } from 'react-router-dom';
import './Home.css';
import useSound from 'use-sound';
import boopSfx from './buttonSound.mp3';
import Fadein from 'react-fade-in'
import Header from '../components/Header';
import Footer from '../components/Footer';
const Home = () => {


    //for sound onclick={play}
    const [play] = useSound(boopSfx);


    const [data, setData] = useState({});
    const [search, setSearch] = useState('');

    const history = useHistory();
    useEffect(() => {
        fireDb.child("plates").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() })
            } else {
                setData({});
            }
        });

        return () => {
            setData({})
        };
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?name=${search}`)
        setSearch("");

    }


    useEffect(() => {
        // toast.info("Tap the circle to know your crush");
    }, [])



    return (
        < div className='body' styles={{ marginTop: '0px' }}>
            <Header></Header>
            <Footer></Footer>
            {/* <div >
                <img className='between' src={require('./between.png')} />

            </div> */}

            <Fadein transitionDuration={5000}>
                <table className='styled-table'>
                    {/* <img className="head-image" src={require('./circle.gif')} /> */}




                </table>

                <form className='form' onSubmit={handleSubmit} style={{ display: 'inline', }}>
                    <input
                        type='text'
                        className='inputField'
                        placeholder='🔍          type the plate'
                        onChange={(e) => setSearch(e.target.value.toLocaleUpperCase())}
                        value={search}

                    ></input>

                    <p>{`\n`}</p>
                    <button onClick={play} className='search'>Find the crush</button>
                </form>
            </Fadein>
        </div >
    )
}

export default Home
