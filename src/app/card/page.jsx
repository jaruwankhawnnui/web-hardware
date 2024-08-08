"use client";

import React, { useState, useEffect } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import Layout from "@/components/Layout";
import MainHeader from "@/components/MainHeader";
import { auth } from "@/auth"; // Assuming you have an auth function to fetch session

const Card = () => {
  const [quantity, setQuantity] = useState(1);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await auth();
      setSession(sessionData);
    };

    fetchSession();
  }, []);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);



  return (
    <Layout session={session}>
      <div>
        <div>
          <div className='bg-white rounded-lg p-10 mx-60 flex items-start shadow-lg'>
            <div className='w-48 h-48 bg-gray-300 border-2 border-gray-500 rounded-md overflow-hidden'>
              <img src="public/Arduino" alt="Sample" className='w-full h-full object-cover'/>
            </div>
            <div className='ml-6 flex-1'>
              <h2 className='text-2xl font-bold'>ADC0804</h2>
              <p className='text-gray-500'>AC</p>
              <p className='text-purple-600 text-xl'>฿40</p>
              <div className='mt-4'>
                <p className='text-gray-700'>จำนวน</p>
                <div className='flex items-center mt-2'>
                  <button onClick={decreaseQuantity} className='px-3 py-1 bg-gray-300 rounded-l'>-</button>
                  <span className='px-4 py-1 bg-white border-t border-b'>{quantity}</span>
                  <button onClick={increaseQuantity} className='px-3 py-1 bg-gray-300 rounded-r'>+</button>
                  <span className='ml-4 text-gray-500'>มีอุปกรณ์ทั้งหมด 9 ชิ้น</span>
                </div>
              </div>
              <div className='flex mt-4'>
                <button className='flex items-center px-4 py-2 bg-blue-500 text-white rounded mr-2'>
                  <TiShoppingCart className='mr-2' /> เพิ่มไปยังรถเข็น
                </button>
                <button className='px-4 py-2 bg-green-500 text-white rounded'>สั่งอุปกรณ์</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Card;
