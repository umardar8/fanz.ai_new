import React from "react";
import PrimaryButton from '../../../../components/button';
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoMdMore } from "react-icons/io";
import { HiOutlineArrowNarrowUp, HiOutlineArrowNarrowDown } from "react-icons/hi";
import { background } from "@chakra-ui/react";

const cardClassName = "col-sm-3 d-flex row rounded-1 shadow bg-white p-4 justify-content-center";
const contentClassName = "d-flex justify-content-center pb-4";

function MainDashboard() {
  return <>
    <div className="row m-4 d-flex justify-content-around">
      <div className={cardClassName}>
        <p>Activities</p>
        <h2 className={contentClassName}>2463 <HiOutlineArrowNarrowUp style={{ color: "green", fontSize: "1.1em" }} /></h2>
        <PrimaryButton label='show details' background="black" btnStyle={{ width: '220px', fontSize: '18px', background: 'rgba(237, 242, 247)' }} rightIcon={<BiSolidMessageSquareDetail />} />
      </div>
      <div className={cardClassName}>
        <p>Users</p>
        <h2 className={contentClassName}>1525 <HiOutlineArrowNarrowUp style={{ color: "green", fontSize: "1.1em" }} /></h2>
        <PrimaryButton label='show details' background="black" btnStyle={{ width: '220px', fontSize: '18px', background: 'rgba(237, 242, 247)' }} rightIcon={<BiSolidMessageSquareDetail />} />
      </div>
      <div className={cardClassName}>
        <p>Streams</p>
        <h2 className={contentClassName}>986 <HiOutlineArrowNarrowDown style={{ color: "red", fontSize: "1.1em" }} /></h2>
        <PrimaryButton label='show details' background="black" btnStyle={{ width: '220px', fontSize: '18px', background: 'rgba(237, 242, 247)' }} rightIcon={<BiSolidMessageSquareDetail />} />
      </div>

    </div>;
  </>
}

export default MainDashboard;
