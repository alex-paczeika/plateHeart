import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { useUserContext } from "../context/userContext";
import fireDb from '../firebase'
import { toast } from 'react-toastify';
import Fadein from 'react-fade-in'
import Footer from '../components/Footer';
import './Setting.css';

const Setting = () => {
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

            const data = snapshot.val();
            setData(data);
            const timer = setTimeout(() => console.log('Initial timeout!'), 5000);

        })
    }, []);


    return (
        <div>
            <Header></Header>
            <Footer></Footer>

            <button className='delete' >About</button>
            <button className='delete' onClick={redirectToDelete}>Erase my plate</button>
            <button className='delete' onClick={logoutUser}>Logout</button>
        </div>
    )
}

export default Setting
