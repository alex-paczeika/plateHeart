import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import { useUserContext } from "../context/userContext";
import fireDb from '../firebase'
import './Notifications.css'
import Header from '../components/Header';
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



                setnumberLikes(Object.values(data[id].liked).length / 2)


                // console.log(data[id].liked[`${cheile[0]}`]);





                // Object.values(data[id].liked).filter((likeUser) => likeUser % 2 === 0).map((acc) => {

                //     console.log(acc);
                // }
                // )

            })


        })

        // Object.keys(data).map((id, index) => {
        //     Object.values(data[id].liked).map(likeUser =>
        //         fireDb.child("plates").orderByChild("plate").equalTo(likeUser).on("value", (snapshot) => {
        //             const dataforPhoto = snapshot.val();
        //             // setdataforPhoto([...dataforPhoto, tr]);

        //             setdataforPhoto(dataforPhoto);

        //             console.log("photoobject", dataforPhoto);



        //         })
        //     )




        // })


    }, []);

    function photosLikedObject() {
        let photoObject = [];
        Object.keys(data).map((id, index) => {


            const cheile = Object.keys(data[id].liked);


            for (let i = 0; i < cheile.length; i++) {
                if (i % 2 != 0) {
                    photoObject.push(data[id].liked[`${cheile[i]}`])
                }

            }

        }

        )
        return photoObject;
    }

    function plateLikedObject() {
        let plateObject = [];
        Object.keys(data).map((id, index) => {


            const cheile = Object.keys(data[id].liked);

            for (let i = 0; i < cheile.length; i++) {
                if (i % 2 === 0) {
                    plateObject.push(data[id].liked[`${cheile[i]}`])
                }

            }

        }

        )

        return plateObject;
    }




    console.log(photosLikedObject(), plateLikedObject());
    return (
        <div>
            <Header></Header>
            <h1>Likes</h1>







            <Footer numberLikes={numberLikes} ></Footer>
            {Object.keys(data).map((id, index) => {

                return (<>
                    <div>
                        {plateLikedObject() === "undefined" ? <h2>nu ai likeuri frt</h2> :
                            Object.values(plateLikedObject()).map(likePlate => <h2 className='profilePlateLike'>{likePlate}</h2>)}

                        {plateLikedObject() === "undefined" ? <h2>nu ai likeuri frt</h2> :
                            Object.values(photosLikedObject()).map(likePhoto => <img className='profilePhotoLike' src={likePhoto}></img>)}

                        {/* <p>{testooo()}</p>
                        <img src={testooo()[0]} ></img> */}

                        {/* {typeof data[id].liked === "undefined" ? <h2>nu ai likeuri frt</h2> :
                            Object.values(data[id].liked).filter((likeUser) => likeUser % 2 === 0).map((acc) => <h2>{acc}</h2>)} */}

                        {/* {Object.values(data[id].liked).map(likeUser => {

                            fireDb.child("plates").orderByChild("plate").equalTo(likeUser).on("value", (snapshot) => {
                                const dataforPhoto = snapshot.val();
                                // setdataforPhoto(dataforPhoto); 
                                <h1>tessst</h1>
                                Object.keys(dataforPhoto).map((id, index) => {
                                    console.log(id);
                                })
                                // console.log("photoobject", dataforPhoto);



                            })
                        }



                        )} */}



                    </div>




                </>
                )
            })}






        </div>
    )
}

export default Notifications
