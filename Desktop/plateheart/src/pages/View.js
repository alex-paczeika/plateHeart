import React, { useState, useEffect } from 'react'
import fireDb from '../firebase'
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./View.css";
import Fadein from 'react-fade-in'
import Header from '../components/Header';
import { useUserContext } from "../context/userContext";


const View = () => {
    const [userActive, setUserActive] = useState({});
    const [counter, setCounter] = useState(0);
    const { id } = useParams();
    const [data, setData] = useState({});
    const { user, logoutUser } = useUserContext();
    const [whoLikePlate, sethoLikePlate] = useState("");

    function likeMethod() {

        fireDb.child(`plates/${id}/liked`).push(whoLikePlate, (err) => {

            if (err) {
                console.log("error");
            } else {
                console.log("a mers");
            }
        })


    }

    useEffect(() => {
        fireDb.child("plates").orderByChild("email").equalTo(user.email).on("value", (snapshot) => {
            const data = snapshot.val();
            setData(data);
            Object.keys(data).map((id, index) => {
                const pl = data[id].plate
                sethoLikePlate(pl);
            })
            console.log(whoLikePlate);

        })

        fireDb.child(`plates/${id}`).get().then((snapshot) => {
            if (snapshot.exists()) {
                setUserActive({ ...snapshot.val() })
            } else {
                setUserActive({});
            }
        });
    }, [id]);




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
                    <img className="profilePhoto" src={userActive.profilePhoto} />
                    <p className='result' style={{ color: 'white' }}> {userActive.contact}</p>
                </Fadein>
                <img className='resize' src={require('./progressbar.gif')} />
            </h2>
            <button onClick={likeMethod}  >Like</button>
            <Link to='/home'>
                <button className='goback'>Go Back</button>
            </Link>
        </div >
    )
}

export default View
