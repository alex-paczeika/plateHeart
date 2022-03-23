import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import { useUserContext } from "../context/userContext";
import fireDb from '../firebase'
import './Notifications.css'
import Header from '../components/Header';
import FadeIn from 'react-fade-in/lib/FadeIn';
const Notifications = () => {

    const { user, logoutUser } = useUserContext();
    const [data, setData] = useState({});
    const [numberLikes, setnumberLikes] = useState(0);
    const [dataforPhoto, setdataforPhoto] = useState();
    const [photoArray, setphotoArray] = useState([]);



    useEffect(() => {

        fireDb.child("plates").orderByChild("email").equalTo(user.email).on("value", (snapshot) => {
            // console.log("rrrroo", snapshot.val());
            const data = snapshot.val();
            setData(data);
            // console.log("data", data);

            Object.keys(data).map((id, index) => {



                setnumberLikes(Object.values(data[id].liked).filter((v, i, a) => a.indexOf(v) === i).length / 2)



            })


        })



    }, []);

    function photosLikedObject() {
        let photoObject = [];
        Object.keys(data).map((id, index) => {

            // console.log(Object.keys(data[id].liked));
            // const cheile = Object.keys(data[id].liked);





            if (data[id].liked !== undefined) {
                for (let i = 0; i < Object.keys(data[id].liked).length; i++) {
                    if (i % 2 != 0) {
                        photoObject.push(data[id].liked[`${Object.keys(data[id].liked)[i]}`])
                    }

                }
            } else
                return 3;



        }

        )
        return photoObject;
    }


    function plateLikedObject() {
        let plateObject = [];
        Object.keys(data).map((id, index) => {



            if (data[id].liked !== undefined) {
                for (let i = 0; i < Object.keys(data[id].liked).length; i++) {
                    if (i % 2 === 0) {
                        plateObject.push(data[id].liked[`${Object.keys(data[id].liked)[i]}`])
                    }

                }
            } else
                return 3;
        }
        )

        return plateObject;
    }





    return (
        <div>
            <Header></Header>







            <Footer numberLikes={numberLikes} ></Footer>
            {Object.keys(data).map((id, index) => {

                return (<>
                    <div>
                        {data[id].liked === undefined ? (

                            <>

                                <img className='likePhotoNotification' src='https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/assets%2Flikephoto.png?alt=media&token=c5f9ef4c-32d0-4b32-b2d7-ef65065a35af'></img>
                                {/* <p >Welcome to PlateHeart,<br /> {data[id].name}</p> */}
                                <h2>Activity</h2>
                                <p >When someone likes you profile,<br />you'll see it here.</p>
                            </>

                        ) : (
                            <FadeIn>
                                <div className='row'>
                                    <div className='column' >
                                        {Object.values(photosLikedObject()).filter((v, i, a) => a.indexOf(v) === i).map(likePhoto => <img className='profilePhotoLike' src={likePhoto}></img>)}


                                    </div>
                                    <div className='column'>

                                        {Object.values(plateLikedObject()).filter((v, i, a) => a.indexOf(v) === i).map(likePlate => <h3 className='profilePlateLike'>{likePlate} liked your profile. </h3>)}
                                    </div>


                                </div>
                            </FadeIn>
                        )}

                    </div>


                </>
                )
            })}






        </div >
    )
}

export default Notifications
