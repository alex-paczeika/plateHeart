import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";
import './auth.css';

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };


  return (
    <>
      {!index ? <Signin /> : <Signup />
      }

      <p onClick={toggleIndex}>
        {!index ? <p style={{ color: "white" }} >New user? Click here</p> : <p style={{ color: "white" }} >Already have an account?</p>}
      </p>
    </>
  );
};

export default Auth;
