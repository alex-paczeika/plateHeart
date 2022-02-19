import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './AddEdit.css'
import fireDb from "../firebase";
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import useSound from 'use-sound'
import boopSfx from './buttonSound.mp3';


const initialState = {
    name: '',
    plate: '',
    contact: '',
}



const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});
    const [play] = useSound(boopSfx);
    const { name, plate, contact } = state;




    useEffect(() => {
        toast.warn("Please add only your car in order to have a match.");
    }, [])

    const handlerInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });

    };
    const handleSubmit = (e) => {

        e.preventDefault();

        if (!name || !plate || !contact) {
            toast.error('Please provide value in each input field')
        } else {
            fireDb.child("plates").push(state, (err) => {
                if (err) {
                    toast.error(err);
                } else {
                    toast.success("Plate added Successfully, you can jump to Home");

                }
            })



        }
    };
    return (
        <div style={{ marginTop: '0px' }}>
            <div >
                <img className='between' src={require('./between.png')} />
            </div>
            <form onClick={play} style={{ fontSize: '50px', margin: 'auto', padding: '15px', maxWidth: '300px ', alignContent: 'center' }}
                onSubmit={handleSubmit}>
                <div className='namefield' >
                    <label style={{ fontSize: '25px' }} htmlFor='name'>My name is</label>
                    <input type='text' id='name' name='name' placeholder='Your Name...' value={name} onChange={handlerInputChange}></input>
                    <label style={{ fontSize: '25px' }} htmlFor='plate'>My plate number</label>
                    <input type='plate' id='plate' name='plate' placeholder='For ex. TM01ZZZ' value={plate.toLocaleUpperCase()} onChange={handlerInputChange}></input>
                    <label style={{ fontSize: '25px' }} htmlFor='contact'>My Instagram user is</label>
                    <input type='text' id='contact' name='contact' placeholder='Your Instagram ID...' value={contact} onChange={handlerInputChange}></input>

                </div>
                <input className='save' type='submit' value='Save'></input>

            </form>

        </div >
    )
}

export default withRouter(AddEdit);