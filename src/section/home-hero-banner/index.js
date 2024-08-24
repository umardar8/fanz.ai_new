import React, { useState } from "react";
import { HeroImage } from "../../assets";
import PrimaryButton from "../../components/button";
import { IoMdAdd } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import BaseColors from "../../constant";
import { RiGroupLine } from "react-icons/ri";
import { GoListUnordered } from "react-icons/go";
import { BsDownload } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import TopStoryCard from "../../components/cards/top-story-card";
import { FaStar } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import ReactPlayer from "react-player";
import PrimaryModal from "../../components/modal";
import styles from "./style.module.css";

export default function HomeHeroBanner() {
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`d-flex row mx-0 px-0 position-relative ${styles.bannerMain}`}
        onMouseEnter={() => setIsSliderHovered(true)}
        onMouseLeave={() => setIsSliderHovered(false)}
      >
        <div
          className={`row m-0 px-0 d-flex justify-content-between align-items-end position-relative ${styles.bannerRow}`}
          style={{
            background: `linear-gradient(to right, #000000 14%, rgb(255, 255, 255, 0) 62%) `,
            paddingBottom: "5%",
          }}
        >
          <div
            className="col-11 col-lg-9 col-xl-8 d-flex flex-column justify-content-center align-self-center ps-md-5"
            // style={{ zIndex: "4" }}
          >
            <div style={{ maxWidth: "80%", paddingTop: "12%" }}>
              <PrimaryButton
                label="Live"
                btnStyle={{
                  background: "#FE4703",
                  color: "white",
                }}
                leftIcon={<FaWifi />}
              />
              <p className="heading-1 text-white">
                Guddu in spotlight after Sunday's
                <br className="d-none d-lg-block" /> power breakdown
              </p>
              <p className="text-family text-white fs-5 fw-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div
                className="text-family fs-4 fw-bold"
                style={{ color: BaseColors.danger }}
              >
                GENRES
              </div>
              <div className="text-family fs-5 fw-normal text-white">
                News, Headlines
              </div>
              <div className="d-flex  py-4">
                <PrimaryButton
                  label="WATCH"
                  // onClick={() => {
                  //   console.log("Button clicked!");
                  // }}
                  rightIcon={<FaPlay />}
                  fontSize="1rem"
                  marginRight="5px"
                  padding="20px"
                />
                <PrimaryButton
                  label="MY LIST"
                  rightIcon={<IoMdAdd />}
                  background={BaseColors.light_grey}
                  fontSize="1rem"
                  padding="20px"
                />
              </div>
              <div className="d-flex justify-content-start">
                <div className="d-flex me-3 align-items-center">
                  <FaStar
                    size={16}
                    color={BaseColors.yellow}
                    className="mb-2"
                  />
                  <h5
                    className="px-2 text-family fs-5 fw-normal-2"
                    style={{ color: BaseColors.yellow }}
                  >
                    7.3
                  </h5>
                </div>
                <div
                  className="border mx-2 row align-items-center pt-2"
                  style={{ borderRadius: 8 }}
                >
                  <h5 className="px-2 fs-5" style={{ color: BaseColors.white }}>
                    U/A
                  </h5>
                </div>
                <div
                  className="border mx-2 row align-items-center pt-2"
                  style={{ borderRadius: 8 }}
                >
                  <h5 className="px-2 fs-5" style={{ color: BaseColors.white }}>
                    4K
                  </h5>
                </div>
                <div className="d-flex align-items-center">
                  <h5
                    className="px-2 text-family fs-5 fw-normal"
                    style={{ color: BaseColors.textGrey }}
                  >
                    2024
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div
            className="d-none d-lg-flex justify-content-end align-items-end position-absolute m-0 p-0"
            style={{
              right: "10%",
              // left: '65%',
            }}
          >
            <div
              className="justify-content-center text-center"
              style={{
                background: "rgb(92, 92, 92, 0.7)",
                height: "45%",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
                padding: 20,
                width: "25%",
              }}
            >
              <div className="text-family heading-size-1 fw-bold text-white py-3">
                TOP STORIES OF THE DAY
              </div>
              <TopStoryCard />
              <TopStoryCard />
              <TopStoryCard />
            </div>
          </div>

          <div
            className="py-5 row m-0 px-0 position-absolute"
            style={{
              background: "linear-gradient(to top, #150b27 14%, #4f349d 91%)",
              height: "40vh",
              width: isSliderHovered ? "55px" : "24px",
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25,
              transition: "width 0.3s ease",
              right: 0,
              left: "auto",
              top: "30%",
            }}
          >
            <RiGroupLine color={BaseColors.textGrey} size={25} />
            <GoListUnordered color={BaseColors.textGrey} size={25} />
            <BsDownload color={BaseColors.textGrey} size={25} />
            <FiSettings color={BaseColors.textGrey} size={25} />
          </div>
          {/* <div
            className="col-lg-6 col-xl-5 
          d-none d-lg-block"
          >
            <div
              className="row m-0 d-flex justify-content-center align-items-end "
              style={
                {
                  // minHeight: 85vh,
                }
              }
            >
              <div
                className="justify-content-center text-center"
                style={{
                  background: rgb(92, 92, 92, 0.7),
                  height: "45%",
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                  padding: 20,
                  width: "380px",
                }}
              >
                <div className="text-family fs-4 fw-normal text-white py-3">
                  TOP STORIES OF THE DAY
                </div>
                <TopStoryCard />
                <TopStoryCard />
                <TopStoryCard />
              </div>
            </div>
          </div> */}
        </div>
        {/* <div
          className=" d-flex flex-column align-items-end justify-content-center pe-0  pt-5 pt-md-1"
          style={
            {
              // minHeight: 85vh,
            }
          }
        >
          <div
            className="py-5 row m-0 px-0"
            style={{
              background: linear-gradient(to top, #150b27 14%, #4f349d 91%),
              height: "40vh",
              width: isSliderHovered ? "55px" : "24px",
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25,
              transition: "width 0.3s ease",
            }}
          >
            <RiGroupLine color={BaseColors.textGrey} size={25} />
            <GoListUnordered color={BaseColors.textGrey} size={25} />
            <BsDownload color={BaseColors.textGrey} size={25} />
            <FiSettings color={BaseColors.textGrey} size={25} />
          </div>
        </div> */}
      </div>
      <PrimaryModal
        open={isModalOpen}
        onCancel={handleCancel}
        styles={{ minHeight: "95vh" }}
        Modalbody={
          <>
            {/* <h1>hellow</h1>
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="100%"
              height="100%"
            /> */}
          </>
        }
      />
    </>
  );
}
