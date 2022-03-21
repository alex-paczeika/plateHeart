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
    const [whoLikePhoto, sethoLikePhoto] = useState();

    function likeMethod() {
        console.log("show", whoLikePhoto);
        fireDb.child(`plates/${id}/liked`).push(whoLikePlate, (err) => {

            if (err) {
                console.log("error");
            } else {
                console.log("a mers");
            }
        })
        fireDb.child(`plates/${id}/liked`).push(whoLikePhoto, (err) => {

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
                const plate = data[id].plate
                const photo = data[id].profilePhoto
                sethoLikePlate(plate);
                sethoLikePhoto(data[id].profilePhoto);
                // console.log(data[id].profilePhoto);

            })
            console.log("photo", whoLikePhoto);
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

            <h2>
                <Fadein transitionDuration={6700} >
                </Fadein>
                <img className='instagram' src={"https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/assets%2Finstagram.png?alt=media&token=d659b1a7-9a98-435c-8906-3ac72c86d9c0"} />
            </h2>
            <h2>
                <Fadein transitionDuration={6700}>
                    <p className='' style={{ color: 'white' }}>{counter}</p>
                    <img className="profilePhoto" src={userActive.profilePhoto} />
                    <p className='result' style={{ color: 'white' }}> {userActive.contact}</p>
                </Fadein>
                <img className='resize' src={require('https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/assets%2Fprogressbar.gif?alt=media&token=597a5ae0-e4bf-44ab-b9a0-f50dc24f2b31')} />
            </h2>
            <button onClick={likeMethod}  >Like</button>
            <Link to='/home'>
                <button className='goback'>Go Back</button>
            </Link>
        </div >
    )
}

export default View
