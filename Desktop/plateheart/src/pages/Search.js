import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import fireDb from '../firebase'
import './Search.css'
import './Home.css'
import Header from '../components/Header';
import Fadein from 'react-fade-in'
import Footer from '../components/Footer';
const Search = () => {


    const [data, setData] = useState({});

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let search = query.get("name");
    // console.log("search", search);

    useEffect(() => {
        searchData();

    }, [search])

    const searchData = () => {
        fireDb.child("plates").orderByChild("plate").equalTo(search).on("value", (snapshot) => {
            console.log("yoo", snapshot.val());
            if (snapshot.val()) {
                const data = snapshot.val();
                setData(data);
            }
        })
    }

    return (
        <>

            < div className='searchbackground' >
                <Header></Header>
                <Footer></Footer>
                {Object.keys(data).length === 0 ? (
                    <h2>No Search Found with that number {query.get("name")}. Be sure you write the plate number corectly.</h2>
                ) : (



                    <div>
                        {Object.keys(data).map((id, index) => {
                            return (
                                <div >
                                    <div >
                                        <Link to={`/view/${id}`}>
                                            {/* <button className='viewbutton' >
                                                    <Fadein transitionDuration={7000}>
                                                        <div class='text-on-image'>

                                                            <h2> {data[id].plate}</h2>

                                                        </div>
                                                    </Fadein>

                                                </button> */}
                                            <button className='resultPlate'> {data[id].plate}</button>
                                        </Link>
                                    </div>

                                </div>
                            )
                        })}
                    </div>


                )}

            </div >
        </>
    )
}

export default Search
