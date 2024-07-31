import React, { useEffect, useState } from "react";
import useSWR from "swr";
import InputField from "../../components/input-field";
import PrimaryButton from "../../components/button";
import BaseColors from "../../constant";
import axios from "axios";
import {
  logo,
  modalBackground,
  iconLinkedin,
  iconGoogle,
  iconFacebook,
} from "../../assets";
import { background, Spinner, useToast } from "@chakra-ui/react";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import PrimaryModal from "../../components/modal";
import ShowMessage from "../../config/toast";

export default function WebAuth() {
  const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState();
  const [isShow, setIsShow] = useState(false);
  const [isShowForget, setIsShowForget] = useState(false);
  const [isShowReset, setIsShowReset] = useState(false);
  const [model, setModel] = useState({});
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [loading, setLoading] = useState();

  useEffect(() => {
    // Get current location of visitor
    navigator.geolocation.getCurrentPosition(
      function success(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      function error() {
        console.log("Unable to retrieve your location");
      }
    );
  }, []);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const api = {
    base: "https://api.weatherapi.com/v1/forecast.json",
    key: "3aa4bf838d804c0cb33120407240902",
  };

  const {
    data: weather,
    error,
    isValidating,
  } = useSWR(
    `${api.base}?key=${api.key}&q=${latitude},${longitude}&days=2&aqi=no&alerts=no`,
    fetcher
  );

  // handle data through field
  const fillModel = (key, val) => {
    setModel((prevModel) => ({
      ...prevModel,
      [key]: val,
    }));
  };

  const signInUser = () => {
    setLoading(true);
    axios
      .post("http://10.0.12.246:8000/auth/login", model)
      .then((res) => {
        if (res.data?.isSuccessfull === true) {
          setLoading(false);
          ShowMessage(toast, "User Signed In Successfully", "success");
          setIsModalOpen(false);
          localStorage.setItem("authToken", res.data?.token);
        } else {
          ShowMessage(toast, "User not found", "error");
          setIsModalOpen(false);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        ShowMessage(toast, "Error Signing In", "error");
        console.error("signIn failed:", error);
        setIsModalOpen(false);
      });
  };

  const signUpUser = () => {
    setLoading(true);
    model.isActive = true;
    model.role = "creator";
    model.latitude = latitude;
    model.longitude = longitude;

    axios
      .post("http://10.0.12.246:8000/auth/signup", model)
      .then((res) => {
        if (res.data?.isSuccessfull === true) {
          setLoading(false);
          ShowMessage(toast, "User Created Successfully", "success");
          setIsModalOpen(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        ShowMessage(toast, "Error Creating User", "error");
        console.error("signUp failed:", error);
      });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleForget = () => {
    setIsShowForget(true);
  };

  const handleReset = () => {
    setIsShowForget(false);
    setIsShowReset(true);
  };

  return (
    <>
      <Avatar src="https://bit.ly/dan-abramov" size="md" onClick={showModal}>
        <AvatarBadge boxSize="1em" bg="green.500" />
      </Avatar>
      <PrimaryModal
        open={isModalOpen}
        // onCancel={handleCancel}
        styles={{ minHeight: "95vh" }}
        Modalbody={
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
                  (isShowForget === true && (
                    <>
                      <div className="pt-3 pb-2 w-75 ">
                        <InputField
                          label="Email"
                          placeholder="Enter your Email"
                          type="text"
                          inputWidth={"100%"}
                          value={model.password ?? ""}
                          onChange={(e) => fillModel("email", e.target.value)}
                        />
                      </div>
                      <div className="py-3">
                        <PrimaryButton
                          onClick={handleReset}
                          label={
                            <>
                              Submit{" "}
                              {loading ? (
                                <Spinner
                                  thickness="1px"
                                  speed="0.65s"
                                  color="white.500"
                                  size="sm"
                                  className="ms-3"
                                />
                              ) : null}
                            </>
                          }
                          colorScheme={BaseColors.light_grey}
                          btnStyle={styles.Button}
                        />
                      </div>
                    </>
                  )) ||
                  (isShowReset === true && (
                    <>
                      <div className="pt-3 pb-2 w-75 ">
                        <InputField
                          label="Email"
                          placeholder="Enter your Email"
                          type="text"
                          inputWidth={"100%"}
                          value={model.password ?? ""}
                          onChange={(e) => fillModel("email", e.target.value)}
                        />
                      </div>
                      <div className="test-start">OTP</div>
                      <div className="pt-3 pb-2 w-75 d-flex justify-content-between px-3">
                        <InputField
                          placeholder="0"
                          maxLength={1}
                          inputStyle={styles.OtpInput}
                        />
                        <InputField
                          placeholder="0"
                          maxLength={1}
                          inputStyle={styles.OtpInput}
                        />
                        <InputField
                          placeholder="0"
                          maxLength={1}
                          inputStyle={styles.OtpInput}
                        />
                        <InputField
                          placeholder="0"
                          maxLength={1}
                          inputStyle={styles.OtpInput}
                        />
                        <InputField
                          placeholder="0"
                          maxLength={1}
                          inputStyle={styles.OtpInput}
                        />
                      </div>

                      <div className="py-3">
                        <PrimaryButton
                          // onClick={handleReset}
                          label={
                            <>
                              Submit{" "}
                              {loading ? (
                                <Spinner
                                  thickness="1px"
                                  speed="0.65s"
                                  color="white.500"
                                  size="sm"
                                  className="ms-3"
                                />
                              ) : null}
                            </>
                          }
                          colorScheme={BaseColors.light_grey}
                          btnStyle={styles.Button}
                        />
                      </div>
                    </>
                  )) || (
                    <>
                      <h2 style={styles.title}>signIn to your Account</h2>
                      <div className="py-3 w-md-auto w-75 ">
                        <InputField
                          label="Email"
                          placeholder="Enter your Email address"
                          type="email"
                          inputWidth={"100%"}
                          value={model.email ?? ""}
                          onChange={(e) => fillModel("email", e.target.value)}
                        />
                      </div>
                      <div className="pt-3 pb-2 w-75 ">
                        <InputField
                          label="Password"
                          placeholder="Enter your Password"
                          type="password"
                          inputWidth={"100%"}
                          value={model.password ?? ""}
                          onChange={(e) =>
                            fillModel("password", e.target.value)
                          }
                        />
                      </div>
                      <div className="w-75 pe-3 pb-1">
                        <p
                          onClick={handleForget}
                          style={{ color: BaseColors.light_grey }}
                          className="fs-6 text-end"
                        >
                          forget password?
                        </p>
                      </div>
                      <div className="py-3">
                        <PrimaryButton
                          onClick={signInUser}
                          label={
                            <>
                              Sign In{" "}
                              {loading ? (
                                <Spinner
                                  thickness="1px"
                                  speed="0.65s"
                                  color="white.500"
                                  size="sm"
                                  className="ms-3"
                                />
                              ) : null}
                            </>
                          }
                          colorScheme={BaseColors.light_grey}
                          btnStyle={styles.Button}
                        />
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
                  )
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
                        value={model.firstname ?? ""}
                        onChange={(e) => fillModel("firstname", e.target.value)}
                      />
                      <InputField
                        label="Last Name"
                        placeholder="Enter your Last Name"
                        type="text"
                        inputWidth={"100%"}
                        value={model.lastname ?? ""}
                        onChange={(e) => fillModel("lastname", e.target.value)}
                      />
                    </div>
                    <div className="py-3 w-md-auto w-75 ">
                      <InputField
                        label="Email"
                        placeholder="Enter your Email address"
                        type="email"
                        inputWidth={"100%"}
                        value={model.email ?? ""}
                        onChange={(e) => fillModel("email", e.target.value)}
                      />
                    </div>
                    <div className="py-3 w-75 ">
                      <InputField
                        label="Password"
                        placeholder="Enter your Password"
                        type="password"
                        inputWidth={"100%"}
                        value={model.password ?? ""}
                        onChange={(e) => fillModel("password", e.target.value)}
                      />
                    </div>
                    <div className="py-3">
                      <PrimaryButton
                        onClick={signUpUser}
                        label={
                          <>
                            Create Account{" "}
                            {loading ? (
                              <Spinner
                                thickness="1px"
                                speed="0.65s"
                                color="white.500"
                                size="sm"
                                className="ms-3"
                              />
                            ) : null}
                          </>
                        }
                        colorScheme={BaseColors.light_grey}
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
                      label="signIn with Google"
                      variant="outline"
                      colorScheme={BaseColors.light_grey}
                      size="sm"
                      background="transparent"
                      leftIcon={
                        <img
                          src={iconGoogle}
                          height="28px"
                          width="28px"
                          alt=""
                        />
                      }
                      btnStyle={styles.authSocialButton}
                    />
                  </div>
                  <div className="col-4">
                    <PrimaryButton
                      label="signIn with Facebook"
                      variant="outline"
                      colorScheme={BaseColors.light_grey}
                      size="sm"
                      background="transparent"
                      leftIcon={
                        <img
                          src={iconFacebook}
                          height="30px"
                          width="30px"
                          alt=""
                        />
                      }
                      btnStyle={styles.authSocialButton}
                    />
                  </div>
                  <div className="col-4">
                    <PrimaryButton
                      label="signIn with Linkedin"
                      variant="outline"
                      colorScheme={BaseColors.light_grey}
                      size="sm"
                      background="transparent"
                      leftIcon={
                        <img
                          src={iconLinkedin}
                          height="30px"
                          width="30px"
                          alt=""
                        />
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
                    style={{
                      background: "rgb(8, 11, 16, 0.8)",
                      minHeight: "55vh",
                    }}
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
        }
      />
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
  OtpInput: {
    height: "8vh",
    width: "45px",
    background: "transparent",
    border: `1px solid ${BaseColors.medium_grey}`,
  },
};
