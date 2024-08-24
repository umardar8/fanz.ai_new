import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // required import for using ChartJS in React
import { FaRegNewspaper, FaArrowRight, FaArrowUp } from "react-icons/fa";
import {
  RiVideoUploadLine,
  RiCheckboxCircleLine,
  RiEmotionHappyLine,
  RiShoppingCart2Line,
} from "react-icons/ri";
import {
  TbShoppingCart,
  TbCurrencyDollar,
  TbHeart,
  TbPlayerPlay,
} from "react-icons/tb";

function MainDashboard() {
  // data to be displayed in Line Chart and Bar Chart
  const chartData = [
    {
      id: 1,
      month: "January",
      views: 3324,
      likes: 1925,
    },
    {
      id: 2,
      month: "February",
      views: 8124,
      likes: 6321,
    },
    {
      id: 3,
      month: "March",
      views: 5533,
      likes: 3255,
    },
    {
      id: 4,
      month: "April",
      views: 11536,
      likes: 8423,
    },
    {
      id: 5,
      month: "May",
      views: 9531,
      likes: 4245,
    },
    {
      id: 6,
      month: "June",
      views: 13853,
      likes: 10463,
    },
    {
      id: 7,
      month: "July",
      views: 11022,
      likes: 7463,
    },
    {
      id: 8,
      month: "August",
      views: 16834,
      likes: 12463,
    },
    {
      id: 9,
      month: "September",
      views: 10234,
      likes: 7463,
    },
    {
      id: 10,
      month: "October",
      views: 14256,
      likes: 12463,
    },
  ];

  // chart design configuration data for Line Chart
  const lineConfigData = {
    labels: chartData.map((data) => data.month),
    datasets: [
      {
        label: "Views",
        data: chartData.map((data) => data.views),
        fill: "origin",
        backgroundColor: (context) => {
          const { ctx, data, chartArea } = context.chart;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(27, 23, 56, 0.5)");
          gradient.addColorStop(0.6, "rgba(255, 255, 255, 0.3)");
          return gradient;
        },
        borderColor: "rgb(27, 23, 56)",
        borderWidth: 4,
        pointRadius: 0,
        pointHoverRadius: 10,
      },
      {
        label: "Likes",
        data: chartData.map((data) => data.likes),
        fill: "origin",
        backgroundColor: (context) => {
          const { ctx, data, chartArea } = context.chart;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(48, 47, 123, 0.5)");
          gradient.addColorStop(0.6, "rgba(255, 255, 255, 0.3)");
          return gradient;
        },
        borderColor: "#000000",
        borderWidth: 4,
        pointRadius: 0,
        pointHoverRadius: 10,
      },
    ],
  };

  // chart design configuration data for Bar Chart
  const barConfigData = {
    labels: chartData.map((data) => data.month),
    datasets: [
      {
        label: "Views",
        data: chartData.map((data) => data.views),
        backgroundColor: "rgb(255, 255, 255)",
        borderWidth: 2,
        borderRadius: 50,
        borderSkipped: false,
      },
    ],
  };

  return (
    // start of page layout
    <div className="container-fluid py-4">
      {/* first row containing four cards */}
      <div className="row">
        {/* first card: Streams Uploaded */}
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize text-secondary font-weight-bold">
                      Streams Uploaded
                    </p>
                    <h5 className="font-weight-bolder mb-0">
                      1,453
                      <span className="text-success text-sm font-weight-bolder ps-2">
                        +34%
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end d-flex justify-content-end">
                  <div className="icon icon-shape bg-dark shadow text-center border-radius-md">
                    <RiVideoUploadLine
                      style={{ fontSize: "38px", margin: "5px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second card: Streams Approved */}
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize text-secondary font-weight-bold">
                      Streams Approved
                    </p>
                    <h5 className="font-weight-bolder mb-0">
                      954
                      <span className="text-success text-sm font-weight-bolder ps-2">
                        65%
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end d-flex justify-content-end">
                  <div className="icon icon-shape bg-dark shadow text-center border-radius-md">
                    <RiCheckboxCircleLine
                      style={{ fontSize: "38px", margin: "5px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* third card: Interest Rate */}
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize text-secondary font-weight-bold">
                      Interest Rate
                    </p>
                    <h5 className="font-weight-bolder mb-0">
                      80%
                      <span className="text-success text-sm font-weight-bolder ps-2">
                        out of 1,453
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end d-flex justify-content-end">
                  <div className="icon icon-shape bg-dark shadow text-center border-radius-md">
                    <RiEmotionHappyLine
                      style={{ fontSize: "38px", margin: "5px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fourth card: Items */}
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize text-secondary font-weight-bold">
                      Items
                    </p>
                    <h5 className="font-weight-bolder mb-0">
                      934
                      <span className="text-success text-sm font-weight-bolder ps-2">
                        +10%
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end d-flex justify-content-end">
                  <div className="icon icon-shape bg-dark shadow text-center border-radius-md">
                    <RiShoppingCart2Line
                      style={{ fontSize: "38px", margin: "5px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second row containing two cards */}
      <div className="row py-3">
        {/* first card: Article of the Day */}
        <div className="col-md-7 col-sm-12 mb-md-0 mb-sm-3">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-7">
                  <p className="text-secondary font-weight-bolder">
                    Article of the Day
                  </p>
                  <h5 className="font-weight-bolder">
                    How to improve interest rate of Streams
                  </h5>
                  <p className="text-secondary">
                    Learn some tips that will help you understand the metrics
                    which directly impact the interest rate of your videos.
                  </p>
                  <a className="d-inline-flex mt-5" href="#">
                    <p className="pe-2">Read more</p>
                    <FaArrowRight />
                  </a>
                </div>
                <div className="col-sm-5 d-flex align-items-center justify-content-center">
                  <FaRegNewspaper
                    className="rounded-4 bg-dark px-3"
                    style={{ color: "white", fontSize: "182px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second card: Collaboration with other creators */}
        <div className="col-md-5 col-sm-12 mb-md-0 mb-sm-3">
          <div className="card">
            <div className="card-body">
              <div className="bg-dark rounded p-3 text-white">
                <h3 className="font-weight-bolder">
                  Work with the best Creators
                </h3>
                <p>
                  Looking for collaborators? Explore like minded people who are
                  willing to collaborate with you in your streams and take your
                  content to new heights.
                </p>
                <a className="d-inline-flex mt-5" href="#">
                  <p className="pe-2">Explore Collaborators</p>
                  <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third row containing two cards (charts and some data) */}
      <div className="row">
        {/* Bar Chart and Viewers Overview card */}
        <div className="col-lg-5 col-sm-12 mb-lg-0 mb-sm-3">
          <div className="card">
            <div className="card-body">
              {/* Bar Chart Container */}
              <div className="rounded py-3 bg-dark">
                <Bar
                  data={barConfigData}
                  options={{
                    responsive: true,
                    datasets: {
                      bar: {
                        barPercentage: 0.3, // width of bars
                      },
                    },
                    plugins: {
                      legend: {
                        display: false,
                      },
                      interaction: {
                        intersect: false,
                        mode: "index",
                      },
                    },
                    scales: {
                      x: {
                        display: false,
                        padding: 15,
                        grid: {
                          drawBorder: false,
                          display: false,
                          drawOnChartArea: false,
                          drawTicks: false,
                        },
                      },
                      y: {
                        display: false,
                        padding: 15,
                        grid: {
                          drawBorder: false,
                          display: false,
                          drawOnChartArea: false,
                          drawTicks: false,
                        },
                        beginAtZero: true,
                      },
                    },
                    tension: 0.3,
                  }}
                />
              </div>
              {/* end of Bar Chart container */}

              {/* Viewers Overview Container */}
              <div className="py-3">
                {/* heading of section */}
                <h3>Active Viewers</h3>
                <p className="text-secondary">
                  <span className="font-weight-bolder">(+23%)</span> more than
                  last month
                </p>

                {/* row containing four stats with icon, title, value and progress bar */}
                <div className="row">
                  {/* first stat: Views */}
                  <div className="col-3">
                    <div className="d-flex">
                      <TbPlayerPlay style={{ fontSize: "25px" }} />
                      <h5 className="ps-1">Views</h5>
                    </div>

                    <h3 className="font-weight-bolder">2m</h3>

                    <div
                      style={{ width: "100%", height: "10px" }}
                      className="rounded bg-secondary"
                    >
                      <div
                        style={{ width: "80%", height: "10px" }}
                        className="rounded bg-dark"
                      ></div>
                    </div>
                  </div>

                  {/* second stat: Likes */}
                  <div className="col-3">
                    <div className="d-flex">
                      <TbHeart style={{ fontSize: "25px" }} />
                      <h5 className="ps-1">Likes</h5>
                    </div>

                    <h3 className="font-weight-bolder">835k</h3>

                    <div
                      style={{ width: "100%", height: "10px" }}
                      className="rounded bg-secondary"
                    >
                      <div
                        style={{ width: "35%", height: "10px" }}
                        className="rounded bg-dark"
                      ></div>
                    </div>
                  </div>

                  {/* third stat: Items (items listed in shop section by user) */}
                  <div className="col-3">
                    <div className="d-flex">
                      <TbShoppingCart style={{ fontSize: "25px" }} />
                      <h5 className="ps-1">Items</h5>
                    </div>

                    <h3 className="font-weight-bolder">934</h3>

                    <div
                      style={{ width: "100%", height: "10px" }}
                      className="rounded bg-secondary"
                    >
                      <div
                        style={{ width: "60%", height: "10px" }}
                        className="rounded bg-dark"
                      ></div>
                    </div>
                  </div>

                  {/* fourth stat: Sales (shop items sold through ads in videos) */}
                  <div className="col-3">
                    <div className="d-flex">
                      <TbCurrencyDollar style={{ fontSize: "25px" }} />
                      <h5 className="ps-1">Sales</h5>
                    </div>

                    <h3 className="font-weight-bolder">$997</h3>

                    <div
                      style={{ width: "100%", height: "10px" }}
                      className="rounded bg-secondary"
                    >
                      <div
                        style={{ width: "50%", height: "10px" }}
                        className="rounded bg-dark"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of Viewers Overview container */}
            </div>
          </div>
        </div>
        {/* end of Bar Chart and Viewers Overview Card */}

        {/* Line Chart Card */}
        <div className="col-lg-7 col-sm-12 mb-lg-0 mb-sm-3">
          <div className="card">
            <div className="card-body py-4">
              <h3 className="font-weight-bolder">Views and Likes Overview</h3>
              <p className="d-flex text-secondary pb-4">
                <FaArrowUp
                  style={{
                    fontSize: "18px",
                    color: "green",
                    marginRight: "10px",
                  }}
                />
                <span className="font-weight-bolder">30% more in 2024</span>
              </p>
              <Line
                data={lineConfigData}
                options={{
                  responsive: true,
                  interaction: {
                    mode: "index",
                    intersect: false,
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: {
                    x: {
                      ticks: {
                        padding: 15,
                        color: "#b2b9bf",
                      },
                      grid: {
                        drawBorder: false,
                        display: false,
                        drawOnChartArea: false,
                        drawTicks: false,
                      },
                    },
                    y: {
                      ticks: {
                        padding: 15,
                        color: "#b2b9bf",
                      },
                      grid: {
                        drawBorder: false,
                        display: false,
                        drawOnChartArea: false,
                        drawTicks: false,
                      },
                      beginAtZero: true,
                      padding: 15,
                    },
                  },
                  tension: 0.5,
                }}
              />
            </div>
          </div>
        </div>
        {/* end of Line Chart card */}
      </div>
      {/* end of third row */}
    </div>
    // end of page layout
  );
}

export default MainDashboard;
