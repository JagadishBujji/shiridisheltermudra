import { getAuth, RecaptchaVerifier } from "firebase/auth";

const auth = getAuth();

const generateRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "sign-in-button",
    {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      },
      // ,
      // defaultCountry:"IN"
    },
    auth
  );
};

function sendOtpHandler() {
  console.log("sendOtphandler");
  // e.preventDefault();
  // console.log(phoneNumber);
  // setIsPending(true);

  // if (phoneNumber === "" || phoneNumber === undefined || phoneNumber === null) {
  //   alert("Enter Valid Number!!!");
  //   setIsPending(false);
  //   return;
  // }

  // generateRecaptcha();

  // const appVerifier = window.recaptchaVerifier;

  // signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
  //   .then((confirmationResult) => {
  //     window.confirmationResult = confirmationResult;
  //     alert("OTP has been sent");
  //     setOtp("");
  //     setOtpSent(true);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     setIsPending(false);
  //   })
  //   .finally(() => {
  //     setIsPending(false);
  //   });
}
