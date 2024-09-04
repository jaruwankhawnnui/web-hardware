import React from 'react';
import Layout from "@/components/Layout";
import { auth } from "@/auth";

// Data for the equipment
const equipmentData = [
  { text: "Arduino\nBOARD", image: "/Arduino.jpg", price: 300, quantity: 1 },
  { text: "Banana ject\nDIP", image: "/Banana.jpg", price: 20, quantity: 10 },
  { text: "Esp32\nBOARD", image: "/es-p.jpg", price: 450, quantity: 2 },
  { text: "Multimeter\nAC/DC", image: "mutti.jpg", price: 150, quantity: 3 },
];

const EquipmentPage = async () => {
  const session = await auth();

  return (
    <div className='bg-gray-100 '>
    <Layout session={session}>
     
        <div className='bg-white mx-40 mr-40 shadow-lg '>
          <div className='flex h-40 '>
            <h1 className='text-4xl font-medium mx-9 mt-4'>ยืมอุปกรณ์</h1>
          </div>
          <div className='flex h-10 justify-around'>
            <h1 className='text-sm font-sans-serif font-bold w-26 text-center'>รายการอุปกรณ์</h1>
            <h1 className='text-sm font-sans-serif font-bold w-20 pl-1 text-center'>ราคาต่อชิ้น</h1>
            <h1 className='text-sm font-sans-serif font-bold w-10 pl-20 mr-30 text-center'>จำนวน</h1>
            <h1 className='text-sm font-sans-serif font-bold w-15 pl-4 text-center'>ราคารวม</h1>
          </div>
        </div>
        <div className='bg-white mx-40 mt-5 mr-40 shadow-lg'>
          {equipmentData.map((item, index) => (
            <div key={index}>
              <div className='flex items-center p-8 mx-8'>
                <img src={item.image} alt={item.text.split('\n')[0]} className='w-20 h-20 object-cover' />
                <div className='flex-1 ml-4'>
                  <h2 className='text-black text-l font-bold'>{item.text.split('\n')[0]}</h2>
                  <p className='text-gray-500 text-xs '>{item.text.split('\n')[1]}</p>
                </div>

                <div className='flex-1  flex-col items-center mx-40 mr-30 pl-10 font- mt-2  '>
                  <p className='text-black text-sm '>{item.price} ฿</p>
                </div>
                <div className='flex-1 flex-col items-center mx-32  mt-2 w-10'>
                  <p className='text-black text-sm'>{item.quantity}</p>
                </div>
                <div className='flex-1 flex-col items-center mx-30  mt-2 w-14'>
                  <p className='text-black text-sm'>{item.price * item.quantity} ฿</p>
                </div>
              </div>

              <div className="border-b border-black mx-8"></div>
            </div>
          ))}
        </div>
        <div className='bg-white mx-40 mt-5 mr-40 shadow-lg h-20'>
          <div className='flex justify-end'>
            <button className="shadow-lg shadow-indigo-500/40 bg-blue-200 h-10 w-40 mt-7 mr-5">พิมใบยืมอุปกรณ์</button>
            <button className="shadow-lg shadow-indigo-500/40 bg-blue-200 h-10 w-40 mt-7 mr-5">พิมใบยืมอุปกรณ์</button>
          </div>
        </div>
      
    </Layout>
    </div>
  );
};

export default EquipmentPage;
