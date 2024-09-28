'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MainHeader from "@/components/MainHeader";

const Home = () => {
  const [data, setData] = useState(null);   
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const router = useRouter();

  useEffect(() => {
    fetch('http://172.19.224.1:1337/api/cartadmins?populate=*')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);
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

  const handleCardClick = (item) => {
    sessionStorage.setItem('selectedItem', JSON.stringify(item)); // เก็บข้อมูลใน sessionStorage
    console.log('Saved item in sessionStorage:', item); // ตรวจสอบข้อมูลที่ถูกเก็บ
    router.push(`/card/${item.id}?label=${encodeURIComponent(item.attributes?.Label)}`); // ส่งข้อมูลผ่าน URL
  };

  

  const renderItemsByCategory = () => {
    const itemsToDisplay = selectedCategory
      ? data.data.filter((item) => item.attributes?.Category === selectedCategory)
      : data.data;

    return itemsToDisplay.map((item, index) => (
      <div 
        key={index} 
        className="relative bg-gray-200 rounded-lg p-4 w-48 mx-5 h-62 mt-10 mr-6 cursor-pointer flex flex-col items-center"
        onClick={() => handleCardClick(item)}
      >
        {item.attributes?.image?.data?.attributes?.url && (
          <img 
            src={item.attributes.image.data.attributes.url} 
            className="w-full h-36 object-cover mb-4 mt-1 rounded-lg" 
            alt={item.attributes?.Label}
          />
        )}
        <div className="text-center">
          <div className="font-bold text-sm">{item.attributes?.Label}</div>
          <div className="text-xs text-gray-500">{item.attributes?.Category}</div>
        </div>
      </div>
    ));
  };

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col'>
      <MainHeader />
      <div className="flex justify-center items-start flex-wrap mt-0">
        {selectedCategory && (
          <button 
            className="mb-5 p-2 bg-blue-500 text-white rounded"
            onClick={() => setSelectedCategory(null)}
          >
            Back to All Items
          </button>
        )}
        {renderItemsByCategory()}
      </div>
    </div>
  );
};

export default Home;
