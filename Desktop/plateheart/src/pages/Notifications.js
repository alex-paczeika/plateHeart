import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import { useUserContext } from "../context/userContext";
import fireDb from '../firebase'

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



                setnumberLikes(Object.values(data[id].liked).length)


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

    function testooo() {
        let a = [];
        Object.keys(data).map((id, index) => {


            // if (i % 2 === 0)
            //     console.log(Object.values(data[id].liked)[i]);

            const cheile = Object.keys(data[id].liked);

            for (let i = 0; i < cheile.length; i++) {
                if (i % 2 === 0) {
                    a.push(data[id].liked[`${cheile[i]}`])
                }

            }

            return a;





        }

        )
    }

    console.log(testooo());

    return (
        <div>
            <h1>Likes</h1>







            {/* <Footer numberLikes={numberLikes} ></Footer> */}
            {Object.keys(data).map((id, index) => {

                return (<>
                    <div>

                        {/* {typeof data[id].liked === "undefined" ? <h2>nu ai likeuri frt</h2> :
                            Object.values(data[id].liked).map(likeUser => <h2>{likeUser}</h2>)} */}

                        <p>{testooo()}</p>

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
