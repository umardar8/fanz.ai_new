import React from "react";
import { Stack } from "@chakra-ui/react";
import LiveStreamCard from "../../components/cards/live-stream-card";
import { HeroImage } from "../../assets";
import { placeholderBanner } from "../../assets";
import Layout from "../../layout/web-layout";
import PrimaryButton from "../../components/button";
import { GiHealthNormal } from "react-icons/gi";
import { FaUserGraduate, FaCloudSun } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { FaWifi } from "react-icons/fa6";
import BaseColors from "../../constant";
import { useEffect, useState } from "react";

export default function LiveShow() {
  // state variables for responsive design
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 767) {
      setIsDesktop(true);
      setIsTablet(false);
    } else if (window.innerWidth <= 767) {
      setIsDesktop(false);
      setIsTablet(true);
    } else {
      setIsDesktop(false);
      setIsTablet(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardData = [
    { cardimg: HeroImage, head: "Education", year: "2024" },
    { cardimg: HeroImage, head: "Health", year: "2024" },
    { cardimg: HeroImage, head: "Career", year: "2024" },
    { cardimg: HeroImage, head: "Tech", year: "2024" },
    { cardimg: HeroImage, head: "Health", year: "2024" },
    { cardimg: HeroImage, head: "Education", year: "2024" },
    { cardimg: HeroImage, head: "Climate", year: "2024" },
    { cardimg: HeroImage, head: "Tech", year: "2024" },
    { cardimg: HeroImage, head: "Career", year: "2024" },
    { cardimg: HeroImage, head: "Health", year: "2024" },
    { cardimg: HeroImage, head: "Climate", year: "2024" },
    { cardimg: HeroImage, head: "Education", year: "2024" },
  ];

  const buttonStyle = {
      width: "20vw", 
      padding: isDesktop ? "30px 0" : "50px", 
      borderRadius: isDesktop ? 0 : 100,
  }

  return (
    <Layout>

      <div className="row position-relative d-flex mt-5 pt-5">

        {/* Sidebar component */}
        <div className="col-md-3 my-5 px-2 list-group">

          <h2 className="text-white mx-4 mb-4 align-self-center">Categories</h2>

          <Stack
            spacing={isDesktop ? 0 : 4}
            direction={isDesktop ? "column" : "row"}
            style={{overflow: "auto", whiteSpace: "no-wrap"}}
            align="center"
          >
            <PrimaryButton
              colorScheme="purple"
              btnStyle={buttonStyle}
              background="null"
              size="lg"
              variant="solid"
              label="All"
            />

            <PrimaryButton
              colorScheme="purple"
              btnStyle={buttonStyle}
              background="null"
              size="lg"
              variant="outline"
              leftIcon={isDesktop ? <GiHealthNormal /> : null}
              label="Health"
            />

            <PrimaryButton
              colorScheme="purple"
              btnStyle={buttonStyle}
              background="null"
              size="lg"
              variant="outline"
              leftIcon={isDesktop ? <FaUserGraduate /> : null}
              label="Education"
            />

            <PrimaryButton
              colorScheme="purple"
              btnStyle={buttonStyle}
              background="null"
              size="lg"
              variant="outline"
              leftIcon={isDesktop ? <GrTechnology /> : null}
              label="Tech"
            />

            <PrimaryButton
              colorScheme="purple"
              btnStyle={buttonStyle}
              background="null"
              size="lg"
              variant="outline"
              leftIcon={isDesktop ? <FaCloudSun /> : null}
              label="Climate"
            />
          
            <PrimaryButton
              colorScheme="purple"
              btnStyle={buttonStyle}
              background="null"
              size="lg"
              variant="outline"
              leftIcon={isDesktop ? <MdOutlineWork /> : null}
              label="Career"
            />

          </Stack>

        </div>

        {/* Main content component */}
        <div className="col-md-9">

          {/* carousel with caption and buttons */}
          <div
            className="row m-0 p-0 d-flex border"
            style={{
              height: "50vh",
              background: `url(${placeholderBanner})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
            }}
          >
            <div
              className="col-10 d-flex flex-column justify-content-center ms-2"
              // style={{ zIndex: "4" }}
            >
              <div className="py-1 text-white">

                <PrimaryButton
                  label="Live"
                  btnStyle={{
                    background: BaseColors.orange,
                    color: "white",
                    margin: "10px 0"
                  }}
                  size={isDesktop ? "sm" : "xs"}
                  leftIcon={<FaWifi />}
                />
                
                <p className={isDesktop ? "heading-2" : "heading-3"}>League of Legends © • &#9872; France</p>

                <p className="heading-1">
                  Watch live how the top teams
                </p>

                <p className="heading-1">
                  play FaZe Clan VS Mousesports
                </p>

                <PrimaryButton
                  label="WATCH"
                    // onClick={() => {
                    //   console.log("Button clicked!");
                    // }}
                    // rightIcon={<FaPlay />}
                  padding="20px"
                />

              </div>

            </div>

          </div>

          {/* Heading and Filter in a row below carousel */}
          <div className="row p-0 mx-0 my-2 d-flex justify-content-between align-items-center">
            <div className="col">
              <h1 className="text-white">Live Shows</h1>
            </div>

            <div className="col d-flex flex-column align-items-end">
              <div className="custom-select">
                <select className="p-2 rounded-1">
                  <option value="0">Popular</option>
                  <option value="1">Latest</option>
                  <option value="2">Older</option>
                </select>
              </div>
            </div>
          </div>

          {/* Live Stream Cards */}
          <div className="row m-0 p-0">
            {cardData.map((data) => {
              return <LiveStreamCard key={data.id} {...data} />;
            })}
          </div>

        </div>
        
      </div>
    </Layout>
  );
}