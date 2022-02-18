import React, { useState, useEffect } from 'react'
import fireDb from "../firebase";
import { Link } from 'react-router-dom';
import './Home.css';
import './CarPlate.css';
const Home = () => {
    const [data, setData] = useState({});
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


    return (
        < div className='body' styles={{ marginTop: '0px' }}>
            <div >
                <img className='between' src={require('./between.png')} />
            </div>
            <table className='styled-table'>

                <tbody>
                    {Object.keys(data).map((id, index) => {
                        return (
                            <div className='codepen-wrapper'>
                                <tr className='registration-ui' key={id}>
                                    {/* <th scope='row'>{index + 1}</th> */}
                                    {/* <td>{data[id].name}</td> */}
                                    <td> {data[id].plate}</td>
                                    {/* <td>{data[id].contact}</td> */}
                                    <td>
                                        <Link to={`/view/${id}`}>
                                            <button className='btn btn-view'>View🔥</button>
                                        </Link>
                                    </td>
                                </tr>
                            </div>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default Home
