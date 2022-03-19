import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './AddEdit.css'
import fireDb from "../firebase";
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';
import Fadein from 'react-fade-in'
import { useUserContext } from "../context/userContext";
import { storage } from './firebase2';
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'

const initialState = {
    email: '',
    name: '',
    plate: '',
    contact: '',
    profilePhoto: '',
    popularity: 0,
}





const AddEdit = () => {


    const [progress, setProgress] = useState(0);
    const { user, logoutUser } = useUserContext();
    const history = useHistory();
    initialState.email = `${user.email}`
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});
    const [imagine, setImagine] = useState("https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/files%2Fuser-profile.png?alt=media&token=61426c21-f3a8-453e-a4d9-7bbe491f78ed");




    const { email, name, plate, contact, profilePhoto, popularity } = state;




    const routeChange = () => {
        let path = `./Home`;
        history.push(path);
    }


    useEffect(() => {
        fireDb.child("plates").orderByChild("email").equalTo(user.email).on("value", (snapshot) => {
            const data = snapshot.val();
            setData(data);
        })
        if (data === null) {

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
    //PENTRU UPLOAD IMAGINI
    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);
    }

    const uploadFiles = (file) => {
        if (!file) return;
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(prog);
        }, (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(url => {
                        setImagine(url)
                        initialState.profilePhoto = url
                    })

                console.log(initialState);




            }
        )

    }






    return (
        <div style={{ marginTop: '0px' }}>

            <h3>Uploaded {progress}</h3>
            <form onSubmit={formHandler}>

                <input type="file" className='input' ></input>
                <button type="submit">Upload</button>

                <img className='profilePhoto' src={imagine} ></img>
            </form>
            <form style={{ fontSize: '50px', margin: 'auto', padding: '15px', maxWidth: '300px ', alignContent: 'center' }}
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
