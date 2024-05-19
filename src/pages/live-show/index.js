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

  // Sidebar component
  const Sidebar = () => {
    // saved bootstrap of sidebar buttons in a variable to avoid repeating
    const buttonClass =
      "list-group-item mb-4 mx-3 px-4 py-4 rounded-pill list-group-item-action";

    return (
      <div className="col-md-3 my-5 px-2 list-group">
        <h2 className="text-white mx-4 mb-4 align-self-center">Categories</h2>
        <Stack
          spacing={4}
          direction={isDesktop ? "column" : "row"}
          align="center"
        >
          <PrimaryButton
            colorScheme="purple"
            btnStyle={{ borderRadius: 25, width: "20vw" }}
            background="null"
            size="lg"
            variant="solid"
            label="All"
          />
          <PrimaryButton
            colorScheme="purple"
            btnStyle={{ borderRadius: 25, width: "20vw" }}
            background="null"
            size="lg"
            variant="outline"
            leftIcon={isDesktop ? <GiHealthNormal /> : null}
            label="Health"
          />
          <PrimaryButton
            colorScheme="purple"
            btnStyle={{ borderRadius: 25, width: "20vw" }}
            background="null"
            size="lg"
            variant="outline"
            leftIcon={isDesktop ? <FaUserGraduate /> : null}
            label="Edu"
          />
          <PrimaryButton
            colorScheme="purple"
            btnStyle={{ borderRadius: 25, width: "20vw" }}
            background="null"
            size="lg"
            variant="outline"
            leftIcon={isDesktop ? <GrTechnology /> : null}
            label="Tech"
          />
          <PrimaryButton
            colorScheme="purple"
            btnStyle={{ borderRadius: 25, width: "20vw" }}
            background="null"
            size="lg"
            variant="outline"
            leftIcon={isDesktop ? <FaCloudSun /> : null}
            label="Climate"
          />
          <PrimaryButton
            colorScheme="purple"
            btnStyle={{ borderRadius: 25, width: "20vw" }}
            background="null"
            size="lg"
            variant="outline"
            leftIcon={isDesktop ? <MdOutlineWork /> : null}
            label="Career"
          />
        </Stack>
      </div>

      // <div className="col-md-3 py-3 my-3 list-group">
      //   <h2 className="text-white mx-4 mb-4 align-self-center">Categories</h2>
      //   <PrimaryButton btnClassName={buttonClass + "active"} label="All" />
      //   <PrimaryButton btnClassName={buttonClass} background="transparent" leftIcon={<GiHealthNormal />} label="Health" />
      //   <PrimaryButton btnClassName={buttonClass} background="transparent" leftIcon={<FaUserGraduate />} label="Education" />
      //   <PrimaryButton btnClassName={buttonClass} background="transparent" leftIcon={<GrTechnology />} label="Technology" />
      //   <PrimaryButton btnClassName={buttonClass} background="transparent" leftIcon={<FaCloudSun />} label="Climate" />
      //   <PrimaryButton btnClassName={buttonClass} background="transparent" leftIcon={<MdOutlineWork />} label="Career" />
      // </div>
    );
  };

  // Main content component
  const MainContent = () => {
    return (
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
        {/* <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={placeholderBanner} alt="" />
              <div className="carousel-caption">
                <PrimaryButton
                  label="Live"
                  size={isDesktop ? "md" : "xs"}
                  btnStyle={{ background: BaseColors.orange, color: "white" }}
                  leftIcon={<FaWifi />}
                />
                <p className="mt-md-3">League of Legends © • &#9872; France</p>
                <p style={{ fontSize: "calc(0.8em + 1.5vw)" }}>
                  Watch live how the top teams.
                </p>
                <p style={{ fontSize: "calc(0.8em + 1.5vw)" }}>
                  play FaZe Clan VS Mousesports
                </p>
                <PrimaryButton
                  label="Watch"
                  size={isDesktop ? "md" : "xs"}
                  btnClassName="px-md-5 py-md-3"
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="card mb-3 text-white">
            <img className="card-img" src={placeholderBanner} alt="" />
            <div class="card-img-overlay mt-md-3 ms-md-5 col-sm-9">
              <PrimaryButton label="Live" size={isDesktop ? "md" : "xs"} btnStyle={{ background: BaseColors.orange, color: "white", }} leftIcon={<FaWifi />} />
              <p class="card-title mt-md-3">League of Legends © • &#9872; France</p>
              <p class={isDesktop ? "card-text h2 mt-md-4" : "card-text"}>Watch live how the top teams.</p>
              <p class={isDesktop ? "card-text h2 mt-md-4" : "card-text"}>play FaZe Clan VS Mousesports</p>
              <PrimaryButton label="Watch" size={isDesktop ? "md" : "xs"} btnClassName="px-md-5 py-md-3" />
            </div>
          </div> */}

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
    );
  };

  return (
    <Layout>
      <div className="row position-relative d-flex  mt-5 pt-5">
        <Sidebar />
        <MainContent />
      </div>
    </Layout>
  );
}