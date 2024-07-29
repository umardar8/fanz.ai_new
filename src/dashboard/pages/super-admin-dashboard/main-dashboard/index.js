import React from "react";
import PrimaryButton from '../../../../components/button';
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { HiOutlineArrowNarrowUp, HiOutlineArrowNarrowDown } from "react-icons/hi";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // required import for using ChartJS in React
import { FaRegUser } from "react-icons/fa";

const cardClassName = "col-sm-3 d-flex row rounded-1 shadow bg-white p-4 justify-content-center";
const contentClassName = "d-flex justify-content-center pb-4";

const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
  ],
  datasets: [{
    label: 'Users',
    data: [50000, 90000, 120000, 160000, 169020],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }]
}

function MainDashboard() {
  return (
    <div className="container">

      {/* start of first row containing three cards */}
      <div className="d-flex row m-4 justify-content-around">

        {/* first card */}
        <div className={cardClassName}>
          <p>Activities</p>
          <h2 className={contentClassName}>
            2463
            <HiOutlineArrowNarrowUp style={{ color: "green", fontSize: "1.1em" }} />
          </h2>
          <PrimaryButton
            label='show details'
            background="black"
            btnStyle={{ width: '220px', fontSize: '18px', background: 'rgba(237, 242, 247)' }}
            rightIcon={<BiSolidMessageSquareDetail />}
          />
        </div>

        {/* second card */}
        <div className={cardClassName}>
          <p>Users</p>
          <h2 className={contentClassName}>
            1525
            <HiOutlineArrowNarrowUp style={{ color: "green", fontSize: "1.1em" }} />
          </h2>
          <PrimaryButton
            label='show details'
            background="black"
            btnStyle={{ width: '220px', fontSize: '18px', background: 'rgba(237, 242, 247)' }}
            rightIcon={<BiSolidMessageSquareDetail />}
          />
        </div>

        {/* third card */}
        <div className={cardClassName}>
          <p>Streams</p>
          <h2 className={contentClassName}>
            986
            <HiOutlineArrowNarrowDown style={{ color: "red", fontSize: "1.1em" }} />
          </h2>
          <PrimaryButton
            label='show details'
            background="black"
            btnStyle={{ width: '220px', fontSize: '18px', background: 'rgba(237, 242, 247)' }}
            rightIcon={<BiSolidMessageSquareDetail />}
          />
        </div>

      </div>
      {/* end of first row */}

      {/* start of second row containing two cards */}
      <div className="d-flex row  m-4 justify-content-between">

        {/* first card */}
        <div className="col-sm-6 d-flex row rounded-1 shadow bg-white p-4 ms-5 justify-content-center">
          <h4>Users gained in last 5 Months</h4>
          <Doughnut data={data} options={{ responsive: true }} />
        </div>

        {/* second card */}
        <div className="col-sm-5 d-flex row rounded-1 shadow bg-white p-4 me-5 justify-content-center">
          <h4>Support Requests</h4>
          <div className="col-sm-12 mb-lg-0 mb-sm-3">

            {/* notification 1 */}
            <div className="row justify-content-between align-items-center py-2">

              <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                <FaRegUser style={{ fontSize: '35px' }} />
              </div>

              <div className="col-7">
                <h6>
                  <a href="#">kamren76</a> sent a <a href="#">live stream</a> support <a href="#">request</a>
                </h6>
              </div>

              <div className="col-4 text-end text-secondary">
                <h6 className="font-weight-bolder"><span className="badge bg-dark">NEW</span> today</h6>
                <h6>26.08.2024</h6>
              </div>

            </div>

            {/* notification 2 */}
            <div className="row justify-content-between align-items-center py-2">

              <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                <FaRegUser style={{ fontSize: '35px' }} />
              </div>

              <div className="col-7">
                <h6>
                  <a href="#">kim.hermann</a> sent a <a href="#">live stream</a> support <a href="#">request</a>
                </h6>
              </div>

              <div className="col-4 text-end text-secondary">
                <h6 className="font-weight-bolder"><span className="badge bg-dark">NEW</span> today</h6>
                <h6>26.08.2024</h6>
              </div>

            </div>

            {/* notification 3 */}
            <div className="row justify-content-between align-items-center py-2">

              <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                <FaRegUser style={{ fontSize: '35px' }} />
              </div>

              <div className="col-7">
                <h6>
                  <a href="#">wendy.stark</a> sent a <a href="#">live stream</a> support <a href="#">request</a>
                </h6>
              </div>

              <div className="col-4 text-end text-secondary">
                <h6 className="font-weight-bolder"><span className="badge bg-dark">NEW</span> today</h6>
                <h6>26.07.2024</h6>
              </div>

            </div>

            {/* notification 4 */}
            <div className="row justify-content-between align-items-center py-2">

              <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                <FaRegUser style={{ fontSize: '35px' }} />
              </div>

              <div className="col-7">
                <h6>
                  <a href="#">gutmann.brown</a> sent a <a href="#">live stream</a> support <a href="#">request</a>
                </h6>
              </div>

              <div className="col-4 text-end text-secondary">
                <h6 className="font-weight-bolder">thursday</h6>
                <h6>25.07.2024</h6>
              </div>

            </div>

            {/* notification 5 */}
            <div className="row justify-content-between align-items-center py-2">

              <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                <FaRegUser style={{ fontSize: '35px' }} />
              </div>

              <div className="col-7">
                <h6>
                  <a href="#">rigoberto.braun</a> sent a <a href="#">live stream</a> support <a href="#">request</a>
                </h6>
              </div>

              <div className="col-4 text-end text-secondary">
                <h6 className="font-weight-bolder">wednesday</h6>
                <h6>24.07.2024</h6>
              </div>

            </div>

            {/* notification 6 */}
            <div className="row justify-content-between align-items-center py-2">

              <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                <FaRegUser style={{ fontSize: '35px' }} />
              </div>

              <div className="col-7">
                <h6>
                  <a href="#">shaniya.hagenes</a> sent a <a href="#">live stream</a> support <a href="#">request</a>
                </h6>
              </div>

              <div className="col-4 text-end text-secondary">
                <h6 className="font-weight-bolder">tuesday</h6>
                <h6>23.07.2024</h6>
              </div>

            </div>

            {/* notification 7 */}
            <div className="row justify-content-between align-items-center py-2">

              <div className="col-1 icon icon-shape rounded bg-dark justify-content-center align-items-center d-flex">
                <FaRegUser style={{ fontSize: '35px' }} />
              </div>

              <div className="col-7">
                <h6>
                  <a href="#">hsimonis</a> sent a <a href="#">live stream</a> support <a href="#">request</a>
                </h6>
              </div>

              <div className="col-4 text-end text-secondary">
                <h6 className="font-weight-bolder">monday</h6>
                <h6>22.07.2024</h6>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MainDashboard;
