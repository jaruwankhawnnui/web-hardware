"use client";


import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { useRouter } from 'next/navigation';


const Page = () => {
  const router = useRouter();

  const labels = [
    { id: 1, text: "Arduino\nBOARD", image: "/Arduino.jpg" },
    { id: 2, text: "Banana ject\nDIP", image: "/Banana.jpg" },
    { id: 3, text: "Esp32\nBOARD", image: "/es-p.jpg" },
    { id: 4, text: "Multimeter\nAC/DC", image: "/mutti.jpg" },

  ];


  const handleImageClick = (id) => {
    router.push(`/card/${id}`);
  };

  const handleCartClick = () => {
    router.push('/cart');
  };

  return (

    <div>
    <div className="bg-cyan-100 flex justify-between items-center px-6 p-2 mb-4 w-full h-20"></div>
    <div className='relative flex'>
          <div onClick={handleCartClick} className='flex items-center justify-center rounded-lg p-6 mx-1 h-14 bg-cyan-100 cursor-pointer'>
            <TiShoppingCart className='text-3xl text-gray-400' />
          </div>
        
      <div className='flex justify-center py-2'>

        
        <div className='bg-cyan-100 rounded-lg h-14 p-4 mx-1 flex flex-wrap justify-center'>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>IC CMOS</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>BOARD</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>ACCESSORIES</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>BOARD DIGITAL</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>CAPACITOR</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>CONNECTOR</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>DIODE</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>DIP JUMPER</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>FUSE</button>
          <button className='flex items-center mx-3 text-black font-bold text-xs'>DIGITAL</button>
        </div>
        <div className='relative'>
          <div onClick={handleCartClick} className='flex items-center justify-center rounded-lg p-6 mx-1 h-14 bg-cyan-100 cursor-pointer'>
            <TiShoppingCart className='text-3xl text-gray-400' />
          </div>
        </div>
        </div>
      </div>
      <div className='flex justify-center items-start flex-wrap mt-0'>
        {labels.map((label, index) => {
          const [boldText, normalText] = label.text.split('\n');
          return (
            <div 
              key={index} 
              className='relative bg-gray-300 rounded-lg p-20 w-32 h-32 mt-20 mr-6 cursor-pointer' 
              style={{ 
                backgroundImage: label.image ? `url(${label.image})` : 'none', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
              onClick={() => handleImageClick(label.id)}
            >
              <div className='absolute top-0 right-0 m-2'>
                <TiShoppingCart className='text-2xl text-gray-400' />
              </div>
              <div className='absolute bottom-[-50px] left-0 w-full whitespace-pre-line'>
                <div className='font-bold text-l'>{boldText}</div>
                <div className='text-xs'>{normalText}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default Page;
