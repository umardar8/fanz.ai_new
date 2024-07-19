import React from 'react'
import Layout from '../../../layout/web-layout';
import { PiNumberFourBold } from "react-icons/pi";
import { MdOutlineError } from "react-icons/md";
import PrimaryButton from '../../../components/button';


export default function NotFoundAdmin() {
    return (
        <Layout>
            <div className='container-fluid bg-white d-flex align-items-center justify-content-center' style={{ height: '80vh' }}>
                <div className='text-center font-weight-bolder mt-5'>
                    <div className='d-flex justify-content-center'>
                        <PiNumberFourBold style={{ fontSize: '52px' }} />
                        <MdOutlineError style={{ fontSize: '52px', margin: '0 -15', color: 'purple'}} />
                        <PiNumberFourBold style={{ fontSize: '52px', transform: 'scaleX(-1)' }} />
                    </div>
                    <h4>Oops! You're lost.</h4>
                    <h6>The page you are looking for is not found.</h6>
                    <PrimaryButton label='Back to Dashboard' btnClassName='my-4 px-4' background='black' />
                </div>
            </div>
        </Layout>
    );
}