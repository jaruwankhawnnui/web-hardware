'use client';

import { TiShoppingCart } from "react-icons/ti";
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout'; // Import your Layout component
import { useRouter } from 'next/navigation'; // Assuming you're using Next.js

const Card = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const router = useRouter();
  const [session, setSession] = useState(null); // Example session, modify as needed

  // Mock auth fetch session or from your real auth function
  useEffect(() => {
    const sessionData = {}; // Simulating a session
    setSession(sessionData); 
  }, []);

  // Fetch item data from sessionStorage or API
  useEffect(() => {
    const item = sessionStorage.getItem('selectedItem');
    if (item) {
      setSelectedItem(JSON.parse(item));
    } else {
      // Handle case where no item is found in sessionStorage (Optional)
      console.log('No item found in sessionStorage.');
    }
  }, []);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  // Check if item is loaded from sessionStorage before rendering
  if (!selectedItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-gray-100 flex flex-col min-h-screen font-sans'>
      <Layout session={session}>
        <div>
          <div className='bg-white rounded-lg p-10 mx-60 flex items-start shadow-lg'>
            <div className='w-48 h-48 bg-gray-300 border-2 border-gray-500 rounded-md overflow-hidden'>
              <img 
                src={selectedItem.attributes?.image?.data?.attributes?.url || "/Arduino.jpg"} 
                alt={selectedItem.attributes?.Label || "Sample"} 
                className='w-full h-full object-cover' 
              />
            </div>
            <div className='ml-6 flex-1'>
              <h2 className='text-2xl font-bold'>
                {selectedItem.attributes?.Label || "Unknown Item"}
              </h2>
              <p className='text-gray-500'>
                {selectedItem.attributes?.Category || "Unknown Category"}
              </p>
              <p className='text-purple-600 text-xl'>
                ฿{selectedItem.attributes?.Price || "Unknown Price"}
              </p>
              <div className='mt-4'>
                <p className='text-gray-700'>จำนวน</p>
                <div className='flex items-center mt-2'>
                  <button onClick={decreaseQuantity} className='px-3 py-1 bg-gray-300 rounded-l'>-</button>
                  <span className='px-4 py-1 bg-white border-t border-b'>{quantity}</span>
                  <button onClick={increaseQuantity} className='px-3 py-1 bg-gray-300 rounded-r'>+</button>
                  <span className='ml-4 text-gray-500'>มีอุปกรณ์ทั้งหมด {selectedItem.attributes?.stock || 15} ชิ้น</span>
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
              {selectedItem.attributes?.Detail || "No description available."}
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Card;
