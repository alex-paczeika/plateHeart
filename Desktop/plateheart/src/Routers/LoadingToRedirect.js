import React, { useState, useEffect } from 'react'
import { } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const LoadingToRedirect = () => {
    const [count, setCount] = useState(5);
    const history = useHistory();


    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount)
        }, 1000)
        count === 0 && history.push("/")
        return () => clearInterval(interval);
    }, [count, history])
    return (
        <div>
            <p>Redirecting you in {count} seconds</p>
        </div>
    )
}

export default LoadingToRedirect
