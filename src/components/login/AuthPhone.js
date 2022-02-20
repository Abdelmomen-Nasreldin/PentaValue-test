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
    e.preventDefault();
    let phone = phoneRef.current.value;
      setExpand(true);
    dispatch(requestOTP(phone));   
  };

  const verifyOtp = () => {
    let otp = otpRef.current.value;
    dispatch(verifyOTP(otp));
  };
  return (
    <div className={`${classes.auth__component}`}>
      <div className={`${classes.auth} d-flex flex-column`}>
        <form onSubmit={requestOtp} className={classes.auth__form}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Mobile Phone
            </label>
            <input
              type="tel"
              className={`form-control`}
              pattern="^[+][0-9]+"
              placeholder='+201006150263'
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={phoneRef}
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your number with anyone else.
            </div>
          </div>

          <input type="submit" className="btn btn-primary" />
        </form>
        <div className={`d-flex justify-content-around flex-wrap ${classes.verify}`}>
          {expand && <input  className={`mx-2 `} type="text" ref={otpRef} />}
          {expand && <button className="btn btn-success" onClick={verifyOtp}>verify OTP</button>}     
        </div>
        <div id="replica-container"></div>
      </div>
    </div>
  );
};

export default AuthPhone;
