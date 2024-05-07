import React, { useState } from "react";
import InputField from "../../components/input-field";
import PrimaryButton from "../../components/button";
import BaseColors from "../../constant";
import {
  logo,
  modalBackground,
  iconLinkedin,
  iconGoogle,
  iconFacebook,
} from "../../assets";

export default function WebAuth() {
  // const [location, setLocation] = useState(null);
  const [isShow, setIsShow] = useState(false);

  // function handleLocationClick() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(success, error);
  //   } else {
  //     console.log("Geolocation not supported");
  //   }
  // }

  // function success(position) {
  //   const latitude = position.coords.latitude;
  //   const longitude = position.coords.longitude;
  //   setLocation({ latitude, longitude });
  //   console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

  //   // Make API call to OpenWeatherMap
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=<YOUR_API_KEY>&units=metric`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => console.log(error));
  // }

  // function error() {
  //   console.log("Unable to retrieve your location");
  // }

  return (
    <>
      <div className="row m-0 " style={{ background: "transparent" }}>
        <div
          className="col-12 col-md-7 py-5 d-flex flex-column align-items-center"
          style={{ background: "rgb(8, 11, 16)", height: "100%" }}
        >
          <div
            className={
              !isShow
                ? "d-flex justify-content-center w-100"
                : "AnimeText w-100"
            }
          >
            <img
              src={logo}
              alt=""
              style={{
                width: !isShow ? "187px" : "110px",
                transition: "width 0.9s ease",
              }}
            />
          </div>
          {!isShow ? (
            <>
              <h2 style={styles.title}>Login to your Account</h2>
              <div className="py-3 w-md-auto w-75 ">
                <InputField
                  label="Email"
                  placeholder="Enter your Email address"
                  type="email"
                  inputWidth={"100%"}
                />
              </div>
              <div className="py-3 w-75 ">
                <InputField
                  label="Password"
                  placeholder="Enter your Password"
                  type="password"
                  inputWidth={"100%"}
                />
              </div>
              <div className="py-3">
                <PrimaryButton label="Login" btnStyle={styles.Button} />
              </div>
              <p
                className="py-3"
                style={{
                  color: BaseColors.white,
                }}
              >
                Don't have an account yet?{" "}
                <a
                  onClick={() => setIsShow(true)}
                  style={{ color: BaseColors.yellow }}
                >
                  Sign up
                </a>
              </p>
            </>
          ) : (
            <>
              <h2 className="py-3" style={styles.title2}>
                Create your Account
              </h2>
              <div className="py-1 w-md-auto w-75  d-flex">
                <InputField
                  label="First Name"
                  placeholder="Enter your First Name"
                  type="text"
                  inputWidth={"100%"}
                />
                <InputField
                  label="Last Name"
                  placeholder="Enter your Last Name"
                  type="text"
                  inputWidth={"100%"}
                />
              </div>
              <div className="py-3 w-md-auto w-75 ">
                <InputField
                  label="Email"
                  placeholder="Enter your Email address"
                  type="email"
                  inputWidth={"100%"}
                />
              </div>
              <div className="py-3 w-75 ">
                <InputField
                  label="Password"
                  placeholder="Enter your Password"
                  type="password"
                  inputWidth={"100%"}
                />
              </div>
              <div className="py-3">
                <PrimaryButton
                  label="Create Account"
                  btnStyle={styles.Button}
                />
              </div>

              <p
                className="py-1"
                style={{
                  color: BaseColors.white,
                }}
              >
                Already Have Account?{" "}
                <a
                  onClick={() => setIsShow(false)}
                  style={{ color: BaseColors.yellow }}
                >
                  Sign In
                </a>
              </p>
            </>
          )}
          <p
            style={{
              fontSize: "18px",
              color: BaseColors.white,
            }}
          >
            - OR -
          </p>
          <div className="row m-0">
            <div className="col-4">
              <PrimaryButton
                label="Login with Google"
                variant="outline"
                colorScheme={BaseColors.light_grey}
                size="sm"
                background="transparent"
                leftIcon={
                  <img src={iconGoogle} height="28px" width="28px" alt="" />
                }
                btnStyle={styles.authSocialButton}
              />
            </div>
            <div className="col-4">
              <PrimaryButton
                label="Login with Facebook"
                variant="outline"
                colorScheme={BaseColors.light_grey}
                size="sm"
                background="transparent"
                leftIcon={
                  <img src={iconFacebook} height="30px" width="30px" alt="" />
                }
                btnStyle={styles.authSocialButton}
              />
            </div>
            <div className="col-4">
              <PrimaryButton
                label="Login with Linkedin"
                variant="outline"
                colorScheme={BaseColors.light_grey}
                size="sm"
                background="transparent"
                leftIcon={
                  <img src={iconLinkedin} height="30px" width="30px" alt="" />
                }
                btnStyle={styles.authSocialButton}
              />
            </div>
          </div>
        </div>

        <div
          className="col-5 text-family d-none d-md-block"
          style={styles.rightTextBlock}
        >
          <div className="row h-100 align-items-center">
            <div
              className="p-5 col d-flex align-items-center"
              style={{ background: "rgb(8, 11, 16, 0.8)", minHeight: "55vh" }}
            >
              <div>
                <h2 style={styles.heading}>Stay Informed,</h2>
                <h2 style={styles.heading}>Stay Ahead!</h2>
                <h4 style={styles.tagline}>
                  Your Source for Today's News and Tomorrow's Insights.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  Button: {
    padding: "20px 100px",
    Radius: "15px",
    background: BaseColors.medium_purple,
    color: BaseColors.white,
  },
  authSocialButton: {
    Radius: "12px",
    color: BaseColors.light_grey,
    background: "rgb(8, 11, 16)",
    padding: "20px 10px",
  },
  rightTextBlock: {
    backgroundImage: `url(${modalBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
    color: BaseColors.white,
    padding: 25,
  },
  title2: {
    fontWeight: "700",
    fontSize: 22,
    color: BaseColors.white,
  },
  heading: {
    fontWeight: "700",
    fontSize: 32,
    color: BaseColors.white,
  },
  tagline: {
    fontWeight: "400",
    fontSize: 22,
    color: BaseColors.white,
    marginTop: "20px",
  },
};
