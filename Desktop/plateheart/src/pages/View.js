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

                <Fadein transitionDuration={6700}>
                    <p className='result' style={{ color: 'black' }}>Car Plate:  {user.plate}</p>
                </Fadein>
                <img className='resize' src={require('./progressbar.gif')} />
            </h2>
            <h2>

                <Fadein transitionDuration={6700} >
                    <p className='result' style={{ color: 'black' }}>Name:  {user.name}</p>
                </Fadein>
                <img className='resize' src={require('./progressbar.gif')} />
            </h2>

            <h2>

                <Fadein transitionDuration={6700}>
                    <p className='result' style={{ color: 'black' }}> Instagram:  {user.contact}</p>
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
