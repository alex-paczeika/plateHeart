import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import './signup.css';
import useSound from 'use-sound'
import boopSfx from './buttonSound.mp3';

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();
  const [play] = useSound(boopSfx);

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <>
      <img className='signuplogo' src={require('./logo.png')} />
      <div className="form">
        <h2> New User</h2>
        <form onSubmit={onSubmit}>
          <input placeholder="Email" type="email" ref={emailRef} />
          <input placeholder="Name" type="name" ref={nameRef} />
          <input placeholder="Password" type="password" ref={psdRef} />
          <button onClick={play} className="buttonSignUp" type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Signup;