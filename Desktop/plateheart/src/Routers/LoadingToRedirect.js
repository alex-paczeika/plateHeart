import React, { useState, useEffect } from 'react'
import { } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import './LoadingtoRedirect.css'

const LoadingToRedirect = () => {
    const [count, setCount] = useState(3);
    const history = useHistory();


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount)
        }, 1000)
        count === 0 && history.push("/")
        return () => clearInterval(interval);
    }, [count, history])


    return (
        <div className='loadingScreen'>
            {/* <Header></Header> */}
            <img className='logoonLoading' src='https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/assets%2Fwhiteheart.png?alt=media&token=2209be75-bcf6-4b38-b7ec-f05aac5ffd96' ></img>
        </div>
    )
}

export default LoadingToRedirect
