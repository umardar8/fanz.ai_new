import React, { useState } from "react";
import { Stack } from "@chakra-ui/react";
import CustomTable from "../../../components/table";
import BaseColors from "../../../constant";
import PrimaryButton from "../../../components/button";
import InputField from "../../../components/input-field";
import { Styles } from "../../../styles";
import PrimaryModal from "../../../components/modal";
import { IoPersonAddOutline, IoFunnelOutline } from "react-icons/io5";
import { RiUserForbidLine, RiUserFollowLine } from "react-icons/ri";
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
      Role: "User",
      Email: "jessie.cremin@yahoo.com",
      Edit:
      <PrimaryButton 
        leftIcon={ <MdEditNote style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
      Disable:
      <PrimaryButton 
        leftIcon={ <RiUserForbidLine style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
    },
    {
      userId: 2,
      id: 2,
      Name: "Rene Batz",
      Username: "kim.hermann",
      Role: "User",
      Email: "epacocha@davis.com",
      Edit:
      <PrimaryButton 
        leftIcon={ <MdEditNote style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
      Disable:
      <PrimaryButton 
        leftIcon={ <RiUserForbidLine style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
    },
    {
      userId: 3,
      id: 3,
      Name: "Vinnie Boehm V",
      Username: "kamren76",
      Role: "Creator",
      Email: "rath.deja@hotmail.com",
      Edit:
      <PrimaryButton 
        leftIcon={ <MdEditNote style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
      Disable:
      <PrimaryButton 
        leftIcon={ <RiUserForbidLine style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
    },
    {
      userId: 4,
      id: 4,
      Name: "Dane Yundt",
      Username: "rigoberto.braun",
      Role: "Creator",
      Email: "rheathcote@hotmail.com",
      Edit:
      <PrimaryButton 
        leftIcon={ <MdEditNote style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
      Disable:
      <PrimaryButton 
        leftIcon={ <RiUserForbidLine style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
    },
    {
      userId: 5,
      id: 5,
      Name: "Krystel Weber",
      Username: "skoch",
      Role: "Creator",
      Email: "zulauf.pat@effertz.com",
      Edit:
      <PrimaryButton 
        leftIcon={ <MdEditNote style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
      Disable:
      <PrimaryButton 
        leftIcon={ <RiUserForbidLine style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
    },
    {
      userId: 6,
      id: 6,
      Name: "Oren Mertz",
      Username: "shaniya.hagenes",
      Role: "User",
      Email: "austin77@rath.com",
      Edit:
      <PrimaryButton 
        leftIcon={ <MdEditNote style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
      Disable:
      <PrimaryButton 
        leftIcon={ <RiUserForbidLine style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
    },
    {
      userId: 7,
      id: 7,
      Name: "Manuela Mueller",
      Username: "hsimonis",
      Role: "User",
      Email: "robin.herzog@kerluke.biz",
      Edit:
      <PrimaryButton 
        leftIcon={ <MdEditNote style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
      Disable:
      <PrimaryButton 
        leftIcon={ <RiUserForbidLine style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
    },
    {
      userId: 8,
      id: 8,
      Name: "Lowell Rau",
      Username: "wendy.stark",
      Role: "User",
      Email: "pagac.novella@becker.net",
      Edit:
      <PrimaryButton 
        leftIcon={ <MdEditNote style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
      Disable:
      <PrimaryButton 
        leftIcon={ <RiUserForbidLine style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
    },
    {
      userId: 9,
      id: 9,
      Name: "Lue Cremin",
      Username: "gutmann.brown",
      Role: "Creator",
      Email: "alphonso94@mraz.com",
      Edit:
      <PrimaryButton 
        leftIcon={ <MdEditNote style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
      Disable:
      <PrimaryButton 
        leftIcon={ <RiUserForbidLine style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
    },
    {
      userId: 10,
      id: 10,
      Name: "Ezekiel Hayes",
      Username: "xmills",
      Role: "Creator",
      Email: "tklocko@wintheiser.net",
      Edit:
      <PrimaryButton 
        leftIcon={ <MdEditNote style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
      />,
      Disable:
      <PrimaryButton 
        leftIcon={ <RiUserFollowLine style={{ fontSize: "1.5em" }} /> }
        btnStyle={{ background: "transparent", padding: 0, margin: 0 }}
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
                  heading: "Role",
                  key: "Role",
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
                  heading: "Disable",
                  key: "Disable",
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
    </>
  );
}
