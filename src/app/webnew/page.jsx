'use client';

import React from 'react';
import Layout from "@/components/Layout"; // สมมติว่าคุณมี Layout component อยู่แล้ว

const NewsPage = () => {
  // ข่าวตัวอย่าง
  const newsData = [
    {
      id: 1,
      title: 'สามารถเข้าใช้งานเว็บไซต์ห้องอาร์ดเวรด์ได้แล้ว!!!!!',
      date: '',
      image: '', // ใส่ URL รูปภาพที่นี่ ถ้ามี
    },
    {
      id: 2,
      title: 'ประกาศเปิดให้เข้าใช้งานเว็บไซต์ ยืม-คืน!!!',
      date: '12/04/2566 10:30 น.',
      image: '',
    },
    {
      id: 3,
      title: 'ข่าวสารเพิ่มเติม...',
      date: '',
      image: '',
    },
    {
      id: 4,
      title: 'ข่าวสารเพิ่มเติม...',
      date: '',
      image: '',
    },
    {
      id: 5,
      title: 'ข่าวสารเพิ่มเติม...',
      date: '',
      image: '',
    }
  ];

  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">ข่าวสารเว็บไซต์</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {newsData.map((news) => (
            <div key={news.id} className="relative bg-gray-200 rounded-lg p-4 flex items-center justify-center h-48">
              {/* ถ้ามีรูปภาพจะแสดงรูป ถ้าไม่มีจะใช้ placeholder */}
              {news.image ? (
                <img src={news.image} alt={news.title} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <div className="w-full h-full bg-gray-300 rounded-lg"></div>
              )}
              {/* ข้อความข่าว */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 rounded-lg">
                <h2 className="text-white text-lg font-bold">{news.title}</h2>
                {news.date && <p className="text-white text-sm">{news.date}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;
