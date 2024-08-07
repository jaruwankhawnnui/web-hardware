// // components/MainLayout.jsx
// "use client";

// import React, { useContext } from 'react';
// import MainHeader from './MainHeader';
// import { AiOutlineHome } from "react-icons/ai";
// import Link from 'next/link';
// import { TiShoppingCart } from "react-icons/ti";
// import { FaThList } from "react-icons/fa";
// import { CiBoxList } from "react-icons/ci";
// import { MdOutlinePostAdd } from "react-icons/md";
// import { FaNewspaper } from "react-icons/fa";
// import { IoChatboxEllipsesSharp } from "react-icons/io5";
// import { GrContactInfo } from "react-icons/gr";
// import { RiFileListLine } from "react-icons/ri";
// import { FaSignOutAlt } from "react-icons/fa";
// import { MenuContext } from '@/context/MenuContext';

// const MainLayout = ({ children }) => {
//   const { open } = useContext(MenuContext);

//   return (
//     <div className='bg-gray-100 w-screen min-h-screen'>
//       <MainHeader />
//       <div className='flex'>
//         <div className='flex justify-start items-start px-5'>
//           <aside className={`bg-white rounded-lg overflow-hidden transition-all duration-300 ${open ? 'w-60 p-4' : 'w-0 p-0'}`}>
//             <ul>
//               <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                 <AiOutlineHome className='mr-2' />
//                 <Link href="/">หน้าแรก</Link>
//               </li>
//               <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                 <TiShoppingCart className='mr-2' />
//                 <Link href="/cart">รถเข็น</Link>
//               </li>
//               <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                 <FaThList className='mr-2' />
//                 <Link href="/equipment">ยืมอุปกรณ์</Link>
//               </li>
//               <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                 <CiBoxList className='mr-2' />
//                 <Link href="/rentalinfo">แสดงข้อมูลการยืม</Link>
//               </li>
//               <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                 <MdOutlinePostAdd className='mr-2' />
//                 <Link href="/portweb">โพสต์</Link>
//               </li>
//               <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                 <FaNewspaper className='mr-2' />
//                 <Link href="/webnew">ข่าวสารเว็บไซต์</Link>
//               </li>
//               <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                 <IoChatboxEllipsesSharp className='mr-2' />
//                 <Link href="/chatweb">แชทพูดคุย</Link>
//               </li>
//               <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                 <GrContactInfo className='mr-2' />
//                 <Link href="/contact">ข้อมูลการติดต่อ</Link>
//               </li>
//               <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                 <RiFileListLine className='mr-2' />
//                 <Link href="/agreement">ข้อตกลงการใช้งาน</Link>
//               </li>
//               <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                 <FaSignOutAlt className='mr-2 flex' />
//                 <Link href="/sign-out">ออกจากระบบ</Link>
//               </li>
//             </ul>
//           </aside>
//         </div>
//         <main className='flex-1'>{children}</main>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;
