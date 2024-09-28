// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation'; // ใช้ useParams สำหรับดึง id จาก URL
// import Layout from "@/components/Layout";

// const CardDetail = () => {
//   const { id } = useParams(); // ดึง id จาก URL
//   const [item, setItem] = useState(null); // สถานะสำหรับเก็บข้อมูลอุปกรณ์
//   const [loading, setLoading] = useState(true); // สถานะสำหรับการโหลดข้อมูล
//   const [error, setError] = useState(null); // สถานะสำหรับข้อผิดพลาด

//   useEffect(() => {
//     if (id) {
//       fetch(`http://172.19.224.1:1337/api/cartadmins/${id}?populate=*`) // ดึงข้อมูลจาก API ตาม id
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//           }
//           return response.json();
//         })
//         .then((data) => {
//           setItem(data.data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           setError(error);
//           setLoading(false);
//         });
//     }
//   }, [id]); // รันเมื่อ id เปลี่ยนแปลง

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!item) {
//     return <div>No item found.</div>;
//   }

//   const { attributes } = item;

//   return (
//     <Layout>
//       <div className='bg-gray-100 min-h-screen flex flex-col items-center p-4'>
//         <div className='bg-white rounded-lg p-6 shadow-lg max-w-2xl w-full'>
//           <h1 className='text-2xl font-bold mb-4'>{attributes?.Label || "No Label"}</h1>
//           {attributes?.image?.data?.attributes?.url && (
//             <img 
//               src={attributes.image.data.attributes.url} 
//               alt={attributes?.Label} 
//               className='w-full h-64 object-cover mb-4 rounded'
//             />
//           )}
//           <p className='text-gray-600'>{attributes?.Description || "No description available"}</p>
//           <div className='mt-4'>
//             <span className='font-bold'>Category:</span> {attributes?.Category || "N/A"}
//           </div>
//           <div className='mt-4'>
//             <span className='font-bold'>Price:</span> ฿{attributes?.Price || "N/A"}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CardDetail;
