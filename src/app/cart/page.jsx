"use client";

import React, { useState, useEffect } from 'react';
import { RiCheckboxBlankLine, RiCheckboxLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Layout from "@/components/Layout";
import { auth } from "@/auth"; // Ensure you have this function implemented


const Cart = () => {
  const initialItems = [
    { text: "Arduino\nBOARD", image: "/Arduino.jpg", price: 300, quantity: 1 },
    { text: "Banana ject\nDIP", image: "/Banana.jpg", price: 20, quantity: 10 },
    { text: "Esp32\nBOARD", image: "/es-p.jpg", price: 450, quantity: 2 },
    { text: "Multimeter\nAC/DC", image: "mutti.jpg", price: 150, quantity: 3 },
    { text: "Ic Register 5\nDescription 5", image: "", price: 50, quantity: 5 },
    { text: "Ic Register 6\nDescription 6", image: "", price: 60, quantity: 6 },
    { text: "Ic Register 7\nDescription 7", image: "", price: 70, quantity: 7 },
    { text: "Ic Register 8\nDescription 8", image: "", price: 80, quantity: 8 },
    { text: "Ic Register 9\nDescription 9", image: "", price: 90, quantity: 9 },
    { text: "Ic Register 10\nDescription 10", image: "", price: 100, quantity: 10 },
  ];


  const [items, setItems] = useState(initialItems);
  const [checkedItems, setCheckedItems] = useState(new Array(initialItems.length).fill(false));
  const [checkedCount, setCheckedCount] = useState(0);
  const [totalCheckedPrice, setTotalCheckedPrice] = useState(0);
  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);
  const [session, setSession] = useState(null);


  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await auth();
      setSession(sessionData);
    };

    fetchSession();
  }, []);

  useEffect(() => {
    const total = items.reduce((sum, item, index) => {
      if (checkedItems[index]) {
        return sum + item.price * item.quantity;
      }
      return sum;
    }, 0);
    setTotalCheckedPrice(total);
  }, [checkedItems, items]);

  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);

    setCheckedCount(newCheckedItems.filter(item => item).length);
    setIsSelectAllChecked(newCheckedItems.every(item => item));
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    const newCheckedItems = checkedItems.filter((_, i) => i !== index);
    setCheckedItems(newCheckedItems);

    setCheckedCount(newCheckedItems.filter(item => item).length);
    setIsSelectAllChecked(newCheckedItems.every(item => item));
  };

  const handleSelectAllChange = () => {
    const newCheckedState = !isSelectAllChecked;
    setIsSelectAllChecked(newCheckedState);
    const newCheckedItems = checkedItems.map(() => newCheckedState);
    setCheckedItems(newCheckedItems);
    setCheckedCount(newCheckedItems.filter(item => item).length);
  };

  const increaseQuantity = (index) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  const decreaseQuantity = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity -= 1;
      setItems(newItems);
    }
  };

  return (
    <div className='bg-gray-100'>
    <Layout session={session}>
      <div>
        <div className='bg-white mx-40 mt-1 mr-40 shadow-lg'>
          <div className='flex h-40'>
            <h1 className='flex text-4xl mx-9 mt-5 font-medium-9'>รถเข็น</h1>
          </div>
          <div className='flex h-10 justify-around'>
            <div className='w-11'></div>
            <h1 className='text-sm font-sans-serif font-bold w-32 text-center'>รายการอุปกรณ์</h1>
            <h1 className='text-sm font-sans-serif font-bold w-20 text-center'>ราคาต่อชิ้น</h1>
            <h1 className='text-sm font-sans-serif font-bold w-10 text-center'>จำนวน</h1>
            <h1 className='text-sm font-sans-serif font-bold w-14 text-center'>ราคารวม</h1>
            <h1 className='text-sm font-sans-serif font-bold w-9 text-center'>ยกเลิก</h1>
          </div>
        </div>

        <div className='bg-white mx-40 mt-5 shadow-lg flex flex-col'>
          {items.map((item, index) => {
            const [boldText, normalText] = item.text.split('\n');
            const totalPrice = item.price * item.quantity;
            return (
              <div key={index}>
                <div className='flex items-center justify-around'>
                  <div className='mt-14 mx-1' onClick={() => handleCheckboxChange(index)}>
                    {checkedItems[index] ? (
                      <RiCheckboxLine className='w-7 h-9 mx-2 text-green-500' />
                    ) : (
                      <RiCheckboxBlankLine className='w-7 h-9 mx-2' />
                    )}
                  </div>

                  <div className='flex flex-col items-center'>
                    <div
                      className='bg-gray-300 rounded-lg p-14 w-32 h-32 mt-6 mr-2'
                      style={{
                        backgroundImage: item.image ? `url(${item.image})` : 'none',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ></div>
                    <div className='mt-9 flex-1 w-32 text-sm '>
                      <div className='text-black text-sm font-bold'>{boldText}</div>
                      <div className='text-gray-500 text-xs '>{normalText}</div>
                    </div>
                  </div>

                  <div className='flex flex-col items-center mt-9 w-20 '>
                    <div className='text-black text-l '>{item.price} ฿</div>
                  </div>
                  <div className='flex flex-col items-center mt-9 w-10'>
                    <div className='flex items-center'>
                      <button onClick={() => decreaseQuantity(index)} className='px-3 py-1 bg-gray-300 rounded-l'>-</button>
                      <span className='px-4 py-1 bg-white border-t border-b'>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(index)} className='px-3 py-1 bg-gray-300 rounded-r'>+</button>
                    </div>
                  </div>
                  <div className='flex flex-col items-center mt-9 w-14'>
                    <div className='text-black text-l '>{totalPrice} ฿</div>
                  </div>
                  <div className='flex justify-center mt-9 w-9'>
                    <IoClose className='text-red-600 h-7 w-8 cursor-pointer' onClick={() => handleRemoveItem(index)} />
                  </div>
                </div>
                <div className="border-b border-black mx-8 mt-5"></div>
              </div>
            );
          })}
        </div>

        <div className='bg-white mx-40 mt-5 mr-40 shadow-lg h-20 flex justify-between items-center'>
          <div className='flex items-center ml-4' onClick={handleSelectAllChange}>
            {isSelectAllChecked ? (
              <RiCheckboxLine className='w-7 h-9 mx-2 text-green-500' />
            ) : (
              <RiCheckboxBlankLine className='w-7 h-9 mx-14' />
            )}
            <span className='text-l font-serif '>เลือกทั้งหมด</span>
          </div>

          <div className='flex justify-end'>
            <span className='text-l font-serif flex items-center mx-8 mt-8'>รวม: {checkedCount} ชิ้น</span>
            <span className='text-l font-serif flex items-center mx-8 mt-8'>ราคารวมทั้งหมด: {totalCheckedPrice} ฿</span>
            <button className='shadow-lg shadow-indigo-500/40 bg-blue-200 h-10 w-40 mt-7 mr-5'>ยืมอุปกรณ์</button>
          </div>
        </div>
      </div>
    </Layout>
    </div>
  );
};

export default Cart;
