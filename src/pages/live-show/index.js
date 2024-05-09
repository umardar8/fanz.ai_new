import React from "react";
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

export default function LiveShow() {

  const cardData = [
    { cardimg: HeroImage, head: "Education", year: "2024" },
    { cardimg: HeroImage, head: "Health", year: "2024" },
    { cardimg: HeroImage, head: "Career", year: "2024" },
    { cardimg: HeroImage, head: "Technology", year: "2024" },
    { cardimg: HeroImage, head: "Health", year: "2024" },
    { cardimg: HeroImage, head: "Education", year: "2024" },
    { cardimg: HeroImage, head: "Climate", year: "2024" },
    { cardimg: HeroImage, head: "Technology", year: "2024" },
    { cardimg: HeroImage, head: "Career", year: "2024" },
    { cardimg: HeroImage, head: "Health", year: "2024" },
    { cardimg: HeroImage, head: "Climate", year: "2024" },
    { cardimg: HeroImage, head: "Education", year: "2024" },
  ];

  // Sidebar component
  const Sidebar = () => {
    return (
        <div className="col-md-4 col-xl-3 py-3 my-3">
          <h2 className="text-white mx-4 mb-4">Categories</h2>
          <div className="list-group">
            <PrimaryButton btnClassName="list-group-item mb-4 mx-3 px-4 py-4 rounded-pill" label="All" />
            <PrimaryButton btnClassName="list-group-item mb-4 mx-3 px-4 py-4 rounded-pill" background="transparent" leftIcon={<GiHealthNormal />} label="Health" />
            <PrimaryButton btnClassName="list-group-item mb-4 mx-3 px-4 py-4 rounded-pill" background="transparent" leftIcon={<FaUserGraduate />} label="Education" />
            <PrimaryButton btnClassName="list-group-item mb-4 mx-3 px-4 py-4 rounded-pill" background="transparent" leftIcon={<GrTechnology />} label="Technology" />
            <PrimaryButton btnClassName="list-group-item mb-4 mx-3 px-4 py-4 rounded-pill" background="transparent" leftIcon={<FaCloudSun />} label="Climate"/>
            <PrimaryButton btnClassName="list-group-item mb-4 mx-3 px-4 py-4 rounded-pill" background="transparent" leftIcon={<MdOutlineWork />} label="Career"/>
          </div>
        </div>
    );
  };

  // Main content component
  const MainContent = () => {
    return (
      <div className="col-md-9">
        <div className="main-content">
          <div className="card mb-3 text-white">
            <img className="card-img" src={placeholderBanner} alt="" />
            <div class="card-img-overlay mt-3 ms-5">
              <PrimaryButton label="Live" btnStyle={{ background: BaseColors.orange, color: "white" }} leftIcon={<FaWifi />} />
              <h5 class="card-title mt-3">League of Legends © • &#9872; France</h5>
              <h1 class="card-text mt-4">Watch live how the top teams.</h1>
              <h1 class="card-text mb-3">play FaZe Clan VS Mousesports</h1>
              <PrimaryButton label="Watch" btnClassName="px-5 py-3" />
            </div>
          </div>
          <div className="row position-relative m-0 p-0 justify-content-between text-white">
            <h1 className="col-sm-6">Live Shows</h1>
            <div className="col-sm-2 custom-select">
                <select className="p-2 rounded-1">
                  <option value="0">Popular</option>
                  <option value="1">Latest</option>
                  <option value="2">Older</option>
                </select>
              </div>
          </div>
          <div className="row m-0 p-0">
                  {cardData.map((data) => {
                    return <LiveStreamCard key={data.id} {...data} />;
                  })}
          </div>
        </div>
      </div>
    );
  };

  return <Layout>
    <div className="container-fluid py-5 my-5">
      <div className="row">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  </Layout>;
}