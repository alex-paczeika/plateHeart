import React, { useState, useEffect } from 'react'
import fireDb from '../firebase'
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./View.css";
import Fadein from 'react-fade-in'
import Header from '../components/Header';

const View = () => {
    const [user, setUser] = useState({});
    const [counter, setCounter] = useState(0);
    const { id } = useParams();


    function incrementMethod() {
        fireDb.child(`plates/${id}/popularity`).get().then((snapshot) => {

            setCounter(snapshot.val() + 1);

            console.log(snapshot.val());

            fireDb.child(`plates/${id}`).update({ popularity: counter });
        })






    }


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
                    <p className='' style={{ color: 'white' }}>{counter}</p>
                    <p className='result' style={{ color: 'white' }}> {user.contact}</p>
                </Fadein>
                <img className='resize' src={require('./progressbar.gif')} />
            </h2>
            <button onClick={incrementMethod}  >Increment</button>

            <Link to='/home'>
                <button className='goback'>Go Back</button>
            </Link>


        </div >
    )
}

export default View
