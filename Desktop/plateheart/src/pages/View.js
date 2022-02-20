import React, { useState, useEffect } from 'react'
import fireDb from '../firebase'
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./View.css";
import Fadein from 'react-fade-in'

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
            <div >
                <img className='between' src={require('./between.png')} />
            </div>
            <h2>
                <img className='resize' src={require('./carplate.png')} />
                <Fadein transitionDuration={5000}>
                    <p style={{ color: 'black' }}>   {user.plate}</p>
                </Fadein>

            </h2>
            <h2>
                <img className='resize' src={require('./name.png')} />
                <Fadein transitionDuration={20000} >
                    <p className='test' style={{ color: 'black' }}>   {user.name}</p>
                </Fadein>

            </h2>

            <h2>
                <img className='resize' src={require('./instagram.png')} />
                <Fadein transitionDuration={20000}>
                    <p style={{ color: 'black' }}>  {user.contact}</p>
                </Fadein>

            </h2>


            <Link to='/home'>
                <button className='goback'>Go Back</button>
            </Link>


        </div >
    )
}

export default View
