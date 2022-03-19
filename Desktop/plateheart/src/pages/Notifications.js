import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import { useUserContext } from "../context/userContext";
import fireDb from '../firebase'

const Notifications = () => {

    const { user, logoutUser } = useUserContext();
    const [data, setData] = useState({});


    useEffect(() => {

        fireDb.child("plates").orderByChild("email").equalTo(user.email).on("value", (snapshot) => {
            console.log("rrrroo", snapshot.val());
            const data = snapshot.val();
            setData(data);
            // console.log(data);
        })
    }, []);



    return (
        <div>
            <h1>Likes</h1>
            <Footer></Footer>
            {Object.keys(data).map((id, index) => {

                return (<>
                    <div>

                        {data[id].liked.length === 0 ? <h2>nu ai frt</h2> :
                            Object.values(data[id].liked).map(like => <h2>{like}</h2>)}


                    </div>

                </>
                )
            })}
        </div>
    )
}

export default Notifications
