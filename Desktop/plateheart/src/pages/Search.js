import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import fireDb from '../firebase'
import './Search.css'

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
                                    <div className='codepen-wrapper'>
                                        <tr className='registration-ui' key={id}>
                                            {/* <th scope='row'>{index + 1}</th> */}
                                            {/* <td>{data[id].name}</td> */}
                                            <td>{data[id].plate}</td>
                                            {/*  <td>{data[id].contact}</td> */}

                                        </tr>
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
