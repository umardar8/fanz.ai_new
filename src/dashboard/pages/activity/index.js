import React, { useState } from "react";
import PrimaryButton from "../../../components/button";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // required import for ChartJS to work properly in React
import { TbHeart, TbPlayerPlay } from "react-icons/tb";
import { MdOutlineChatBubbleOutline, MdOutlineNotificationsActive } from "react-icons/md";
import { IoMdMore } from "react-icons/io";

export default function Activity() {

  // data to be displayed in Pie Chart
  const chartData = [
    {
      id: 1,
      category: 'Subscribers',
      count: 45677,
    },
    {
      id: 2,
      category: 'Returning Viewers',
      count: 43020,
    },
    {
      id: 3,
      category: 'New Viewers',
      count: 12301,
    },
  ];

  // Pie Chart design configuration data
  const pieConfigData = {
    labels: chartData.map((data) => data.category),
    datasets: [
      {
        label: "Viewers This Month",
        data: chartData.map((data) => data.count),
        backgroundColor: [
          '#4A249D',
          '#4C3BCF',
          '#071952',
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  }

  return (
    // start of page layout
    <div className="container-fluid py-4 col">

      {/* first row containing three cards */}
      <div className="row">

        {/* first card: Total Views */}
        <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize text-secondary font-weight-bold">Total Views</p>
                    <h5 className="font-weight-bolder mb-0">
                      2,325,453
                      <span className="text-success text-sm font-weight-bolder ps-2">+34%</span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end d-flex justify-content-end">
                  <div className="icon icon-shape bg-dark shadow text-center border-radius-md">
                    {/* <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i> */}
                    <TbPlayerPlay style={{ fontSize: "38px", margin: "5px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second card: Total Likes */}
        <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize text-secondary font-weight-bold">Total Likes</p>
                    <h5 className="font-weight-bolder mb-0">
                      835,436
                      <span className="text-success text-sm font-weight-bolder ps-2">65%</span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end d-flex justify-content-end">
                  <div className="icon icon-shape bg-dark shadow text-center border-radius-md">
                    <TbHeart style={{ fontSize: '38px', margin: '5px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* third card: Total Comments */}
        <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize text-secondary font-weight-bold">Comments</p>
                    <h5 className="font-weight-bolder mb-0">
                      603,824
                      <span className="text-success text-sm font-weight-bolder ps-2">+23%</span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end d-flex justify-content-end">
                  <div className="icon icon-shape bg-dark shadow text-center border-radius-md">
                    <MdOutlineChatBubbleOutline style={{ fontSize: "38px", margin: "5px" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* end of first row */}

      {/* second row containing two cards (Activities and Pie Chart) */}
      <div className="row my-3">

        {/* first card: Activities (Notifications for the user) */}
        <div className="col-lg-6 col-sm-12 mb-lg-0 mb-sm-3">
          <div className="card">
            <div className="card-body mx-3 mb-4">
              <div className="d-flex justify-content-between">

                {/* title of the section */}
                <div>
                  <h2 className="font-weight-bolder mb-0">Activities</h2>
                  <div className="text-secondary d-flex">
                    <MdOutlineNotificationsActive style={{ fontSize: '22px', marginRight: '10px' }} />
                    <p>you have new notifications</p>
                  </div>
                </div>

                <div>
                  <PrimaryButton
                    leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
                    btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
                  />
                </div>

              </div>

              {/* notification 1 */}
              <div className="row justify-content-between align-items-center py-2">
                
                <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                  <TbPlayerPlay style={{ fontSize: '35px' }} />
                </div>

                <div className="col-7">
                  <h5 className="font-weight-bolder">1354 people watched your stream</h5>
                </div>

                <div className="col-4 text-end text-secondary">
                  <h6 className="font-weight-bolder"><span className="badge bg-dark">NEW</span> today</h6>
                  <h6>26.07.2024</h6>
                </div>

              </div>

              {/* notification 2 */}
              <div className="row justify-content-between align-items-center py-2">
                
                <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                  <TbHeart style={{ fontSize: '35px' }} />
                </div>
                
                <div className="col-7">
                  <h5 className="font-weight-bolder">945 people liked your stream</h5>
                </div>

                <div className="col-4 text-end text-secondary">
                  <h6 className="font-weight-bolder"><span className="badge bg-dark">NEW</span> today</h6>
                  <h6>26.07.2024</h6>
                </div>

              </div>

              {/* notification 3 */}
              <div className="row justify-content-between align-items-center py-2">

                <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                  <MdOutlineChatBubbleOutline style={{ fontSize: '35px' }} />
                </div>

                <div className="col-7">
                  <h5 className="font-weight-bolder">265 people commented on your stream</h5>
                </div>

                <div className="col-4 text-end text-secondary">
                  <h6 className="font-weight-bolder"><span className="badge bg-dark">NEW</span> today</h6>
                  <h6>26.07.2024</h6>
                </div>

              </div>

              {/* notification 4 */}
              <div className="row justify-content-between align-items-center py-2">

                <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                  <TbPlayerPlay style={{ fontSize: '35px' }} />
                </div>

                <div className="col-7">
                  <h5 className="font-weight-bolder">854 people watched your stream</h5>
                </div>

                <div className="col-4 text-end text-secondary">
                  <h6 className="font-weight-bolder">yesterday</h6>
                  <h6>25.07.2024</h6>
                </div>

              </div>

              {/* notification 5 */}
              <div className="row justify-content-between align-items-center py-2">
                
                <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                  <TbHeart style={{ fontSize: '35px' }} />
                </div>

                <div className="col-7">
                  <h5 className="font-weight-bolder">654 people liked your stream</h5>
                </div>

                <div className="col-4 text-end text-secondary">
                  <h6 className="font-weight-bolder">yesterday</h6>
                  <h6>25.07.2024</h6>
                </div>

              </div>

              {/* notification 6 */}
              <div className="row justify-content-between align-items-center py-2">

                <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                  <TbPlayerPlay style={{ fontSize: '35px' }} />
                </div>

                <div className="col-7">
                  <h5 className="font-weight-bolder">365 people watched on your stream</h5>
                </div>

                <div className="col-4 text-end text-secondary">
                  <h6 className="font-weight-bolder">friday</h6>
                  <h6>24.07.2024</h6>
                </div>

              </div>

              {/* notification 7 */}
              <div className="row justify-content-between align-items-center py-2">

                <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                  <MdOutlineChatBubbleOutline style={{ fontSize: '35px' }} />
                </div>

                <div className="col-7">
                  <h5 className="font-weight-bolder">864 people commented on your stream</h5>
                </div>

                <div className="col-4 text-end text-secondary">
                  <h6 className="font-weight-bolder">thursday</h6>
                  <h6>23.07.2024</h6>
                </div>

              </div>

              {/* notification 8 */}
              <div className="row justify-content-between align-items-center py-2">

                <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                  <TbPlayerPlay style={{ fontSize: '35px' }} />
                </div>

                <div className="col-7">
                  <h5 className="font-weight-bolder">654 people watched your stream</h5>
                </div>

                <div className="col-4 text-end text-secondary">
                  <h6 className="font-weight-bolder">wednesday</h6>
                  <h6>22.07.2024</h6>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* end of Activities card */}

        {/* second card: Pie Chart */}
        <div className="col-lg-6 col-sm-12 mb-lg-0 mb-sm-3">

          <div className="card">
            <div className="card-body d-flex justify-content-center mb-5">

              <Pie
                data={pieConfigData}
                options={{
                  responsive: true,
                }}
              />

            </div>
          </div>

        </div>

      </div>
      {/* end of second row */}

    </div>
    // end of page layout
  )
}
