import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import './signin.css';
import useSound from 'use-sound'
import boopSfx from './buttonSound.mp3';
import { toast } from "react-toastify";
const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();
  const [play] = useSound(boopSfx);


  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    toast.warn("Please enter the email in input field and after click Forgot Password")
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <>
      <img className='loginlogo' src={require('./logo.png')} />
      <div className="form">
        <h2> Login </h2>
        <form onSubmit={onSubmit}>
          <input placeholder="Email" type="email" ref={emailRef} />
          <input placeholder="Password" type="password" ref={psdRef} />
          <button onClick={play} className="buttonSignin" type="submit">Sign In</button>
          <p onClick={forgotPasswordHandler}>Forgot Password?</p>
        </form>
      </div>
    </>
  );
};

export default Signin;
