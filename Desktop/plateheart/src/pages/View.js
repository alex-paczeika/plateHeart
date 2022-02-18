import React, { useState, useEffect } from 'react'
import fireDb from '../firebase'
import { useHistory, useParams, Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./View.css";

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
            <h2>
                <img className='resize' src={require('./name.png')} />
                <p style={{ color: 'white' }}>   {user.name}</p>

            </h2>
            <h2>
                <img className='resize' src={require('./carplate.png')} />
                <p style={{ color: 'white' }}>   {user.plate}</p>

            </h2>
            <h2>
                <img className='resize' src={require('./instagram.png')} />
                <p style={{ color: 'white' }}>  {user.contact}</p>

            </h2>


            <Link to='/'>
                <button className='goback'>Go Back</button>
            </Link>


        </div >
    )
}

export default View
