"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { FaBars, FaBell, FaSignOutAlt, FaThList, FaNewspaper, FaHome } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";
import { BsChatDotsFill } from "react-icons/bs";
import { IoSearchCircleSharp, IoChatboxEllipsesSharp } from 'react-icons/io5';
import { TiShoppingCart } from "react-icons/ti";
import { CiBoxList } from "react-icons/ci";
import { MdOutlinePostAdd } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { RiFileListLine } from "react-icons/ri";
import Logout from "@/components/Logout";
import Link from 'next/link';

const MainHeader = ({ session }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Mock function to simulate search
  const searchDevices = (term) => {
    const devices = [
      "Computer",
      "Laptop",
      "Mouse",
      "Keyboard",
      "Monitor",
      "Printer",
      "Scanner",
      "Webcam",
      "Headphones",
    ];
    return devices.filter(device => device.toLowerCase().includes(term.toLowerCase()));
  };

  useState(() => {
    if (searchTerm) {
      const results = searchDevices(searchTerm);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className='bg-cyan-100 flex justify-between items-center px-6 p-4 mb-4'>
      <div>
        <Image src="/Computer-lo.png" width={200} height={60} alt="Computer-lo" />
      </div>
      <div className='flex border p-3 rounded-lg bg-white h-10 items-center px-4'>
        <input
          type='text'
          placeholder='Search devices...'
          value={searchTerm}
          onChange={handleSearch}
          className='bg-transparent w-full outline-none text-gray-700'
        />
        <IoSearchCircleSharp className='h-9 w-8 text-gray-50
        0' />
      </div>
      <div className='flex px-5 p-2 items-center gap-6'>
        <div>
          <BsChatDotsFill className='cursor-pointer h-6 w-7 text-gray-400' />
        </div>
        <div>
          <SlGlobe className='cursor-pointer h-6 w-7 text-gray-400' />
        </div>
        <div>
          <FaBell className='cursor-pointer h-6 w-7 text-gray-400' />
        </div>
        <FaBars className='cursor-pointer h-6 w-7 text-gray-400 mb:hidden' onClick={toggleMenu} />
        <div className="relative">
          <Image
            src={session?.user?.image}
            alt={session?.user?.name}
            width={50}
            height={50}
            className="rounded-full cursor-pointer"
            onClick={toggleMenu}
          />
          {menuVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg py-1">
              <ul>
                <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
                  <FaHome className='mr-2' />
                  <Link href="/">หน้าแรก</Link>
                </li>
                <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
                  <TiShoppingCart className='mr-2' />
                  <Link href="/cart">รถเข็น</Link>
                </li>
                <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
                  <FaThList className='mr-2' />
                  <Link href="/equipment">ยืมอุปกรณ์</Link>
                </li>
                <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
                  <CiBoxList className='mr-2' />
                  <Link href="/rentalinfo">แสดงข้อมูลการยืม</Link>
                </li>
                <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
                  <MdOutlinePostAdd className='mr-2' />
                  <Link href="/portweb">โพสต์</Link>
                </li>
                <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
                  <FaNewspaper className='mr-2' />
                  <Link href="/webnew">ข่าวสารเว็บไซต์</Link>
                </li>
                <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
                  <IoChatboxEllipsesSharp className='mr-2' />
                  <Link href="/chatweb">แชทพูดคุย</Link>
                </li>
                <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
                  <GrContactInfo className='mr-2' />
                  <Link href="/contact">ข้อมูลการติดต่อ</Link>
                </li>
                <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
                  <RiFileListLine className='mr-2' />
                  <Link href="/agreement">ข้อตกลงการใช้งาน</Link>
                </li>
                <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
                  <FaSignOutAlt className='mr-2 flex' />
                  <Logout />
                </li>
              </ul>
            </div>
          )}
        </div>
        
      </div>
      {searchResults.length > 0 && (
        <div className='absolute top-16 left-0 right-0 bg-white shadow-lg p-4'>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index} className='p-2 border-b'>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainHeader;
