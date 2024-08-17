import React, { useEffect, useState } from "react";
import Layout from "../../layout/web-layout";
import HomeHeroBanner from "../../section/home-hero-banner";
import PrimaryButton from "../../components/button";
import { FaAngleDown } from "react-icons/fa6";
import WeatherPanel from "../../components/weather-panel/weatherPanel";
import BaseColors from "../../constant";
import PrimaryCarousel from "../../components/carousel";
import { HeroImage } from "../../assets";
import { GrUp } from "react-icons/gr";
import AdsCard from "../../components/cards/ads-card";
import PriceListCard from "../../components/cards/price-list-card";
import LiveStreamCard from "../../components/cards/live-stream-card";
import ReactPlayer from "react-player";
import PrimaryModal from "../../components/modal";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoPricetags } from "react-icons/io5";

const cardData = [
  {
    thumb: "https://image.isu.pub/201209072748-c9bec801565ed28444d559c325908173/jpg/page_1.jpg",
      // "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    head: "Education",
    year: "2024",
    rating: "8.4",
  },
  {
    thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZj3LjMi9uSu_F9GtpT0Fd8bqlKMpqxW4IQ&s",
      // "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
    head: "Climate",
    year: "2024",
    rating: "9.5",
  },
  {
    thumb: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F03b4f998-7ad1-49d4-98a0-8d883d781602_1240x1737.jpeg",
      // "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
    head: "Career",
    year: "2024",
    rating: "8.9",
  },
  {
    thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4tGn1f_3LCIciYNVRSsYsMgMi0XWnMmsDQ&s",
      // "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
    head: "Scholarships",
    year: "2024",
    rating: "8.9",
  },
  {
    thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsMQbjMZSO3TKLrqwYv4PMbNGoJIMmcwKH_A&s",
      // "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
    head: "Tech Talks",
    year: "2024",
    rating: "8.8",
  },
  {
    thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07Q1pkvGBUBFNuMjHn0uP_yZggf3gvxFhFQ&s",
      // "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
    head: "Career",
    year: "2024",
    rating: "8.2",
  },
  {
    thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNrrRTT6JiXpdsdq7mO8G13LpxEXKztv10g&s",
      // "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
    head: "Climate",
    year: "2024",
    rating: "7.7",
  },
  {
    thumb: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQo-ybF84DXzKGVIj5hQC1F_cj82R5w107w&s",
      // "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
    head: "Technology",
    year: "2024",
    rating: "7.7",
  },
  {
    thumb: "https://www.tvguide.com/a/img/catalog/provider/1/1/1-11576413129.jpg",
      // "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
    head: "Documentary",
    year: "2024",
    rating: "7.6",
  },
  // {
  //   thumb:
  //     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
  //   head: "Tech Talk",
  //   year: "2013",
  //   rating: "7.7",
  // },
  // {
  //   thumb:
  //     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg",
  //   head: "Tech Talk",
  //   year: "2013",
  //   rating: "7.7",
  // },
  // {
  //   thumb:
  //     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg",
  //   head: "Tech Talk",
  //   year: "2013",
  //   rating: "7.7",
  // },
  // {
  //   thumb:
  //     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg",
  //   head: "Tech Talk",
  //   year: "2013",
  //   rating: "7.7",
  // },
];

export default function Home() {
  const [isShow, setIsShow] = useState(false);
  const [isWeather, setIsWeather] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // extended breakpoints for responsiveness and changed slidesToShow according to screens
  const handleResize = () => {
    if (window.innerWidth >= 1300) {
      setIsShow(false);
      setSlidesToShow(4);
    } else if (window.innerWidth >= 992 && window.innerWidth < 1300) {
      setIsShow(false);
      setSlidesToShow(3);
    } else if (window.innerWidth >= 768 && window.innerWidth < 992 ) {
      setIsShow(true);
      setSlidesToShow(3);
    } else if (window.innerWidth >= 450 && window.innerWidth < 768 ) {
      setIsShow(true);
      setSlidesToShow(2);
    } else {
      setIsShow(true);
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleWeather = () => {
    setIsWeather(true);
    setIsPrice(false);
  };
  const handlePrice = () => {
    setIsWeather(false);
    setIsPrice(true);
  };

  return (
    <Layout>
      <HomeHeroBanner />
      <div className="position-relative d-flex row m-0 p-0">
        {/* {!isShow ? ( */}
        <div
          className="row position-absolute m-0 p-0 justify-content-between "
          style={{ top: !isShow ? "-5%" : "10%", height: "100%" }}
        >
          <div
            className={
              !isShow
                ? "col-11 col-md-4 col-xl-3  d-flex flex-column justify-content-between  p-0 m-0"
                : "col-12 d-flex justify-content-between align-items-start  px-0 m-0 "
            }
            style={{ height: "100%", zIndex: 4 }}
          >
            {!isShow ? (
              <>
                <WeatherPanel />
                <AdsCard />
              </>
            ) : (
              <>
                <div
                  className="p-2 "
                  style={{
                    background: "rgb(33, 48, 67, 0.8)",
                    borderTopRightRadius: "20px",
                    borderBottomRightRadius: "20px",
                    width: isWeather ? "400px" : "18px",
                    zIndex: 4,
                    transition: "width 0.3s ease",
                    height: isWeather ? "610px" : "340px",
                    overflow: isWeather ? "visible" : "hidden"
                  }}
                  onMouseEnter={() => {
                    setIsWeather(true);
                    setIsPrice(false);
                  }}
                  onMouseLeave={() => setIsWeather(false)}
                >
                  <WeatherPanel
                    cardClassName={
                      isWeather
                        ? "weatherPanel2 d-block"
                        : "weatherPanel2 d-none"
                    }
                  />
                </div>
                <div
                  className="p-2 "
                  style={{
                    backgroundColor: "#282828",
                    borderTopLeftRadius: "20px",
                    borderBottomLeftRadius: "20px",
                    width: isPrice ? "400px" : "18px",
                    zIndex: 4,
                    transition: "width 0.3s ease",
                    minHeight: "340px",
                  }}
                  onMouseEnter={() => {
                    setIsPrice(true);
                    setIsWeather(false);
                  }}
                  onMouseLeave={() => setIsPrice(false)}
                >
                  <PriceListCard
                    btnClassName={
                      isPrice ? "card adsCard d-block" : "card adsCard d-none"
                    }
                  />
                </div>
              </>
            )}
          </div>
          <div className="col-2 p-0 d-none d-xl-block " style={{ zIndex: 4 }}>
            <GrUp
              size={30}
              style={{
                // opacity: isSliderHovered ? "0.8" : "0",
                color: BaseColors.white,
                transition: "opacity 0.3s ease",
              }}
            />
            <PriceListCard />
          </div>
        </div>

        <div
          className="row mx-0 justify-content-end p-0 "
          style={{
            background: "linear-gradient(to right, #000000 14%, rgb(255, 255, 255, 0) 62%)",
            marginTop: "-10%",
            zIndex: 0,
          }}
        >
          {/* added px-sm-4 to center the carousel on small screens */}
          <div className="col col-lg-9 col-xl-10 px-sm-4 px-lg-0 ps-lg-5 pe-0 "> 
            <div
              className="row m-0 justify-content-md-start p-0 px-xl-5 px-auto "
              style={{
                background: "linear-gradient(to bottom, rgb(0, 0, 0, 0.7) 25%, rgb(8, 11, 16)   62%)",
                backdropFilter: "blur(4px)",
                borderRadius: "20px",
                TopLeftRadius: 80,
                BottomLeftRadius: 80,
              }}
            >
              {isShow ? (
                <>
                  <div className="d-flex py-2 justify-content-end">
                    <PrimaryButton
                      btnStyle={{ background: "transparent" }}
                      btnClassName="border mx-1"
                      label={
                        <TiWeatherPartlySunny
                          color={BaseColors.white}
                          size={24}
                        />
                      }
                      onClick={handleWeather}
                    />
                    <PrimaryButton
                      btnStyle={{ background: "transparent" }}
                      btnClassName="border mx-1"
                      label={<IoPricetags color={BaseColors.white} size={24} />}
                      onClick={handlePrice}
                    />
                  </div>

                  {/* <div className="col-12 col-xl-10 pb-4 ">
                    <PrimaryCarousel
                      title="Shows You Must Watch"
                      autoplay={true}
                      autoplaySpeed={3000}
                      cardData={cardData}
                      slidesToShow={slidesToShow}
                    />
                  </div> */}
                </>
              ) : null}
              <div className="col-12 col-xl-10 pb-4 ">
                <PrimaryCarousel
                  title="Shows You Must Watch"
                  autoplay={true}
                  autoplaySpeed={3000}
                  cardData={cardData}
                  slidesToShow={slidesToShow}
                />
              </div>
            </div>
            <div className="row m-0 justify-content-md-start p-0 px-xl-5 px-auto">
              <div className="col-12 col-xl-10 pb-4">
                <PrimaryCarousel
                  title="Recommended For You"
                  cardData={cardData}
                  slidesToShow={slidesToShow}
                />

                {!isShow ? (
                  <div className="row pt-5 justify-content-center">
                    <ReactPlayer
                      className="react-player"
                      url="https://www.youtube.com/watch?v=l-nMKJ5J3Uc"
                    />
                  </div>
                ) : null}

                <PrimaryCarousel
                  title="Top Tech Trend"
                  cardData={cardData}
                  slidesToShow={slidesToShow}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-2 mb-4">
          <PrimaryButton
            label="Show More"
            rightIcon={<FaAngleDown />}
            fontSize="1.3rem"
            marginRight="5px"
            padding="20px 60px"
          />
        </div>
        <div
          className="row text-center mx-0"
          style={{
            maxHeight: "4.5vh",
            color: "rgb(255, 219, 43, 0.8)",
            overflow: "hidden"
          }}
        >
          <h5>
            Breaking News! Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </h5>
        </div>
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
    </Layout>
  );
}