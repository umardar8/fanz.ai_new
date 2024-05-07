import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardLayout from "../../../layout/dashboard-layout";

const pagesArr = [
  {
    name: "Dashboard",
    // route: "Live stream",
    // icon: <TiHomeOutline />,
  },
  {
    name: "Live Stream",
    // route: "user-registration",
    // icon: <BsPeople />,
  },
  {
    name: "Users",
    // route: "user-registration",
    // icon: <BsPeople />,
  },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const userData = useSelector((a) => a.user);
  console.log(userData);

  return (
    <DashboardLayout
      RouteContent={
        <Routes>
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
            className="text-white w-full rounded d-flex justify-content-center align-items-center py-2 mb-1"
            // style={{ background: `rgb(4, 155, 120, 0.8)` }}
            onClick={() => navigate(x.route)}
          >
            <h1 className="fs-4">{x.name}</h1>
          </div>
        </div>
      ))}
    </DashboardLayout>
  );
}
