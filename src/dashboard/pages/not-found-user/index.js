import React from 'react'
import Layout from '../../../layout/web-layout';
import PrimaryButton from '../../../components/button';


export default function NotFoundUser() {
    return (
        <Layout>
            <div className='container-fluid bg-black d-flex align-items-center justify-content-center' style={{ height: '80vh' }}>
                <div className='text-center font-weight-bolder mt-5'>
                    <h1 className='text-white'>404</h1>
                    <h4 className='text-success'>Oops!</h4>
                    <h6 className='text-white'>We don't have that page. but we can help you find something great to watch.</h6>
                    <PrimaryButton 
                        label='Back to Home' 
                        btnClassName='my-4 px-4 rounded text-black flex' 
                        background='white' 
                    />
                </div>
            </div>
        </Layout>
    );
}