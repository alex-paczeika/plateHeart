import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './AddEdit.css'
import fireDb from "../firebase";
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import useSound from 'use-sound'
import boopSfx from './buttonSound.mp3';
import Header from '../components/Header';
import Fadein from 'react-fade-in'
import { useUserContext } from "../context/userContext";
const initialState = {
    email: '',
    name: '',
    plate: '',
    contact: '',
    popularity: 0,
}





const AddEdit = () => {
    const { user, logoutUser } = useUserContext();
    const history = useHistory();
    initialState.email = `${user.email}`
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});


    const [play] = useSound(boopSfx);
    const { email, name, plate, contact, popularity } = state;




    const routeChange = () => {
        let path = `./Home`;
        history.push(path);
    }





    useEffect(() => {
        toast.info("Add your car in order to be found by your crash.");

        fireDb.child("plates").orderByChild("email").equalTo(user.email).on("value", (snapshot) => {
            const data = snapshot.val();
            setData(data);

        })
        if (data === null) {
            console.log("test");
        } else {
            Object.keys(data).map((id, index) => {
                if (data[id].plate === 'null') {
                    console.log("e null");
                } else {
                    routeChange();
                }
            })
        }
    }, [data])

    const handlerInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });

    };
    const handleSubmit = (e) => {

        e.preventDefault();

        if (!name || !plate || !contact) {
            toast.error('Please provide value in each input field')
        } else {
            fireDb.child(`plates`).push(state, (err) => {

                if (err) {
                    toast.error(err);
                } else {
                    routeChange();


                }
            })




        }
    };
    return (
        <div style={{ marginTop: '0px' }}>
            {/* <Header></Header> */}
            <div >
                <img className='between' src={require('./between.png')} />
            </div>
            <form onClick={play} style={{ fontSize: '50px', margin: 'auto', padding: '15px', maxWidth: '300px ', alignContent: 'center' }}
                onSubmit={handleSubmit}>
                <div className='namefield' >

                    <label style={{ fontSize: '25px' }} htmlFor='name'>My name is</label>
                    <Fadein transitionDuration={5000}>
                        <input type='text' id='name' name='name' placeholder='Ex. Ioana , Alex ' value={name} onChange={handlerInputChange}></input>
                    </Fadein>
                    <label style={{ fontSize: '25px' }} htmlFor='plate'>My plate number</label>
                    <Fadein transitionDuration={5000}>
                        <input type='plate' id='plate' name='plate' placeholder='For ex. TM01ZZZ' onInput={(e) => e.target.value = ("" + e.target.value).toUpperCase()} value={plate.toUpperCase()} onChange={handlerInputChange}></input>
                    </Fadein>
                    <label style={{ fontSize: '25px' }} htmlFor='contact'>My Instagram ID is</label>
                    <Fadein transitionDuration={5000}>
                        <input type='text' id='contact' name='contact' placeholder='Your Instagram ID...' value={contact} onChange={handlerInputChange}></input>
                    </Fadein>

                </div>
                <input className='save' type='submit' value='Save'></input>

            </form>

        </div >
    )
}

export default withRouter(AddEdit);
