import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";
import './auth.css';

const Auth = () => {

  // console.log('sdas', props.showResults);

  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };


  return (
    <>
      {!index ? <Signin /> : <Signup />
      }

      <p onClick={toggleIndex}>
        {!index ? <p style={{ color: "white", fontFamily: "GothamLight" }} >New user? Click here</p> : <p style={{ color: "white", fontFamily: "GothamLight" }} >Already have an account?</p>}
      </p>
    </>
  );
};

export default Auth;
