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
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Techs Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Techs Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Techs Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
  { cardimg: HeroImage, head: "Tech Talk", year: "2013", rating: "7.7" },
];

export default function Home() {
  const [isShow, setIsShow] = useState(false);
  const [isWeather, setIsWeather] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsShow(false);
      setSlidesToShow(4);
    } else if (window.innerWidth < 768 && window.innerWidth > 450) {
      setIsShow(true);
      setSlidesToShow(3);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
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

  useEffect(() => {
    if (window.innerWidth < 450) {
      setIsShow(true);
    }
  }, []);

  return (
    <Layout>
      <HomeHeroBanner />
      <div className="position-relative d-flex row m-0 p-0">
        {/* {!isShow ? ( */}
        <div
          className="row position-absolute m-0 p-0 justify-content-between "
          style={{ top: -35, height: "100%" }}
        >
          <div
            className={
              !isShow
                ? "col-11 col-md-4 col-xl-3  d-flex flex-column justify-content-between  p-0 m-0"
                : "col-12 col-md-4 col-xl-3  d-flex justify-content-between align-items-start  p-0 m-0 "
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
                    minHeight: "340px",
                  }}
                >
                  <WeatherPanel
                    btnClassName={
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
            background: `linear-gradient(to right, #000000 14%, rgb(255, 255, 255, 0) 62%)`,
            marginTop: -95,
            zIndex: 0,
          }}
        >
          <div className="col col-lg-9 col-xl-10 ps-5 pe-0 ">
            <div
              className="row m-0 justify-content-md-start p-0 px-xl-5 px-auto "
              style={{
                background: `linear-gradient(to bottom, rgb(0, 0, 0, 0.7) 25%, rgb(8, 11, 16)   62%)`,
                backdropFilter: `blur(4px)`,
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
              <div className="col-12 col-xl-10 pb-4 ">
                <PrimaryCarousel
                  title="Recommended For You"
                  cardData={cardData}
                  slidesToShow={slidesToShow}
                />
                <div className="row m-0 ">
                  {cardData.map((data) => {
                    return <LiveStreamCard key={data.id} {...data} />;
                  })}
                </div>

                <h1>hellow</h1>
                <ReactPlayer
                  className="react-player"
                  url="https://www.youtube.com/watch?v=l-nMKJ5J3Uc"
                />
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
            maxHeight: "5vh",
            color: `rgb(255, 219, 43, 0.8)`,
          }}
        >
          <h5>
            Breaking New's! Lorem Ipsum is simply dummy text of the printing and
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
