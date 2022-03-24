import React, { useState, useEffect } from 'react'
import fireDb from '../firebase'
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min'
import "./View.css";
import Fadein from 'react-fade-in'
import Header from '../components/Header';
import { useUserContext } from "../context/userContext";


const View = () => {
    const [userActive, setUserActive] = useState({});

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

        <>

            <img className="profilePhotoview" src={userActive.profilePhoto} />
            <Link to='/home'>
                <img className='arrowbackview' src="https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/assets%2Farrrow.png?alt=media&token=c254fb58-fe5f-4f9b-80fb-b64bde4c4bbe"></img>
            </Link>
            <div id='myplatecontainerview'>

                <Fadein transitionDuration={3000}>



                    <h1 className='mynameview' >{userActive.name}</h1>
                    <h2 className='myplatecssview'>{userActive.plate}</h2>



                    <p className='instargramtitle' >Instagram</p>
                    <h2 className='myinstagramview'>{userActive.contact}</h2>
                    <button onClick={likeMethod}  >Like</button>
                </Fadein>




            </div>



        </>
    )
}


export default View

