import React, { useState } from "react";
import { Stack } from "@chakra-ui/react";
import CustomTable from "../../../components/table";
import BaseColors from "../../../constant";
import PrimaryButton from "../../../components/button";
import InputField from "../../../components/input-field";
import { Styles } from "../../../styles";
import PrimaryModal from "../../../components/modal";
import { IoPersonAddOutline, IoFunnelOutline } from "react-icons/io5";
import { MdEditNote, MdOutlineDelete } from "react-icons/md";

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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  let data = [
    {
      userId: 1,
      id: 1,
      Name: "Tianna Douglas",
      Username: "jschmeler",
      Email: "jessie.cremin@yahoo.com",
      Edit: <MdEditNote style={{ fontSize: "1.5em" }} />,
      Delete: <MdOutlineDelete style={{ fontSize: "1.5em" }} />,
    },
    {
      userId: 1,
      id: 1,
      Name: "Tianna Douglas",
      Username: "jschmeler",
      Email: "jessie.cremin@yahoo.com",
      Edit: <MdEditNote style={{ fontSize: "1.5em" }} />,
      Delete: <MdOutlineDelete style={{ fontSize: "1.5em" }} />,
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
                  heading: "Name",
                  key: "Name",
                },
                {
                  heading: "Username",
                  key: "Username",
                },
                {
                  heading: "Email",
                  key: "Email",
                },
                {
                  heading: "Edit",
                  key: "Edit",
                },
                {
                  heading: "Delete",
                  key: "Delete",
                },
              ]}
              datasourse={data}
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
                    label="First Name"
                    type="text"
                    placeholder="enter first name"
                    inputStyle={inputStyle}
                  />
                  <InputField
                    isBlack={true}
                    label="Last Name"
                    type="text"
                    placeholder="enter last name"
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
                        width: "40%",
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
    </>
  );
}
