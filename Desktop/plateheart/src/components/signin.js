import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import './signin.css';
import Fadein from 'react-fade-in'
import { toast } from "react-toastify";
const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const [showResults, setShowResults] = React.useState(false)
  const [disable, setDisable] = React.useState(false);
  const onClick = () => {
    setShowResults(true)
    setDisable(true);
  }

  // window.scrollTo(0, 0);
  // window.addEventListener("scroll", noscroll);
  // document.body.style.overflow = "hidden"
  // function noscroll() {
  //   window.scrollTo(0, 0);
  // }




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
      <div>
        <img className='loginlogo' src={"https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/assets%2Fwhiteheart.png?alt=media&token=2209be75-bcf6-4b38-b7ec-f05aac5ffd96"} />
        <img className='loginlogotext' src={"https://firebasestorage.googleapis.com/v0/b/plateheart-170b5.appspot.com/o/assets%2Flogotextwhite.png?alt=media&token=e5f2ca1c-18f1-46ea-a5ad-bb0929adbb82"} />

        <input className="showSignIn" disabled={disable} type="submit" value="Start now" onClick={onClick} />
        {showResults ? (
          <Fadein transitionDuration={2000}>
            <div id="results" className="search-results">

              <div className="form">

                <form onSubmit={onSubmit}>
                  <input style={{ color: "white", fontFamily: "GothamLight" }} placeholder="Email" type="email" ref={emailRef} />
                  <input placeholder="Password" type="password" ref={psdRef} />
                  <button className="buttonSignin" type="submit">Sign In</button>
                  <p style={{ color: "white", fontFamily: "GothamLight" }} onClick={forgotPasswordHandler}>Forgot Password?</p>

                </form>
              </div>
            </div>
          </Fadein>
        ) : null}
      </div>

    </>
  );
};




export default Signin;

