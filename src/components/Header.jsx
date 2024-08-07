// "use client";
// import React, { useState } from 'react';
// import Image from "next/image";
// import { FaBars, FaBell, FaSignOutAlt, FaThList, FaNewspaper, FaHome } from "react-icons/fa";
// import { SlGlobe } from "react-icons/sl";
// import { BsChatDotsFill } from "react-icons/bs";
// import { IoSearchCircleSharp, IoChatboxEllipsesSharp } from 'react-icons/io5';
// import { TiShoppingCart } from "react-icons/ti";
// import { CiBoxList } from "react-icons/ci";
// import { MdOutlinePostAdd } from "react-icons/md";
// import { GrContactInfo } from "react-icons/gr";
// import { RiFileListLine } from "react-icons/ri";
// import Link from 'next/link';
// import Logout from "@/components/Logout";

// const Header = ({ session }) => {
//   const [menuVisible, setMenuVisible] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const toggleMenu = () => {
//     setMenuVisible(!menuVisible);
//   };

//   return (
//     <div className='bg-cyan-100 flex justify-between items-center px-6 p-4 mb-4'>
//       <div>
//         <Image src="/Computer-lo.png" width={150} height={45} alt="Computer-lo" />
//       </div>
//       <div className='flex border p-2 rounded-lg bg-white h-8 items-center px-3'>
//         <input
//           type='text'
//           placeholder='Search devices...'
//           value={searchTerm}
//           onChange={handleSearch}
//           className='bg-transparent w-full outline-none text-gray-700 text-sm'
//         />
//         <IoSearchCircleSharp className='h-6 w-6 text-gray-500' />
//       </div>
//       <div className='flex px-3 p-1 items-center gap-3'>
//         <div>
//           <BsChatDotsFill className='cursor-poiner h-4 w-4 text-gray-400' />
//         </div>
//         <div>
//           <SlGlobe className='cursor-pointer h-6 w-6 text-gray-400' />
//         </div>
//         <div>
//           <FaBell className='cursor-pointer h-6 w-6 text-gray-400' />
//         </div>
//         <FaBars className='cursor-pointer h-6 w-6 text-gray-400 mb:hidden' onClick={toggleMenu} />
//         <div className="relative">
//           <Image
//             src={session?.user?.image}
//             alt={session?.user?.name}
//             // width={40}
//             // height={40}
//             className="rounded-full cursor-pointer"
//             onClick={toggleMenu}
//           />
//           {menuVisible && (
//             <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-1">
//               <ul>
//                 <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                   <FaHome className='mr-2 h-5 w-5' />
//                   <Link href="/">หน้าแรก</Link>
//                 </li>
//                 <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                   <TiShoppingCart className='mr-2 h-5 w-5' />
//                   <Link href="/cart">รถเข็น</Link>
//                 </li>
//                 <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                   <FaThList className='mr-2 h-5 w-5' />
//                   <Link href="/equipment">ยืมอุปกรณ์</Link>
//                 </li>
//                 <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                   <CiBoxList className='mr-2 h-5 w-5' />
//                   <Link href="/rentalinfo">แสดงข้อมูลการยืม</Link>
//                 </li>
//                 <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                   <MdOutlinePostAdd className='mr-2 h-5 w-5' />
//                   <Link href="/portweb">โพสต์</Link>
//                 </li>
//                 <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                   <FaNewspaper className='mr-2 h-5 w-5' />
//                   <Link href="/webnew">ข่าวสารเว็บไซต์</Link>
//                 </li>
//                 <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                   <IoChatboxEllipsesSharp className='mr-2 h-5 w-5' />
//                   <Link href="/chatweb">แชทพูดคุย</Link>
//                 </li>
//                 <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                   <GrContactInfo className='mr-2 h-5 w-5' />
//                   <Link href="/contact">ข้อมูลการติดต่อ</Link>
//                 </li>
//                 <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                   <RiFileListLine className='mr-2 h-5 w-5' />
//                   <Link href="/agreement">ข้อตกลงการใช้งาน</Link>
//                 </li>
//                 <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
//                   <FaSignOutAlt className='mr-2 h-5 w-5' />
//                   <Logout />
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
