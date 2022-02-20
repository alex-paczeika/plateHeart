import React, { useState, useEffect } from 'react'
import fireDb from "../firebase";
import { Link } from 'react-router-dom';
import './Home.css';
import useSound from 'use-sound';
import { toast } from 'react-toastify';
import boopSfx from './buttonSound.mp3';
import Fadein from 'react-fade-in'
const Home = () => {


    //for sound onclick={play}
    const [play] = useSound(boopSfx);


    const [data, setData] = useState({});
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

    useEffect(() => {
        toast.success("Tap to know your crush");
    }, [])

    return (
        < div className='body' styles={{ marginTop: '0px' }}>
            <div >
                <img className='between' src={require('./between.png')} />
            </div>
            <Fadein transitionDuration={5000}>
                <table className='styled-table'>



                    {Object.keys(data).map((id, index) => {
                        return (
                            <div >

                                <div className="head-text">
                                    <div >
                                        <Link to={`/view/${id}`}>
                                            <button onClick={play} className='viewbutton' >
                                                <img className="head-image" src={require('./circle.gif')} alt="Freedom Blog" />
                                            </button>
                                        </Link>
                                    </div>
                                    <div class='text-on-image'>

                                        <h2> {data[id].plate}</h2>

                                    </div>
                                </div>

                                <td >

                                </td>

                            </div>
                        )
                    })}

                </table>
            </Fadein>
        </div >
    )
}

export default Home
