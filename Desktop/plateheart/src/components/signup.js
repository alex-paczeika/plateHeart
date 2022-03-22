import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import './signup.css';


const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();


  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <>
      <img className='loginlogo' src={"https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/assets%2Fwhiteheart.png?alt=media&token=2209be75-bcf6-4b38-b7ec-f05aac5ffd96"} />
      <img className='loginlogotext' src={"https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/assets%2Flogotextwhite.png?alt=media&token=e5f2ca1c-18f1-46ea-a5ad-bb0929adbb82"} />
      <div id="results" className="search-results">
        <div className="form">
          {/* <h2> New User</h2> */}
          <form onSubmit={onSubmit}>
            <input placeholder="Email" type="email" ref={emailRef} />
            <input placeholder="Name" type="name" ref={nameRef} />
            <input placeholder="Password" type="password" ref={psdRef} />
            <button className="buttonSignUp" type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
