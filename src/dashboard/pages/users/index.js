import React, { useState } from "react";
import { Stack } from "@chakra-ui/react";
import CustomTable from "../../../components/table";
import BaseColors from "../../../constant";
import PrimaryButton from "../../../components/button";
import InputField from "../../../components/input-field";
import { Styles } from "../../../styles";
import PrimaryModal from "../../../components/modal";
import { IoPersonAddOutline, IoFunnelOutline } from "react-icons/io5";

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
      postId: 1,
      id: 1,
      Dessert: "Frozen yoghurt",
      Calories: "159",
      Fat: "6.0",
      Carbs: "24",
      Protein: "4.0",
    },
    {
      postId: 1,
      id: 2,
      Dessert: "Ice cream sandwich",
      Calories: "237",
      Fat: "9.0",
      Carbs: "37",
      Protein: "4.3",
    },
    {
      postId: 1,
      id: 3,
      Dessert: "Eclair",
      Calories: "262",
      Fat: "16.0",
      Carbs: "24",
      Protein: "6.0",
    },
    {
      postId: 1,
      id: 4,
      Dessert: "Cupcake",
      Calories: "305",
      Fat: "3.7",
      Carbs: "67",
      Protein: "4.3",
    },
    {
      postId: 1,
      id: 5,
      Dessert: "Gingerbread",
      Calories: "356",
      Fat: "16.0",
      Carbs: "49",
      Protein: "3.9",
    },
  ];
  return (
    <>
      <div className="border border-danger">
        <div className="row p-0 m-0" style={{ background: "#ffffff" }}>
          {/* start button header */}
          <div className="col-12">
            <div className="row mt-2">
              <div className="col-sm-12">
                <div className="d-flex justify-content-end mb-2">
                  <PrimaryButton
                    leftIcon={
                      <IoFunnelOutline
                        style={{ fontSize: "1.5em", color: "gray" }}
                      />
                    }
                    btnStyle={{
                      background: "transparent",
                      marginRight: "10px",
                    }}
                    btnClassName="border rounded-1"
                  />
                  <PrimaryButton
                    leftIcon={
                      <IoPersonAddOutline
                        style={{ fontSize: "1.5em", color: "gray" }}
                      />
                    }
                    btnStyle={{ background: "transparent" }}
                    btnClassName="border rounded-1"
                    onClick={showModal}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* end button header */}

          <div className="col-12">
            <CustomTable />
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
