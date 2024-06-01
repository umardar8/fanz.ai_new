import React, { useEffect, useState } from "react";
import { HeroImage } from "../../assets";
import { placeholderBanner } from "../../assets";
import Layout from "../../layout/web-layout";
import PrimaryButton from "../../components/button";
// icons
import { GrAppsRounded } from "react-icons/gr";
import { IoAnalytics } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { GiHealthNormal } from "react-icons/gi";
import { FaUserGraduate, FaCloudSun, FaWifi } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import BaseColors from "../../constant";
import Fancybox from "../../components/fancy-box";
import Slider from "react-slick";

const cardData = [
  [
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
  ],
];

export default function LiveShow() {
  const [active, setActive] = useState(0);
  const [activeTabs, setActiveTabs] = useState(0);
  const handleTabClick = (index) => {
    setActiveTabs(index);
  };

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

  // tabs
  const settings = {
    dots: false,
    arrows: false,
    className: "center p-3",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
  };

  // Drawer and Tabs
  const Tabs = [
    {
      label: "All",
      icon: <GrAppsRounded size={20} />,
    },
    {
      label: "Health",
      icon: <FaPlus size={20} />,
    },
    {
      label: "Education",
      icon: <FaUserGraduate size={20} />,
    },
    {
      label: "Technology",
      icon: <IoAnalytics size={20} />,
    },
    {
      label: "Climate",
      icon: <FaCloudSun size={20} />,
    },
    {
      label: "Career",
      icon: <MdOutlineWork size={20} />,
    },
  ];

  const Sidebar = () => {
    return isDesktop ? (
      <div className="col-md-2 my-5 px-3 list-group">
        <h2 className="text-white mx-4 mb-4 align-self-start text-family">
          Categories
        </h2>
        {Tabs.map((x, index) => (
          <div key={index}>
            <PrimaryButton
              size="lg"
              variant="solid"
              label={x.label}
              btnClassName={`mb-4 ${
                activeTabs === index ? "live-all-active" : "live-drawer-button"
              } rounded text-start w-100 flex justify-content-start gap-3 text-family fs-5`}
              onClick={() => handleTabClick(index)}
              leftIcon={x.icon}
            />
          </div>
        ))}
      </div>
    ) : null;
  };

  const MainContent = () => {
    return (
      <div className="col-md-10 mt-5 mt-md-0 pt-5 pt-md-0">
        <div
          className="row m-0 p-0 d-flex justify-content-center"
          style={{
            height: "50vh",
            background: `url(${placeholderBanner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
            borderRadius: "5px",
          }}
        >
          <div className="col-10 d-flex flex-column justify-content-center ms-2 text-center">
            <div className="pb-3 text-white">
              <PrimaryButton
                btnClassName="col-xs-4 mb-2"
                label="Live"
                size="sm"
                btnStyle={{
                  background: "#FE4703",
                  color: "white",
                }}
                leftIcon={<FaWifi />}
              />
              <p className={isDesktop ? "heading-2" : "heading-3"}>
                League of Legends © • &#9872; France
              </p>
              <p className="heading-1">Watch live how the top teams</p>
              <p className="heading-1">play FaZe Clan VS Mousesports</p>
              <PrimaryButton label="WATCH" padding="20px" />
            </div>
          </div>
        </div>
        {isDesktop ? (
          <div className="row p-0 mx-0 my-4 d-flex justify-content-between align-items-center">
            <div className="col">
              <h3 className="text-white text-family ">Live Shows</h3>
            </div>
            <div className="col d-flex flex-column align-items-end">
              <div className="liveShow-select">
                <select className="p-2 rounded-1">
                  <option value="0">Popular</option>
                  <option value="1">Latest</option>
                  <option value="2">Older</option>
                </select>
              </div>
            </div>
          </div>
        ) : (
          <div className="slider-container">
            <Slider {...settings}>
              {Tabs.map((x, index) => (
                <div key={index} className="pe-2">
                  <PrimaryButton
                    size="lg"
                    variant="solid"
                    label={x.label}
                    btnClassName={`mb-3 ${
                      activeTabs === index
                        ? "live-all-active"
                        : "live-tabs-button"
                    } rounded w-100 text-family`}
                    onClick={() => handleTabClick(index)}
                    // leftIcon={x.icon}
                  />
                </div>
              ))}
            </Slider>
          </div>
        )}

        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <div className="row m-0 p-0">
            {cardData[active]?.map((data, index) => (
              <a
                href={data.cardimg}
                className="col-sm-12 col-sm-6 col-md-4 pb-5"
                key={index}
                data-fancybox="gallery"
              >
                <img
                  src={data.cardimg}
                  alt=""
                  style={{ height: "25vh" }}
                  className="rounded shadow-1 mb-2 w-100 "
                />
                <div className="d-flex justify-content-between pb-3">
                  <div
                    className="text-family fw-normal text-white pe-2 col-xs-8"
                    style={{ fontSize: "calc(0.8em + 1vw)" }}
                  >
                    {data.head}
                  </div>
                  <PrimaryButton
                    btnClassName="col-xs-4"
                    label="Live"
                    size="sm"
                    btnStyle={{
                      background: "#FE4703",
                      color: "white",
                    }}
                    leftIcon={<FaWifi />}
                  />
                </div>
                <div style={{ color: BaseColors.textGrey, fontSize: "0.9rem" }}>
                  {data.year}
                </div>
              </a>
            ))}
          </div>
        </Fancybox>
      </div>
    );
  };

  return (
    <Layout>
      <div className="row position-relative d-flex  mt-5 pt-5 mx-0 px-0">
        <Sidebar />
        <MainContent />
      </div>
    </Layout>
  );
}
