import React from 'react';
import { IoLogoFacebook, IoCall } from "react-icons/io5";
import { ImMail4 } from "react-icons/im";
import { SlGlobe } from "react-icons/sl";
import Layout from "@/components/Layout";
import { auth } from "@/auth";

const contact = async () => {
  const session = await auth();

  return (
    <Layout session={session}>
    <div className=' min-h-screen flex flex-col items-center'>
      <div className='bg-white w-full max-w-4xl mt-10 shadow-lg rounded-lg overflow-hidden'>
        <div className='bg-gray-200 p-4'>
          <h1 className='text-black text-3xl font-serif'>ข้อมูลการติดต่อ</h1>
        </div>
        <div className='p-6'>
          <h2 className='text-center text-xl text-red-600 font-serif mb-8'>ติดต่อเราได้ที่นี้</h2>
          <div className='flex flex-col space-y-4 items-center'>
            <div className='flex items-center bg-gray-200 rounded-full p-4 w-full max-w-md'>
              <IoCall className='text-gray-600 w-6 h-6' />
              <span className='ml-4 text-gray-700 font-medium'>096-2755258</span>
            </div>
            <div className='flex items-center bg-gray-200 rounded-full p-4 w-full max-w-md'>
              <ImMail4 className='text-red-600 w-6 h-6' />
              <span className='ml-4 text-gray-700 font-medium'>hardwarelab@email.psu.ac.th</span>
            </div>
            <div className='flex items-center bg-gray-200 rounded-full p-4 w-full max-w-md'>
              <IoLogoFacebook className='text-blue-700 w-6 h-6' />
              <span className='ml-4 text-gray-700 font-medium'>Hardware Lab</span>
            </div>
            <div className='flex items-center bg-gray-200 rounded-full p-4 w-full max-w-md'>
              <SlGlobe className='text-gray-600 w-6 h-6' />
              <span className='ml-4 text-gray-700 font-medium'>www.HardwareLab.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default contact;
