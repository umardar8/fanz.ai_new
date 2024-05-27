import { Stack } from "@chakra-ui/react"
import BaseColors from "../../constant"
import PrimaryButton from "../../components/button"
import InputField from "../../components/input-field"

export default function AddUser() {
    return (
        <div className="row container p-4 d-flex" style={{ background: "transparent" }} >
            <div className="col-12 align-items-center text-black px-4">
                <h2>Add a New User</h2>
                <Stack spacing={2} className="text-black" >
                    <InputField
                        isBlack={true}
                        label="First Name"
                        type="text"
                        placeholder="enter first name"
                        inputWidth={"100%"} />
                    <InputField isBlack={true} label="Last Name" type="text" placeholder="enter last name" inputWidth={"100%"} />
                    <InputField isBlack={true} label="Email" type="email" placeholder="enter email" inputWidth={"100%"} />
                    <InputField isBlack={true} label="Password" type="password" placeholder="enter password" inputWidth={"100%"} />
                    <span>
                        <p  className="heading-3  my-2">Role: </p>
                            <div className="custom-select">
                                <select className="p-2 rounded-1">
                                    <option value="0">Creator</option>
                                    <option value="1">User</option>
                                </select>
                            </div>
                    </span>
                </Stack>
                <div className="col d-flex justify-content-end mt-2">
                    <PrimaryButton label="Add" btnClassName="me-2" btnStyle={{borderRadius: 0, marginEnd: "10px"}} colorScheme="purple" />
                    <PrimaryButton label="Cancel" variant="outline" btnStyle={{borderRadius: 0, background: "transparent"}} />
                </div>
            </div>
        </div>
    )
}