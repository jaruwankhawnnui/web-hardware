'use client'; // เพิ่มบรรทัดนี้เพื่อบอกว่า component นี้เป็น Client Component

import React, { useState, useEffect } from 'react';
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import MainHeader from "@/components/MainHeader";
import { TiShoppingCart } from "react-icons/ti";
import { useRouter } from 'next/router';

import Layout from "@/components/Layout";

const Home =  () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const session = await auth();

  useEffect(() => {
    fetch('http://172.26.32.1:1337/api/cartadmins?populate=*')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col'>
      <MainHeader  />
      
      <div className='flex justify-center '>
        <div className='bg-cyan-100 rounded-lg w-full mx-4 mr-2 h-14 p-4 flex flex-wrap justify-center'>
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
        <div className=''>
          <div className='flex items-center rounded-lg p-4 mr-4 h-14 bg-cyan-100 cursor-pointer'>
            <TiShoppingCart className='text-3xl text-gray-400 mx-1 ' />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-start flex-wrap mt-0">
        {data && data.data.map((item, index) => (
          <div key={index} className="relative bg-gray-200 rounded-lg p-4 w-48 mx-5 h-62 mt-10 mr-6 cursor-pointer flex flex-col items-center">
            {item.attributes?.image?.data?.attributes?.url && (
              <img src={item.attributes.image.data.attributes.url} className="w-full h-36 object-cover mb-4 mt-1 rounded-lg" />
            )}
            <div className="text-center">
              <div className="font-bold text-sm">{item.attributes?.Label}</div>
              <div className="text-xs text-gray-500">{item.attributes?.Category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
   
    
  );
};

export default Home;


// 'use client'; // เพิ่มบรรทัดนี้เพื่อบอกว่า component นี้เป็น Client Component

// import React, { useState, useEffect } from 'react';

// const Home = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('http://172.28.192.1:1337/api/cartadmins?populate=*')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div className="flex justify-center items-start flex-wrap mt-0">
//       {data && data.data.map((item, index) => (
//         <div key={index} className="relative bg-gray-200 rounded-lg p-4 w-48 h-62 mt-10 mr-6 cursor-pointer flex flex-col items-center">
//           {item.attributes?.image?.data?.attributes?.url && (
//             <img src={item.attributes.image.data.attributes.url} className="w-full h-36 object-cover mb-4 mt-1 rounded-lg" />
//           )}
//           <div className="text-center">
//             <div className="font-bold text-sm">{item.attributes?.Label}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;




