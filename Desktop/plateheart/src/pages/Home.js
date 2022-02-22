import React, { useState, useEffect } from 'react'
import fireDb from "../firebase";
import { Link, useHistory } from 'react-router-dom';
import './Home.css';
import useSound from 'use-sound';
import { toast } from 'react-toastify';
import boopSfx from './buttonSound.mp3';
import Fadein from 'react-fade-in'
import Header from '../components/Header';
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
            <div >
                <img className='between' src={require('./between.png')} />

            </div>

            <Fadein transitionDuration={5000}>
                <table className='styled-table'>
                    <img className="head-image" src={require('./circle.gif')} alt="Freedom Blog" />
                    <h2 className='getting' >Getting Data</h2>

                    {/* {Object.keys(data).map((id, index) => {
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
                    })} */}

                </table>
                <form onSubmit={handleSubmit} style={{ display: 'inline', }}>
                    <input
                        type='text'
                        className='inputField'
                        placeholder='🔍  TM01ZZZ'
                        onChange={(e) => setSearch(e.target.value.toLocaleUpperCase())}
                        value={search}

                    ></input>
                    <p>{`\n`}</p>
                    <button onClick={play} className='search'>Search</button>
                </form>
            </Fadein>
        </div >
    )
}

export default Home
