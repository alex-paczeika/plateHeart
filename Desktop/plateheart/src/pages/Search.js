import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import fireDb from '../firebase'
import './Search.css'
import './Home.css'
const Search = () => {


    const [data, setData] = useState({});

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let search = query.get("name");
    console.log("search", search);

    useEffect(() => {
        searchData();

    }, [search])

    const searchData = () => {
        fireDb.child("plates").orderByChild("plate").equalTo(search).on("value", (snapshot) => {
            if (snapshot.val()) {
                const data = snapshot.val();
                setData(data);
            }
        })
    }

    return (
        <>

            < div styles={{ marginTop: '100px' }}>
                {Object.keys(data).length === 0 ? (
                    <h2>No Search Found with that name : {query.get("name")}</h2>
                ) : (
                    <table className='styled-table'>

                        <tbody>
                            {Object.keys(data).map((id, index) => {
                                return (
                                    <div className="head-text">
                                        <div >
                                            <Link to={`/view/${id}`}>
                                                <button className='viewbutton' >
                                                    <img className="head-image" src={require('./circle.gif')} alt="Freedom Blog" />
                                                </button>
                                            </Link>
                                        </div>
                                        <div class='text-on-image'>

                                            <h2> {data[id].plate}</h2>

                                        </div>
                                    </div>
                                )
                            })}
                        </tbody>
                    </table>

                )}

            </div >
        </>
    )
}

export default Search
