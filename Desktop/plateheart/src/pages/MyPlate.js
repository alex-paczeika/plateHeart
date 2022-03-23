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

    // window.scrollTo(0, 0);
    // window.addEventListener("scroll", noscroll);
    // document.body.style.overflow = "hidden"
    // function noscroll() {
    //     window.scrollTo(0, 0);
    // }

    const numb = document.querySelector(".number");
    let counter = 0;
    setInterval(() => {

        counter += 1;
        numb.textContent = Math.floor(Math.random() * 10) + "%";

    }, 80);


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
            {/* <Header></Header> */}
            <Footer></Footer>


            {Object.keys(data).map((id, index) => {
                return (<>

                    <img className="profilePhoto" src={data[id].profilePhoto} />

                    <div id='myplatecontainer'>
                        <Fadein transitionDuration={3000}>
                            <div class="circular">
                                <div class="inner"></div>
                                <div class="number">0%</div>
                                <div class="circle">
                                    <div class="bar left">
                                        <div class="progress"></div>
                                    </div>
                                    <div class="bar right">
                                        <div class="progress"></div>
                                    </div>
                                </div>
                            </div>


                            <h1 className='myname' >{data[id].name}</h1>
                            <h2 className='myplatecss'>{data[id].plate}</h2>
                            {/* <p className='nametitle' >Name</p> */}

                            <p className='emailtitle' >Email</p>
                            <h2 className='myemail'>{data[id].email}</h2>
                            <p className='instargramtitle' >Instagram</p>
                            <h2 className='myinstagram'>{data[id].contact}</h2>
                        </Fadein>
                    </div>



                </>
                )
            })}

        </div >
    )
}

export default MyPlate
