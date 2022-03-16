import React from 'react'
import Header from '../components/Header'
const Help = () => {
    return (
        <div>
            <Header></Header>
            <div >
                <img className='between' src={require('./between.png')} />
            </div>
            <h1>How it works</h1>
            <p>Let s say you  </p>
        </div>
    )
}

export default Help
