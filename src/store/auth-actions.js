import { authActions } from "./auth";
import { authentication } from "../firebase-config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

//////////////////////////////////////////
// mobile verification using firebase //
/////////////////////////////////////////

const generateRecaptcha = () => {
  console.log("Recaptcha")
  window.recaptchaVerifier = new RecaptchaVerifier(
    "replica-container",
    {
      // size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        //   onSignInSubmit();
      },
    },
    authentication
  );
};
export const requestOTP = (phone) => {
  return (dispatch) => {
    generateRecaptcha();
    console.log("Recaptcha generated")
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, phone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        // alert("invalid number, please reload the page and try again");
        console.log(error);
      });
  };
};
export const verifyOTP = (otp) => {
  return (dispatch) => {
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          dispatch(authActions.login(user.accessToken));
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.log("error");
        });
    } else {
      alert("wrong OTP");
    }
  };
};

// const backendFirebase = "AIzaSyCANOKPtcRb8fdOt6i9bWhz0ZZl2Xlse7s";
// const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${backendFirebase}`;
// export const loginFireBase = (email, password) => {
//   return (dispatch) => {
//     axios
//       .post(loginUrl, {
//         email,
//         password,
//       })
//       .then((response) => {
//         const token = response.data.idToken
//         dispatch(authActions.login(token))
//       })
//       .catch((err) => {
//           console.log(err)
//         alert(err);
//       })
//       .finally(() => {
//         console.log("finally");
//       });
//   };
// };
