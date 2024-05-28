import { Stack } from "@chakra-ui/react"
import BaseColors from "../../constant"
import PrimaryButton from "../../components/button"
import InputField from "../../components/input-field"
import { Styles } from "../../styles"

const inputStyle = {
    borderRadius: '2px',
    height: "5vh",
    width: "100%",
    padding: "15px 20px",
    color: BaseColors.black,
    border: `1px solid ${BaseColors.light_grey},`
}

export default function AddUser() {
    return (
        <div className="row container p-4 d-flex">
            <h2 className="text-secondary justify-content-center d-flex">User Form</h2>
            <div className="col-12 align-items-center text-black px-4">
                <Stack spacing={2} className="text-black" >
                    <InputField
                        isBlack={true}
                        label="First Name"
                        type="text"
                        placeholder="enter first name"
                        inputStyle={inputStyle} />
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
                    <div style={{ marginLeft: '10px' }}>
                        <p className="my-1 text-secondary" style={Styles.headerItem3}>Role </p>
                        <select
                            className="px-2" 
                            style={{ 
                                border: `1px solid ${BaseColors.light_grey}`, 
                                borderRadius: '2px', 
                                color: BaseColors.light_grey, 
                                height: '5vh', 
                                width: '40%', 
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
                        btnStyle={{ borderRadius: '2px', marginEnd: "10px" }}
                        colorScheme="purple"
                    />
                    <PrimaryButton
                        label="Cancel"
                        variant="outline"
                        btnStyle={{ borderRadius: '2px', background: "transparent" }}
                    />
                </div>
            </div>
        </div>
    )
}