import React, { useState } from "react";
import {useDispatch} from "react-redux"
import classes from './Auth.module.css'
import {authActions} from '../../store/auth'

const Auth = () => {

const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let isEmailValid = email.includes('@')  
  let isPasswordValid = password.length > 5 
const isFormValid = isEmailValid && isPasswordValid
  
  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login())
  };
  return (
    <div className={`${classes.auth}`}>
      <form className={classes.auth__form}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`${isEmailValid? classes.valid : classes.inValid} form-control`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`${isPasswordValid? classes.valid : classes.inValid} form-control`}
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary"
          onClick={formSubmitHandler}
          disabled={!isFormValid}
        />
      </form>
    </div>
  );
};

export default Auth;
