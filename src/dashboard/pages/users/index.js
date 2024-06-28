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
  padding: "15px 20px",
  color: BaseColors.black,
  border: `1px solid ${BaseColors.light_grey},`,
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
          <div style={{ fontSize: '14px', paddingBottom: '2px' }}>
            Interest
          </div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      ),
      Status:
        <CustomSwitch />,
      More:
        <div className="d-flex align-items-center justify-content-between" style={{maxWidth:'150px'}}>
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Tianna Douglas</p>
            <p class="text-xs text-secondary mb-0">user</p>
          </div>
          <div>
          <PrimaryButton
            leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
            btnStyle={{ background: "transparent", padding: 0, margin: 0,  }}
            onClick={showMoreModal}
          />
          </div>
        </div>
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
          <div style={{ fontSize: '14px', paddingBottom: '2px' }}>
            Interest
          </div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      ),
      Status:
        <CustomSwitch />,
      More:
        <div className="d-flex align-items-center justify-content-between" style={{maxWidth:'150px'}}>
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Rene Batz</p>
            <p class="text-xs text-secondary mb-0">user</p>
          </div>
          <div>
          <PrimaryButton
            leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
            btnStyle={{ background: "transparent", padding: 0, margin: 0,  }}
            onClick={showMoreModal}
          />
          </div>
        </div>
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
          <div style={{ fontSize: '14px', paddingBottom: '2px' }}>
            Stream
          </div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      ),
      Status:
        <CustomSwitch />,
      More:
        <div className="d-flex align-items-center justify-content-between" style={{maxWidth:'150px'}}>
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Vinnie Boehm V</p>
            <p class="text-xs text-secondary mb-0">creator</p>
          </div>
          <div>
          <PrimaryButton
            leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
            btnStyle={{ background: "transparent", padding: 0, margin: 0,  }}
            onClick={showMoreModal}
          />
          </div>
        </div>
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
          <div style={{ fontSize: '14px', paddingBottom: '2px' }}>
            Stream
          </div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      ),
      Status:
        <CustomSwitch />,
      More:
        <div className="d-flex align-items-center justify-content-between" style={{maxWidth:'150px'}}>
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Dane Yundt</p>
            <p class="text-xs text-secondary mb-0">creator</p>
          </div>
          <div>
          <PrimaryButton
            leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
            btnStyle={{ background: "transparent", padding: 0, margin: 0,  }}
            onClick={showMoreModal}
          />
          </div>
        </div>
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
          <div style={{ fontSize: '14px', paddingBottom: '2px' }}>
            Stream
          </div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      ),
      Status:
        <CustomSwitch />,
      More:
        <div className="d-flex align-items-center justify-content-between" style={{maxWidth:'150px'}}>
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Krystel Weber</p>
            <p class="text-xs text-secondary mb-0">creator</p>
          </div>
          <div>
          <PrimaryButton
            leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
            btnStyle={{ background: "transparent", padding: 0, margin: 0,  }}
            onClick={showMoreModal}
          />
          </div>
        </div>
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
          <div style={{ fontSize: '14px', paddingBottom: '2px' }}>
            Interest
          </div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      ),
      Status:
        <CustomSwitch />,
      More:
        <div className="d-flex align-items-center justify-content-between" style={{maxWidth:'150px'}}>
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Oren Mertz</p>
            <p class="text-xs text-secondary mb-0">user</p>
          </div>
          <div>
          <PrimaryButton
            leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
            btnStyle={{ background: "transparent", padding: 0, margin: 0,  }}
            onClick={showMoreModal}
          />
          </div>
        </div>
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
          <div style={{ fontSize: '14px', paddingBottom: '2px' }}>
            Interest
          </div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      ),
      Status:
        <CustomSwitch />,
      More:
        <div className="d-flex align-items-center justify-content-between" style={{maxWidth:'150px'}}>
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Manuela Mueller</p>
            <p class="text-xs text-secondary mb-0">user</p>
          </div>
          <div>
          <PrimaryButton
            leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
            btnStyle={{ background: "transparent", padding: 0, margin: 0,  }}
            onClick={showMoreModal}
          />
          </div>
        </div>
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
          <div style={{ fontSize: '14px', paddingBottom: '2px' }}>
            Interest
          </div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      ),
      Status:
        <CustomSwitch />,
      More:
        <div className="d-flex align-items-center justify-content-between" style={{maxWidth:'150px'}}>
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Lowell Rau</p>
            <p class="text-xs text-secondary mb-0">user</p>
          </div>
          <div>
          <PrimaryButton
            leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
            btnStyle={{ background: "transparent", padding: 0, margin: 0,  }}
            onClick={showMoreModal}
          />
          </div>
        </div>
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
          <div style={{ fontSize: '14px', paddingBottom: '2px' }}>
            Stream
          </div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      ),
      Status:
        <CustomSwitch />,
      More:
        <div className="d-flex align-items-center justify-content-between" style={{maxWidth:'150px'}}>
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Lue Cremin</p>
            <p class="text-xs text-secondary mb-0">creator</p>
          </div>
          <div>
          <PrimaryButton
            leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
            btnStyle={{ background: "transparent", padding: 0, margin: 0,  }}
            onClick={showMoreModal}
          />
          </div>
        </div>
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
          <div style={{ fontSize: '14px', paddingBottom: '2px' }}>
            Stream
          </div>
          <div className="progress-info">
            <div className="progress-percentage">
              <span className="text-xs font-weight-bold">60%</span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      ),
      Status:
        <CustomSwitch />,
      More:
        <div className="d-flex align-items-center justify-content-between" style={{maxWidth:'150px'}}>
          <div className="">
            <p class="text-xs font-weight-bold mb-0">Ezekiel Hayes</p>
            <p class="text-xs text-secondary mb-0">creator</p>
          </div>
          <div>
          <PrimaryButton
            leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
            btnStyle={{ background: "transparent", padding: 0, margin: 0,  }}
            onClick={showMoreModal}
          />
          </div>
        </div>
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
              size='sm'
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
            <div className="row container p-4 d-flex">
              <h2 className="text-secondary justify-content-center d-flex">
                User Form
              </h2>
              <div className="col-12 align-items-center text-black px-4">
                <Stack spacing={2} className="text-black">
                  <InputField
                    isBlack={true}
                    label="Name"
                    type="text"
                    placeholder="enter name"
                    inputStyle={inputStyle}
                  />
                  <InputField
                    isBlack={true}
                    label="Username"
                    type="text"
                    placeholder="enter username"
                    inputStyle={inputStyle}
                  />
                  <InputField
                    isBlack={true}
                    label="Email"
                    type="email"
                    placeholder="enter email"
                    inputStyle={inputStyle}
                  />
                  <InputField
                    isBlack={true}
                    label="Password"
                    type="password"
                    placeholder="enter password"
                    inputWidth={"100%"}
                    inputStyle={inputStyle}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <p
                      className="my-1 text-secondary"
                      style={Styles.headerItem3}
                    >
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
                      }}
                    >
                      <option value="0">select</option>
                      <option value="1">User</option>
                      <option value="2">Creator</option>
                    </select>
                  </div>
                </Stack>
                <div className="col d-flex justify-content-end mt-2">
                  <PrimaryButton
                    label="Add"
                    btnClassName="me-2"
                    btnStyle={{ borderRadius: "2px", marginEnd: "10px" }}
                    colorScheme="purple"
                  />
                  <PrimaryButton
                    label="Cancel"
                    variant="outline"
                    btnStyle={{
                      borderRadius: "2px",
                      background: "transparent",
                    }}
                  />
                </div>
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
                  <div className="text-center" style={{ width: '95%' }}>
                    <p className="text-family text-center fs-4 mb-2">
                      <b>User Details</b>
                    </p>
                  </div>
                  <div style={{ width: '5%' }}>
                    <MdEditNote size={20} />
                  </div>
                </div>
                <CustomTable
                  variant='simple'
                  noHead={true}
                  noFooter={true}
                  cols={[{ key: "col1", colClass: "h6 text-secondary" }, { key: "col2" }]}

                  datasourse={
                    [
                      { col1: "Name", col2: "Krystel Weber" },
                      { col1: "Username", col2: "skoch" },
                      { col1: "Role", col2: "Creator" },
                      { col1: "Email", col2: "zulauf.pat@effertz.com" },
                      { col1: "Date", col2: "02/06/2024" },
                      { col1: "Time", col2: "07:18 PM" },
                    ]
                  }
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
