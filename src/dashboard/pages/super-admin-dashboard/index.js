import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardLayout from "../../../layout/dashboard-layout";
import { HiMiniUsers } from "react-icons/hi2";
import { AiOutlineAppstore } from "react-icons/ai";
import { MdOutlineRssFeed } from "react-icons/md";
import Users from "../users";
import LiveStream from "../live-stream";
import Dashboard from "./main-dashboard";
import NotFound from "../404";

const pagesArr = [
  {
    name: "Dashboard",
    route: "",
    icon: <AiOutlineAppstore />,
  },
  {
    name: "Live Stream",
    route: "live-stream",
    icon: <MdOutlineRssFeed />,
  },
  {
    name: "Users",
    route: "users",
    icon: <HiMiniUsers />,
  },
];

export default function SuperAdminDashboard() {
  const navigate = useNavigate();
  const userData = useSelector((a) => a.user);
  console.log(userData);

  return (
    <>
      <DashboardLayout
        RouteContent={
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="live-stream" element={<LiveStream />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="" element={<Institute />} />
          <Route path="user-registration" element={<UserRegistration />} />
          <Route path="*" element={<NotFound />} /> */}
            {/* <Route path="registraform/:id" element={<NotFound />} /> //*/}
          </Routes>
        }
        userName={userData.userName}
      >
        {pagesArr.map((x, index) => (
          <div
            key={index}
            // className="flex items-center justify-center my-2 p-[0.8px]
            //  rounded bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30%
            // to-emerald-500 to-90% hoverborder "
            className="justify-content-center align-items-center "
          >
            <div
              key={index}
              // className="text-white w-full h-[6vh] rounded bg-[#000000] flex items-center justify-center "
              className="text-white w-full rounded d-flex justify-content-start align-items-center px-4 py-2 mb-2 fs-5 dashboardTabs"
              style={{ background: `rgb(54, 52, 135, 0.8)` }}
              onClick={() => navigate(x.route)}
            >
              <span>{x.icon}</span> <span className="ps-2">{x.name}</span>
            </div>
          </div>
        ))}
      </DashboardLayout>
    </>
  );
}
