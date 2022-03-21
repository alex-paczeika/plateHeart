import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useUserContext } from "../context/userContext";
import fireDb from '../firebase'
import { toast } from 'react-toastify';
import Fadein from 'react-fade-in'
import Footer from '../components/Footer';
import './Setting.css';
import styled from 'styled-components';

import Modal from './Modal';




const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
`

const Button = styled.button`
min-width: 100px;
padding: 16px 32px;
border-radius: 4px;
border: none;
background: #141414;
color: #fff;
font-size: 24px;
cursor: pointer;
`

const Setting = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }




    const { user, logoutUser } = useUserContext();
    const [data, setData] = useState({});
    const history = useHistory();

    const onDelete = (id) => {
        if (window.confirm("Are you sure you want delete?")) {
            routeChange();
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
            <Footer></Footer>
            <button onClick={openModal} className='about' >About</button>
            <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
            <button className='delete' onClick={redirectToDelete}>Erase my plate</button>
            <button className='logout' onClick={logoutUser}>Logout</button>
            <button className='share' onClick={() => { toast.success("Copied to clipboard"); navigator.clipboard.writeText("Check out PlateHeart...you can find your crush after car plate https://plateheart.com") }}>
                Share PlateHeart
            </button>
            <img className="justlogo" src={"https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/assets%2Fjustlogo.png?alt=media&token=27241bc5-2298-446e-8226-1190dce303ef"} />
            <h3 className='version' >Version 1.0.0</h3>
        </div>
    )
}

export default Setting
