import { ReactNode } from "react";
// import { profile } from "../../../assets";
// import Button from "../../button/primary-button";
// import { fbSignout } from "../../../config/firebase/firebase-methods";
import { useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import PrimaryButton from "../../components/button";
import BaseColors from "../../constant";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { MdLogout } from "react-icons/md";

export default function DashboardLayout(props) {
  const navigate = useNavigate();
  const { userName, children, RouteContent } = props;

  // const SignOut = () => {
  //   fbSignout().then(() => {
  //     navigate("/sign-in");
  //   });
  // };

  return (
    <div
      className="row h-full m-0 "
      style={{ minHeight: "100vh", background: BaseColors.white }}
    >
      <div className=" row m-0 p-0 ">
        <div
          className=" col-3 d-flex flex-column justify-content-between py-3"
          style={{ minHeight: "90vh", background: BaseColors.dashboardBg }}
        >
          <div className="">
            <img src={logo} height="45rem" width="auto" />
            {children}
          </div>
          <div className=" justify-content-center text-center">
            <div
              className="d-flex m-0  rounded-pill justify-content-evenly align-items-center"
              style={{ background: BaseColors.gradientWhite, maxWidth: "80%" }}
            >
              <div className="justify-content-center ">
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
              </div>
              <div className="row m-0  text-start">
                <h5 className="" style={{ color: BaseColors.white }}>
                  {userName}
                </h5>
                <h6 className="" style={{ color: BaseColors.white }}>
                  {userName}
                </h6>
              </div>
              <div className="justify-content-center ">
                <MdLogout size={24} color="#531561" />
              </div>
            </div>
            {/* <PrimaryButton label="log out" /> */}
          </div>
        </div>
        <div className="col-9 m-0 p-0" style={{ background: "#f1f1f1" }}>
          <div
            className="d-flex justify-content-end align-items-center  m-0 p-0"
            style={{ background: BaseColors.white }}
          >
            <div className="">header</div>
          </div>
          <div>{RouteContent}</div>
        </div>
      </div>
    </div>
  );
}
