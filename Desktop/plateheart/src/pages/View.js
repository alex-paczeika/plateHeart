import React, { useState, useEffect } from 'react'
import fireDb from '../firebase'
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./View.css";
import Fadein from 'react-fade-in'
import Header from '../components/Header';

const View = () => {
    const [user, setUser] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fireDb.child(`plates/${id}`).get().then((snapshot) => {
            if (snapshot.exists()) {
                setUser({ ...snapshot.val() })
            } else {
                setUser({});
            }
        });
    }, [id]);

    console.log("user", user);
    return (

        <div style={{ marginBottom: "100px" }}>
            <Header></Header>
            <div >
                <img className='between' src={require('./between.png')} />
            </div>

            <h2>

                <Fadein transitionDuration={6700} >

                </Fadein>
                <img className='instagram' src={require('./instagram.png')} />
            </h2>

            <h2>

                <Fadein transitionDuration={6700}>
                    <p className='result' style={{ color: 'black' }}>{user.name}</p>
                    <p className='result' style={{ color: 'black' }}> {user.contact}</p>
                </Fadein>
                <img className='resize' src={require('./progressbar.gif')} />
            </h2>


            <Link to='/home'>
                <button className='goback'>Go Back</button>
            </Link>


        </div >
    )
}

export default View
