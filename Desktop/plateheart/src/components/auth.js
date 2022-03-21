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
        {!index ? "New user? Click here " : "Already have an acount?"}
      </p>
    </>
  );
};

export default Auth;
