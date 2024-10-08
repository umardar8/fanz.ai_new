import React, { useState, useEffect } from "react";
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
import { FaStar, FaWifi } from "react-icons/fa";
import ReactPlayer from "react-player";
import PrimaryModal from "../../components/modal";
import styles from "./style.module.css";

export default function HomeHeroBanner() {
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // added breakpoints for responsiveness
  const [isWidescreen, setIsWidescreen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // screen sizes according to responsive test tool
  const handleResize = () => {
    if (window.innerWidth >= 1366) {
      setIsWidescreen(true)
      setIsDesktop(false)
      setIsTablet(false)
      setIsMobile(false)
    } else if (window.innerWidth >= 992 && window.innerWidth < 1366) {
      setIsWidescreen(false)
      setIsDesktop(true)
      setIsTablet(false)
      setIsMobile(false)
    } else if (window.innerWidth >= 480 && window.innerWidth < 992) {
      setIsWidescreen(false)
      setIsDesktop(false)
      setIsTablet(true)
      setIsMobile(false)
    } else {
      setIsWidescreen(false)
      setIsDesktop(false)
      setIsTablet(false)
      setIsMobile(true)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`d-flex row mx-0 px-0 ${styles.bannerMain}`}
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
            className="col-11 col-lg-11 col-xl-8 d-flex flex-column justify-content-start align-self-center position-relative"
            // style={{ zIndex: "4" }}
            // optimal padding from left according to figma ui design
            style={{left: isWidescreen ? "130px" : isDesktop ? "90px" : isTablet ? "70px" : "30px",}}
          >
            <div 
              style={{ 
                maxWidth: (isMobile || isTablet) ? "90%" : isDesktop ? "58%" : "63%",  // centered the hero-banner content in mobile and tablet screen
                paddingTop: isMobile ? "52%" : "12%",
              }}>
              <PrimaryButton
                label="Live"
                btnStyle={{
                  background: "#FE4703",
                  color: "white",
                  marginBottom: "10px"
                }}
                leftIcon={<FaWifi />}
              />
              <p className="heading-size-1 fw-900 text-white">
                Guddu in spotlight after Sunday's power breakdown
              </p>
              <p className="text-1 fw-600 text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s when an unknown printer took a galley
                of type and scrambled.
              </p>
              <div
                className="subheading-size-1 mt-4"
                style={{ color: BaseColors.danger }}
              >
                GENRES
              </div>
              <div className="subheading-size-1 text-white">
                News, Headlines
              </div>
              <div className="d-flex py-4">
                <PrimaryButton
                  label="WATCH"
                  // onClick={() => {
                  //   console.log("Button clicked!");
                  // }}
                  rightIcon={<FaPlay />}
                  fontSize="1.3rem"
                  marginRight="20px"
                  padding="25px 20px"
                  borderRadius="30px"
                />
                <PrimaryButton
                  label="MY LIST"
                  rightIcon={<IoMdAdd />}
                  background={BaseColors.light_grey}
                  fontSize="1.3rem"
                  padding="25px 20px"
                  borderRadius="30px"
                />
              </div>
              <div className="d-flex justify-content-start ps-4">
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
                {/* <div
                  className="border mx-2 row align-items-center pt-2"
                  style={{ borderRadius: 8 }}
                > */}
                  <h5 
                    className="border mx-2 row align-self-center px-2"
                    style={{ color: BaseColors.white, borderRadius: 8 }}>
                    U/A
                  </h5>
                {/* </div> */}
                {/* <div
                  className="border mx-2 row align-items-center pt-2"
                  style={{ borderRadius: 8 }}
                > */}
                  <h5 className="border mx-2 row align-self-center px-2" style={{ borderRadius: 8, color: BaseColors.white }}>
                    4K
                  </h5>
                {/* </div> */}
                <div className="d-flex">
                  <h5
                    className="px-2 text-family fs-4 fw-normal-2"
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
            style={
              {
                right: '5%',
                // left: '65%',
              }
            }
          >
            <div
              className="justify-content-center text-center"
              style={{
                background: "rgb(92, 92, 92, 0.7)",
                height: "45%",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
                padding: 20,
                width: isDesktop ? "32%" : "25%",
              }}
            >
              <div className="heading-size-2 text-white py-3">
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
