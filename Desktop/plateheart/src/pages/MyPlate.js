import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { useUserContext } from "../context/userContext";
import fireDb from '../firebase'
import { toast } from 'react-toastify';
import Fadein from 'react-fade-in'
import './MyPlate.css';
import Footer from '../components/Footer';
const MyPlate = () => {
    const { user, logoutUser } = useUserContext();
    const [data, setData] = useState({});
    const history = useHistory();

    const onDelete = (id) => {
        if (window.confirm("Are you sure you want delete?")) {
            fireDb.child(`plates/${id}`).remove((err) => {
                if (err) {
                    toast.error(err)
                }
                else {
                    toast.success("Contact Deleted Succesfully")
                }
            })
        }
    }
    const routeChange = () => {
        let path = `./`;
        history.push(path);
    }

    function redirectToDelete() {

        routeChange();
        console.log("test");
        Object.keys(data).map((id, index) => {
            onDelete(id);
        })
    }

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
                            <label style={{ fontSize: '25px' }} htmlFor='name'>Name:</label>
                            <h1 className='result'>{data[id].name}</h1>
                            <label style={{ fontSize: '25px' }} htmlFor='name'>Email:</label>
                            <h1 className='result'>{data[id].email}</h1>
                            <label style={{ fontSize: '25px' }} htmlFor='name'>Plate:</label>
                            <h1 className='result'>{data[id].plate}</h1>
                            <label style={{ fontSize: '25px' }} htmlFor='name'>Instagram:</label>
                            <h1 className='result'>{data[id].contact}</h1>
                        </div>
                        {/* <button className='button' onClick={() => { onDelete(id); logoutUser() }}></button> */}
                        <button className='delete' onClick={redirectToDelete}>Delete</button>
                        <button className='delete' onClick={logoutUser}>Logout</button>
                    </>
                    )
                })}
            </Fadein>





        </div>
    )
}

export default MyPlate
