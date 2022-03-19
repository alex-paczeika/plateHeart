import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useUserContext } from "../context/userContext";
import fireDb from '../firebase'
import Fadein from 'react-fade-in'
import './MyPlate.css';
import Footer from '../components/Footer';
const MyPlate = () => {
    const { user, logoutUser } = useUserContext();
    const [data, setData] = useState({});


    useEffect(() => {

        fireDb.child("plates").orderByChild("email").equalTo(user.email).on("value", (snapshot) => {
            console.log("rrrroo", snapshot.val());
            const data = snapshot.val();
            setData(data);
            console.log(data);
        })
    }, []);



    return (

        <div>
            <Header></Header>
            <Footer></Footer>

            <Fadein transitionDuration={5000}>
                {Object.keys(data).map((id, index) => {
                    return (<>
                        <div>
                            <img className="profilePhoto" src={data[id].profilePhoto} />
                            <h1 className='result'>{data[id].plate}</h1>
                            <h2 className='top' >{data[id].name}</h2>
                            <h2 className='top'>{data[id].email}</h2>
                            <h2 className='top'>{data[id].contact}</h2>
                        </div>

                    </>
                    )
                })}
            </Fadein>
        </div >
    )
}

export default MyPlate
