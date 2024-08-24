import React, { useState } from "react";
import { Stack } from "@chakra-ui/react";
import CustomTable from "../../../components/table";
import BaseColors from "../../../constant";
import PrimaryButton from "../../../components/button";
import InputField from "../../../components/input-field";
import { Styles } from "../../../styles";
import PrimaryModal from "../../../components/modal";
import { IoPersonAddOutline, IoFunnelOutline } from "react-icons/io5";
import { IoMdMore, IoMdCheckmarkCircleOutline } from "react-icons/io";
import CustomSwitch from "../../../components/switch";
import { MdEditNote } from "react-icons/md";

const inputStyle = {
  borderRadius: "2px",
  height: "5vh",
  width: "100%",
  padding: "4px",
  fontSize: 14,
  color: BaseColors.black,
  border: `0.5px solid ${BaseColors.light_grey},`,
};

const labelStyle = {
  fontSize: 14,
  fontWeight: "500",
  marginLeft: "-1px",
};

export default function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showMoreModal = () => {
    setIsMoreModalOpen(true);
  };

  const handleMoreCancel = () => {
    setIsMoreModalOpen(false);
  };

  let data = [
    {
      userId: 1,
      id: 1,
      // Name: "Tianna Douglas",
      Username: "jschmeler",
      // Role: "User",
      Email: "jessie.cremin@yahoo.com",
      Progress: (
        <div className="progress-wrapper w-100 mx-auto">
          <div style={{ fontSize: "14px", paddingBottom: "2px" }}>Interest</div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-gradient-info w-60"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ),
      Status: <CustomSwitch />,
      More: (
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ maxWidth: "150px" }}
        >
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Tianna Douglas</p>
            <p class="text-xs text-secondary mb-0">user</p>
          </div>
          <div>
            <PrimaryButton
              leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
              btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
              onClick={showMoreModal}
            />
          </div>
        </div>
      ),
    },
    {
      userId: 2,
      id: 2,
      // Name: "Rene Batz",
      Username: "kim.hermann",
      // Role: "User",
      Email: "epacocha@davis.com",
      Progress: (
        <div className="progress-wrapper w-100 mx-auto">
          <div style={{ fontSize: "14px", paddingBottom: "2px" }}>Interest</div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-gradient-info w-60"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ),
      Status: <CustomSwitch />,
      More: (
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ maxWidth: "150px" }}
        >
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Rene Batz</p>
            <p class="text-xs text-secondary mb-0">user</p>
          </div>
          <div>
            <PrimaryButton
              leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
              btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
              onClick={showMoreModal}
            />
          </div>
        </div>
      ),
    },
    {
      userId: 3,
      id: 3,
      // Name: "Vinnie Boehm V",
      Username: "kamren76",
      // Role: "Creator",
      Email: "rath.deja@hotmail.com",
      Progress: (
        <div className="progress-wrapper w-100 mx-auto">
          <div style={{ fontSize: "14px", paddingBottom: "2px" }}>Stream</div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-gradient-info w-60"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ),
      Status: <CustomSwitch />,
      More: (
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ maxWidth: "150px" }}
        >
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Vinnie Boehm V</p>
            <p class="text-xs text-secondary mb-0">creator</p>
          </div>
          <div>
            <PrimaryButton
              leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
              btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
              onClick={showMoreModal}
            />
          </div>
        </div>
      ),
    },
    {
      userId: 4,
      id: 4,
      // Name: "Dane Yundt",
      Username: "rigoberto.braun",
      // Role: "Creator",
      Email: "rheathcote@hotmail.com",
      Progress: (
        <div className="progress-wrapper w-100 mx-auto">
          <div style={{ fontSize: "14px", paddingBottom: "2px" }}>Stream</div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-gradient-info w-60"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ),
      Status: <CustomSwitch />,
      More: (
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ maxWidth: "150px" }}
        >
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Dane Yundt</p>
            <p class="text-xs text-secondary mb-0">creator</p>
          </div>
          <div>
            <PrimaryButton
              leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
              btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
              onClick={showMoreModal}
            />
          </div>
        </div>
      ),
    },
    {
      userId: 5,
      id: 5,
      // Name: "Krystel Weber",
      Username: "skoch",
      // Role: "Creator",
      Email: "zulauf.pat@effertz.com",
      Progress: (
        <div className="progress-wrapper w-100 mx-auto">
          <div style={{ fontSize: "14px", paddingBottom: "2px" }}>Stream</div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-gradient-info w-60"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ),
      Status: <CustomSwitch />,
      More: (
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ maxWidth: "150px" }}
        >
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Krystel Weber</p>
            <p class="text-xs text-secondary mb-0">creator</p>
          </div>
          <div>
            <PrimaryButton
              leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
              btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
              onClick={showMoreModal}
            />
          </div>
        </div>
      ),
    },
    {
      userId: 6,
      id: 6,
      // Name: "Oren Mertz",
      Username: "shaniya.hagenes",
      // Role: "User",
      Email: "austin77@rath.com",
      Progress: (
        <div className="progress-wrapper w-100 mx-auto">
          <div style={{ fontSize: "14px", paddingBottom: "2px" }}>Interest</div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-gradient-info w-60"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ),
      Status: <CustomSwitch />,
      More: (
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ maxWidth: "150px" }}
        >
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Oren Mertz</p>
            <p class="text-xs text-secondary mb-0">user</p>
          </div>
          <div>
            <PrimaryButton
              leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
              btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
              onClick={showMoreModal}
            />
          </div>
        </div>
      ),
    },
    {
      userId: 7,
      id: 7,
      // Name: "Manuela Mueller",
      Username: "hsimonis",
      // Role: "User",
      Email: "robin.herzog@kerluke.biz",
      Progress: (
        <div className="progress-wrapper w-100 mx-auto">
          <div style={{ fontSize: "14px", paddingBottom: "2px" }}>Interest</div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-gradient-info w-60"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ),
      Status: <CustomSwitch />,
      More: (
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ maxWidth: "150px" }}
        >
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Manuela Mueller</p>
            <p class="text-xs text-secondary mb-0">user</p>
          </div>
          <div>
            <PrimaryButton
              leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
              btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
              onClick={showMoreModal}
            />
          </div>
        </div>
      ),
    },
    {
      userId: 8,
      id: 8,
      // Name: "Lowell Rau",
      Username: "wendy.stark",
      // Role: "User",
      Email: "pagac.novella@becker.net",
      Progress: (
        <div className="progress-wrapper w-100 mx-auto">
          <div style={{ fontSize: "14px", paddingBottom: "2px" }}>Interest</div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-gradient-info w-60"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ),
      Status: <CustomSwitch />,
      More: (
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ maxWidth: "150px" }}
        >
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Lowell Rau</p>
            <p class="text-xs text-secondary mb-0">user</p>
          </div>
          <div>
            <PrimaryButton
              leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
              btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
              onClick={showMoreModal}
            />
          </div>
        </div>
      ),
    },
    {
      userId: 9,
      id: 9,
      // Name: "Lue Cremin",
      Username: "gutmann.brown",
      // Role: "Creator",
      Email: "alphonso94@mraz.com",
      Progress: (
        <div className="progress-wrapper w-100 mx-auto">
          <div style={{ fontSize: "14px", paddingBottom: "2px" }}>Stream</div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-gradient-info w-60"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ),
      Status: <CustomSwitch />,
      More: (
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ maxWidth: "150px" }}
        >
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Lue Cremin</p>
            <p class="text-xs text-secondary mb-0">creator</p>
          </div>
          <div>
            <PrimaryButton
              leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
              btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
              onClick={showMoreModal}
            />
          </div>
        </div>
      ),
    },
    {
      userId: 10,
      id: 10,
      // Name: "Ezekiel Hayes",
      Username: "xmills",
      // Role: "Creator",
      Email: "tklocko@wintheiser.net",
      Progress: (
        <div className="progress-wrapper w-100 mx-auto">
          <div style={{ fontSize: "14px", paddingBottom: "2px" }}>Stream</div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-gradient-info w-60"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ),
      Status: <CustomSwitch />,
      More: (
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ maxWidth: "150px" }}
        >
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Ezekiel Hayes</p>
            <p class="text-xs text-secondary mb-0">creator</p>
          </div>
          <div>
            <PrimaryButton
              leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
              btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
              onClick={showMoreModal}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="">
        <div className="row p-0 m-0">
          {/* start header */}
          <div className="col-12 mb-2 ">
            <div className="row d-flex justify-content-between align-items-center my-2">
              <div className="col-6 col-lg-4 d-flex flex-column justify-content-center">
                <h3 className="text-dark text-family mt-2">Users Detail</h3>
              </div>
              <div className="col-6 col-lg-4  d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-end ">
                  <PrimaryButton
                    leftIcon={
                      <IoFunnelOutline
                        style={{
                          fontSize: "1.5em",
                          color: "rgb(148, 148, 148)",
                        }}
                      />
                    }
                    btnStyle={{
                      background: "transparent",
                      marginRight: "10px",
                    }}
                    btnClassName="border-1 rounded-1"
                  />
                  <PrimaryButton
                    leftIcon={
                      <IoPersonAddOutline
                        style={{
                          fontSize: "1.5em",
                          color: "rgb(148, 148, 148)",
                        }}
                      />
                    }
                    btnStyle={{ background: "transparent" }}
                    btnClassName="border-1 rounded-1"
                    onClick={showModal}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* end  header */}

          <div className="col-12">
            <CustomTable
              cols={[
                {
                  heading: "Id",
                  key: "id",
                },

                {
                  heading: "Username",
                  key: "Username",
                },
                // {
                //   heading: "Role",
                //   key: "Role",
                // },

                // {
                //   heading: "Name",
                //   key: "Name",
                // },
                {
                  heading: "Email",
                  key: "Email",
                },
                {
                  heading: "Status",
                  key: "Status",
                },
                {
                  heading: "Progress",
                  key: "Progress",
                },

                {
                  heading: "More Detail",
                  key: "More",
                },
              ]}
              datasourse={data}
              size="sm"
            />
            {/* <Th isNumeric>ID</Th>
              <Th>Name</Th>
              <Th>Username</Th>
              <Th>Email</Th>
              <Th>City</Th>
              <Th>Country</Th>
              <Th>Action</Th> */}
            {/* <CustomizedTable
            label="Testing data"
            cols={[
              {
                heading: "Id",
                key: "id",
              },
              {
                heading: "Dessert",
                key: "Dessert",
              },
              {
                heading: "Calories",
                key: "Calories",
              },
              {
                heading: "Fat",
                key: "Fat",
              },
              {
                heading: "Carbs",
                key: "Carbs",
              },
              {
                heading: "Protein",
                key: "Protein",
              },
            ]}
            datasourse={data}
          /> */}
          </div>
        </div>
      </div>

      {/* model foam */}
      <PrimaryModal
        open={isModalOpen}
        onCancel={handleCancel}
        styles={{
          display: "flex",
          width: "40vw",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
        }}
        Modalbody={
          <>
            <div className=" px-4 py-5">
              <div className="d-flex flex-column  text-black px-2 userFormMain py-4 position-relative">
                <div className="userFormHeading ">
                  <h2 className="text-secondary  text-center fs-5 ">
                    User Form
                  </h2>
                </div>
                <Stack spacing={2} className="text-black">
                  <InputField
                    padding={0}
                    isBlack={true}
                    label="Name"
                    type="text"
                    placeholder="enter name"
                    inputClassName="userFormInput"
                    inputStyle={inputStyle}
                    labelStyle={labelStyle}
                  />
                  <InputField
                    padding={0}
                    isBlack={true}
                    label="Username"
                    type="text"
                    placeholder="enter username"
                    inputClassName="userFormInput"
                    inputStyle={inputStyle}
                    labelStyle={labelStyle}
                  />
                  <InputField
                    padding={0}
                    isBlack={true}
                    label="Email"
                    type="email"
                    placeholder="enter email"
                    inputClassName="userFormInput"
                    inputStyle={inputStyle}
                    labelStyle={labelStyle}
                  />
                  <InputField
                    padding={0}
                    isBlack={true}
                    label="Password"
                    type="password"
                    placeholder="enter password"
                    inputWidth={"100%"}
                    inputClassName="userFormInput"
                    inputStyle={inputStyle}
                    labelStyle={labelStyle}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <p className="my-1 text-secondary ps-1" style={labelStyle}>
                      Role{" "}
                    </p>
                    <select
                      className="px-2"
                      style={{
                        border: `1px solid ${BaseColors.light_grey}`,
                        borderRadius: "2px",
                        color: BaseColors.light_grey,
                        height: "5vh",
                        width: "97%",
                        marginBottom: "20px",
                        fontSize: 12,
                      }}
                    >
                      <option value="0">select</option>
                      <option value="1">User</option>
                      <option value="2">Creator</option>
                    </select>
                  </div>
                </Stack>

                <div className="col d-flex justify-content-end mt-2 pe-3">
                  <PrimaryButton
                    label="Confirm"
                    btnClassName="me-2 px-4"
                    btnStyle={{
                      borderRadius: "2px",
                      marginEnd: "10px",
                      height: "5vh",
                    }}
                    colorScheme="purple"
                  />
                  <PrimaryButton
                    label="Cancel"
                    variant="outline"
                    btnClassName="px-4"
                    btnStyle={{
                      borderRadius: "2px",
                      background: "transparent",
                      height: "5vh",
                    }}
                  />
                </div>
                {/* <form action="/" method="post">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputFile">File input</label>
                    <input type="file" id="exampleInputFile" />
                    <p className="help-block">Example block-level help text here.</p>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" />Check me out
                    </label>
                  </div>
                  <PrimaryButton
                    label="Add"
                    btnClassName="me-2"
                    btnStyle={{ borderRadius: "2px", marginEnd: "10px" }}
                    colorScheme="purple"
                  />
                  <hr />
                </form> */}
              </div>
            </div>
          </>
        }
      />
      {/* more info modal */}
      <PrimaryModal
        open={isMoreModalOpen}
        onCancel={handleMoreCancel}
        styles={{
          display: "flex",
          width: "40vw",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
        }}
        Modalbody={
          <>
            <div className="row p-4 d-flex">
              <div className="col-12 text-black px-4">
                <div className="d-flex">
                  <div className="text-center" style={{ width: "95%" }}>
                    <p className="text-family text-center fs-4 mb-2">
                      <b>User Details</b>
                    </p>
                  </div>
                  <div style={{ width: "5%" }}>
                    <MdEditNote size={20} />
                  </div>
                </div>
                <CustomTable
                  variant="simple"
                  noHead={true}
                  noFooter={true}
                  cols={[
                    { key: "col1", colClass: "h6 text-secondary" },
                    { key: "col2" },
                  ]}
                  datasourse={[
                    { col1: "Name", col2: "Krystel Weber" },
                    { col1: "Username", col2: "skoch" },
                    { col1: "Role", col2: "Creator" },
                    { col1: "Email", col2: "zulauf.pat@effertz.com" },
                    { col1: "Date", col2: "02/06/2024" },
                    { col1: "Time", col2: "07:18 PM" },
                  ]}
                />
                {/* <p className="heading-2 mb-1"><b>Name:</b> name_of_user</p>
                  <p className="heading-2 mb-1"><b>Username:</b> username_of_user</p>
                  <p className="heading-2 mb-1"><b>Email:</b> email_of_user@email.com</p>
                  <p className="heading-2 mb-1"><b>Date:</b> dd_mm_yyyy</p>
                  <p className="heading-2 mb-1"><b>Time:</b> hh:mm</p>
                  <p className="heading-2"><b>Duration:</b> 02 hour 25 min</p> */}
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
