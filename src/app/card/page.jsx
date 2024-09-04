"use client";

import React, { useState, useEffect } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import Layout from "@/components/Layout";
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
    <div className='bg-gray-100 flex flex-col min-h-screen font-sans'>
      <Layout session={session}>
        <div>
          <div className='bg-white rounded-lg p-10 mx-60 flex items-start shadow-lg'>
            <div className='w-48 h-48 bg-gray-300 border-2 border-gray-500 rounded-md overflow-hidden'>
              <img src="/Arduino.jpg" alt="Sample" className='w-full h-full object-cover'/>
            </div>
            <div className='ml-6 flex-1'>
              <h2 className='text-2xl font-bold'>Arduino Uno</h2>
              <p className='text-gray-500'>Board</p>
              <p className='text-purple-600 text-xl'>฿400</p>
              <div className='mt-4'>
                <p className='text-gray-700'>จำนวน</p>
                <div className='flex items-center mt-2'>
                  <button onClick={decreaseQuantity} className='px-3 py-1 bg-gray-300 rounded-l'>-</button>
                  <span className='px-4 py-1 bg-white border-t border-b'>{quantity}</span>
                  <button onClick={increaseQuantity} className='px-3 py-1 bg-gray-300 rounded-r'>+</button>
                  <span className='ml-4 text-gray-500'>มีอุปกรณ์ทั้งหมด 15 ชิ้น</span>
                </div>
              </div>
              <div className='flex mt-4'>
                <button className='flex items-center px-4 py-2 bg-blue-500 text-white rounded mr-2'>
                  <TiShoppingCart className='mr-2' /> เพิ่มไปยังรถเข็น
                </button>
                <button className='px-4 py-2 bg-green-500 text-white rounded'>ยืมอุปกรณ์</button>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-lg p-10 mt-5 mx-60 flex flex-col shadow-lg'>
            <h2 className='text-l font-bold mb-4'>รายละเอียดอุปกรณ์</h2>
            <p className='text-gray-700'>
              Arduino Uno เเป็นแพลตฟอร์มการพัฒนาซอฟต์แวร์และฮาร์ดแวร์ที่ช่วยให้ผู้ใช้สร้างอุปกรณ์อิเล็กทรอนิกส์ได้อย่างง่ายดาย โดย Arduino มีบอร์ดหลายรุ่นที่ใช้งานได้ทั่วไป และมีฮาร์ดแวร์ที่สามารถเชื่อมต่อกับอุปกรณ์ได้หลากหลาย เช่น อนาล็อกอินพุต/เอาต์พุต, ดิจิตอลอินพุต/เอาต์พุต, PWM, หรืออินเทอร์เน็ต โดยมีโปรแกรม IDE ที่ใช้ในการเขียนโค้ดและอัพโหลดโปรแกรมไปยังบอร์ด Arduino ได้อย่างง่ายดาย
            </p>
            <div className='mt-4'>
              <h3 className='text-l font-semibold'>คุณสมบัติ:</h3>
              <ul className='list-disc ml-6 mt-2 text-gray-700'>
                <li>ใช้ชิปไมโครคอนโทรลเลอร์ ATmega328P</li>
                <li>แรงดันไฟฟ้าการทำงาน 5V</li>
                <li>ช่องอินพุต/เอาต์พุตดิจิตอล 14 ช่อง (6 ช่องสามารถทำงานเป็น PWM outputs)</li>
                <li>ช่องอนาล็อกอินพุต 6 ช่อง</li>
                <li>หน่วยความจำแฟลช 32 KB (ATmega328P) 0.5 KB ใช้สำหรับบูตโหลดเดอร์</li>
              </ul>
            </div>
            <div className='mt-4'>
              <h3 className='text-l font-semibold'>การใช้งาน:</h3>
              <p className='text-gray-700'>
                Arduino Uno เหมาะสำหรับการพัฒนาโปรเจกต์ที่หลากหลาย เช่น การควบคุมอุปกรณ์ผ่านอินเทอร์เน็ต การสร้างหุ่นยนต์ ระบบอัตโนมัติในบ้าน และการเรียนการสอนเกี่ยวกับอิเล็กทรอนิกส์และการเขียนโปรแกรม.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Card;
