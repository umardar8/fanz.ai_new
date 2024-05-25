import React from "react";
import CustomTable from "../../../components/table";

export default function Users() {
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
    <div className="border border-danger">
      <div className="row p-0 m-0" style={{ background: "#ffffff" }}>
        {/* start button header */}
        <div className="col-12"></div>
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
  );
}
