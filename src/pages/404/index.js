import React from 'react'
import Layout from '../../layout/web-layout';
import PrimaryButton from '../../components/button';
import { logo } from '../../assets';


export default function NotFound() {
    return (
        <div className='container-fluid d-flex flex-column  justify-content-center authBackground' style={{ height: '100vh' }}>
            <div className='text-start p-3 d-flex justify-content-start mb-4'>
                <img src={logo} height="250px" width="auto" />
            </div>
            <div className='text-center font-weight-bolder mt-5 h-75 pt-5'>
                <h1 className='text-white'>404</h1>
                <h4 className='text-success'>Oops!</h4>
                <h6 className='text-white'>We don't have that page. but we can help you find something great to watch.</h6>
                <PrimaryButton
                    label='Back to Home'
                    btnClassName='my-4 px-4 rounded text-black flex'
                    background='white'
                    onClick={() => window.open("/", "_self")}
                />
            </div>
        </div>
    );
}