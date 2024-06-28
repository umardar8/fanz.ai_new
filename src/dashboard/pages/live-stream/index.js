import React, { useState } from "react";
import { Stack, Textarea } from "@chakra-ui/react";
import CustomTable from "../../../components/table";
import BaseColors from "../../../constant";
import PrimaryButton from "../../../components/button";
import InputField from "../../../components/input-field";
import { Styles } from "../../../styles";
import PrimaryModal from "../../../components/modal";
import { IoFunnelOutline } from "react-icons/io5";
import { IoMdMore, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiVideoPlus } from "react-icons/bi";
import { MdEditNote, MdOutlineDisabledVisible } from "react-icons/md";
import { SlEye } from "react-icons/sl";
import { TiTickOutline } from "react-icons/ti";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { color } from "framer-motion";

// import StreamingForm from "../../../components/streaming-form";

const inputStyle = {
  borderRadius: "2px",
  height: "5vh",
  width: "100%",
  padding: "15px 20px",
  color: BaseColors.black,
  border: `1px solid ${BaseColors.light_grey},`,
};

export default function LiveStream() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMoreModalOpen, setIsMoreModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showMoreModal = () => {
    setIsMoreModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleMoreCancel = () => {
    setIsMoreModalOpen(false);
  };

  let data = [
    {

      streamId: 1,
      id: 1,
      Title: "Foreign Scholarships",
      Description: "Students' Awareness Live Session",
      Category: "Education",
      Status:
        <PrimaryButton
          label="Pending"
          btnStyle={{ background: "rgba(36,120,192, 0.3)", color: '#015b9b', width:'110px', margin: 0, borderRadius: '25px',fontSize:'14px', height:'33px' }}
        />,
      Watch:
        <PrimaryButton
          leftIcon={<SlEye size={20} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
        />,
      More:
        <PrimaryButton
          leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
          onClick={showMoreModal}
        />,
    },
    {
      streamId: 2,
      id: 2,
      Title: "Heat Stroke in MENA Region",
      Description: "Report on Global Warming",
      Category: "Climate",
      Status:
        <PrimaryButton
          label="Reject"
          btnStyle={{ background: "rgba(250,187,195, 0.4)", color: '#B23E45',width:'110px', margin: 0, borderRadius: '25px',fontSize:'14px', height:'33px' }}
        />,
      Watch:
        <PrimaryButton
          leftIcon={<SlEye size={20} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
        />,
      More:
        <PrimaryButton
          leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
          onClick={showMoreModal}
        />,
    },
    {
      streamId: 3,
      id: 3,
      Title: "Live Job Fair UAE",
      Description: "Live opportunities session",
      Category: "Career",
      Status:
        <PrimaryButton
        label="Aproved"
        btnStyle={{ background: "rgba(202,240,204, 0.5)", color: '#497707', width:'110px', margin: 0, borderRadius: '25px',fontSize:'14px', height:'33px' }}
        />,
      Watch:
        <PrimaryButton
          leftIcon={<SlEye size={20} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
        />,
      More:
        <PrimaryButton
          leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
          onClick={showMoreModal}
        />,
    },
    {
      streamId: 4,
      id: 4,
      Title: "Analysis of Pandemics",
      Description: "Safeguard yourself during Pandemics",
      Category: "Health",
      Status:
        <PrimaryButton
        label="Pending"
        btnStyle={{ background: "rgba(36,120,192, 0.3)", color: '#015b9b', width:'110px', margin: 0, borderRadius: '25px',fontSize:'14px', height:'33px' }}
        />,
      Watch:
        <PrimaryButton
          leftIcon={<SlEye size={20} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
        />,
      More:
        <PrimaryButton
          leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
          onClick={showMoreModal}
        />,
    },
    {
      streamId: 5,
      id: 5,
      Title: "Nanotechnology Advancements",
      Description: "The future of Technologies",
      Category: "Technology",
      Status:
        <PrimaryButton
        label="Aproved"
        btnStyle={{ background: "rgba(202,240,204, 0.5)", color: '#497707', width:'110px', margin: 0, borderRadius: '25px',fontSize:'14px', height:'33px' }}
        />,
      Watch:
        <PrimaryButton
          leftIcon={<SlEye size={20} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
        />,
      More:
        <PrimaryButton
          leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
          onClick={showMoreModal}
        />,
    },
    {
      streamId: 6,
      id: 6,
      Title: "The Rise of Startup",
      Description: "How to start your business",
      Category: "Career",
      Status:
        <PrimaryButton
        label="Pending"
        btnStyle={{ background: "rgba(36,120,192, 0.3)", color: '#015b9b', width:'110px', margin: 0, borderRadius: '25px',fontSize:'14px', height:'33px' }}
        />,
      Watch:
        <PrimaryButton
          leftIcon={<SlEye size={20} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
        />,
      More:
        <PrimaryButton
          leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
          onClick={showMoreModal}
        />,
    },
    {
      streamId: 7,
      id: 7,
      Title: "The future of Medication",
      Description: "Latest advancements in Medicine",
      Category: "Health",
      Status:
        <PrimaryButton
        label="Pending"
        btnStyle={{ background: "rgba(36,120,192, 0.3)", color: '#015b9b', width:'110px', margin: 0, borderRadius: '25px',fontSize:'14px', height:'33px' }}
        />,
      Watch:
        <PrimaryButton
          leftIcon={<SlEye size={20} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
        />,
      More:
        <PrimaryButton
          leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
          onClick={showMoreModal}
        />,
    },
    {
      streamId: 8,
      id: 8,
      Title: "Political Issues of World",
      Description: "No Description",
      Category: "Career",
      Status:
        <PrimaryButton
        label="Pending"
        btnStyle={{ background: "rgba(36,120,192, 0.3)", color: '#015b9b', width:'110px', margin: 0, borderRadius: '25px',fontSize:'14px', height:'33px' }}
        />,
      Watch:
        <PrimaryButton
          leftIcon={<SlEye size={20} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
        />,
      More:
        <PrimaryButton
          leftIcon={<IoMdMore style={{ fontSize: "1.5em" }} />}
          btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
          onClick={showMoreModal}
        />,
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
                <h3 className="text-dark text-family mt-2">Streams Detail</h3>
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
                    btnStyle={{ background: "transparent", marginRight: "10px" }}
                    btnClassName="border-1 rounded-1"
                    onClick={showModal}
                  />
                  <PrimaryButton
                    leftIcon={
                      <BiVideoPlus
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
                  heading: "Title",
                  key: "Title",
                },
                {
                  heading: "Description",
                  key: "Description",
                },
                {
                  heading: "Category",
                  key: "Category",
                },
                {
                  heading: "Status",
                  key: "Status",
                },
                {
                  heading: "Watch",
                  key: "Watch",
                },
                {
                  heading: "More",
                  key: "More",
                },
              ]}
              datasourse={data}
              size='sm'
            />
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
                Stream Form
              </h2>
              <div className="col-12 align-items-center text-black px-4">
                <Stack spacing={2} className="text-black">
                  <InputField
                    isBlack={true}
                    label="Title"
                    type="text"
                    placeholder="enter stream title"
                    inputStyle={inputStyle}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <p
                      className="my-1 text-secondary"
                      style={Styles.headerItem3}
                    >
                      Description
                    </p>
                    <Textarea
                      placeholder='enter description of stream'
                      style={{
                        borderRadius: "2px",
                        width: "97%",
                        padding: "15px 20px",
                        color: BaseColors.black,
                        border: `1px solid ${BaseColors.light_grey},`,
                      }}
                    />
                  </div>
                  <InputField
                    isBlack={true}
                    label="RTMP URL"
                    placeholder="enter link to the stream"
                    inputStyle={inputStyle}
                  />
                  <InputField
                    isBlack={true}
                    label="RTMP Key"
                    placeholder="enter link to the stream"
                    inputStyle={inputStyle}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <p
                      className="my-1 text-secondary"
                      style={Styles.headerItem3}
                    >
                      Category{" "}
                    </p>
                    <select
                      className="px-2"
                      style={{
                        border: `1px solid ${BaseColors.light_grey}`,
                        borderRadius: "2px",
                        color: BaseColors.light_grey,
                        height: "5vh",
                        width: "97%",
                        marginBottom: "20px"
                      }}
                    >
                      <option value="0">select</option>
                      <option value="1">Health</option>
                      <option value="2">Education</option>
                      <option value="3">technology</option>
                      <option value="4">Climate</option>
                      <option value="5">Career</option>
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
                  <div className="text-center" style={{width:'95%'}}>
                  <p className="text-family text-center fs-4 mb-2">
                    <b>User Details</b>
                  </p>
                  </div>
                  <div style={{width:'5%'}}>
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
  )
}
