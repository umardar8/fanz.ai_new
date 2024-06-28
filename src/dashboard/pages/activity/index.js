import React from "react";


export default function Activity() {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Today's Money</p>
                    <h5 className="font-weight-bolder mb-0">
                      $53,000
                      <span className="text-success text-sm font-weight-bolder ps-2">+55%</span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end d-flex justify-content-end">
                  <div className="icon icon-shape bg-dark shadow text-center border-radius-md">
                    <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  )
}
