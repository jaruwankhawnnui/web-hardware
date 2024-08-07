import Layout from "@/components/Layout";
import { auth } from "@/auth";
import React from 'react';
import { IoClose } from "react-icons/io5";

const rentailinfo = async () => {
  const session = await auth();

  const items = [
    { text: "Arduino\nBOARD", image: "/Arduino.jpg", price: 300, quantity: 1, returned: false },
    { text: "Banana ject\nDIP", image: "/Banana.jpg", price: 20, quantity: 10, returned: true },
    { text: "Esp32\nBOARD", image: "/es-p.jpg", price: 450, quantity: 2, returned: false },
    { text: "Multimeter\nAC/DC", image: "/mutti.jpg", price: 150, quantity: 3, returned: true }
  ];

  return (
    <Layout session={session}>
      <div className=''>
        <div className='bg-white mx-40 mt-1 mr-40 shadow-lg'>
          <div className='flex h-40 '>
            <h1 className='flex text-4xl mx-9 mt-5 font-medium-9'>แสดงข้อมูลการยืม</h1>
          </div>
          <div className='flex h-10 justify-around'>
            <h1 className='text-xs font-sans-serif font-bold flex-1 text-center'>รายการอุปกรณ์</h1>
            <h1 className='text-xs font-sans-serif font-bold flex-1 text-center'>ราคาต่อชิ้น</h1>
            <h1 className='text-xs font-sans-serif font-bold flex-1 text-center'>จำนวน</h1>
            <h1 className='text-xs font-sans-serif font-bold flex-1 text-center'>ราคารวม</h1>
            <h1 className='text-xs font-sans-serif font-bold flex-1 text-center'>ยกเลิก</h1>
          </div>
        </div>

        {items.map((item, index) => (
          <div key={index} className='bg-white mx-40 mt-5 mr-40 shadow-lg relative'>
            <div className={`absolute top-0 left-0 right-0 h-5 ${item.returned ? 'bg-green-300' : 'bg-red-300'}`}></div>
            <div className='flex items-center p-6'>
              <div className="">
              <img src={item.image} alt={item.text.split('\n')[0]} className='h-32 w-46 mt-5 object-cover rounded-lg shadow-xl' />
              </div>
              <div className='flex-1 ml-4'>
                <div className='text-black text-l font-bold'>{item.text.split('\n')[0]}</div>
                <div className='text-gray-500 text-xs'>{item.text.split('\n')[1]}</div>
              </div>
             
              <div className='flex-1 flex-col items-center mt-9 w-20'>
                <p className='text-black text-sm '>{item.price} บาท</p>
              </div>
              <div className='flex-1 flex-col items-center mt-9 w-10'>
                <p className='text-black text-sm '>{item.quantity}</p>
              </div>
              <div className='flex-1 flex-col items-center mt-9 w-10'>
                <p className='text-black text-sm '>{item.price * item.quantity} บาท</p>
              </div>
              <div className='flex justify-center mt-9 w-40'>
                <button className='text-red-500'><IoClose size={20} /></button>
              </div>
              </div>
            </div>
          
        ))}
      </div>
    </Layout>
  );
};

export default rentailinfo;
