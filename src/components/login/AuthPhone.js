import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { requestOTP, verifyOTP } from "../../store/auth-actions";
import classes from "./Auth.module.css";

const AuthPhone = () => {
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);
  const phoneRef = useRef("+2");
  const otpRef = useRef("");

  const requestOtp = (e) => {
    let phone = phoneRef.current.value;
    e.preventDefault();
    setExpand(true);
    dispatch(requestOTP(phone));
  };

  const verifyOtp = ()=>{
    let otp = otpRef.current.value;
    dispatch(verifyOTP(otp));
  }
  return (
    <div className={`${classes.auth}`}>
      <form onSubmit={requestOtp} className={classes.auth__form}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Mobile Phone
          </label>
          <input
            type="tel"
            className={`form-control`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={phoneRef}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <input type="submit" className="btn btn-primary" />
      </form>
      {expand && <input type="text" ref={otpRef} />}
      {expand && <button onClick={verifyOtp}>verify OTP</button>}
      <div id="replica-container"></div>
    </div>
  );
};

export default AuthPhone;
