import React, { useState, useEffect } from 'react'
import fireDb from "../firebase";
import { Link, useHistory } from 'react-router-dom';
import './Home.css';
import Fadein from 'react-fade-in'
import Header from '../components/Header';
import Footer from '../components/Footer';
const Home = () => {

    const [data, setData] = useState({});
    const [search, setSearch] = useState('');
    const history = useHistory();

    //SETEAZA PAGINA FIXA FARA SCROLL
    // window.scrollTo(0, 0);
    // window.addEventListener("scroll", noscroll);
    // document.body.style.overflow = "hidden"
    // function noscroll() {
    //     window.scrollTo(0, 0);
    // }



    useEffect(() => {
        fireDb.child("plates").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                setData({ ...snapshot.val() })
            } else {
                setData({});
            }
        });

        return () => {
            setData({})
        };
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?name=${search}`)
        setSearch("");

    }



    return (
        < div className='body' styles={{ marginTop: '0px' }}>
            <Header></Header>
            <Footer></Footer>
            <Fadein transitionDuration={5000}>
                <table className='styled-table'>
                </table>
                <form className='form' onSubmit={handleSubmit} style={{ display: 'inline', }}>
                    <input
                        type='text'
                        className='inputField'
                        placeholder='🔍          type the plate'
                        onChange={(e) => setSearch(e.target.value.toLocaleUpperCase())}
                        value={search}
                    ></input>
                    <p>{`\n`}</p>
                    <button className='search'>Find the crush</button>
                </form>
            </Fadein>
        </div >
    )
}

export default Home
