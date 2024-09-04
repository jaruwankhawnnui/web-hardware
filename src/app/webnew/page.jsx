"use client";
import React from 'react';
import { useRouter } from 'next/router';
import Layout from "@/components/Layout"; // Assuming you have a Layout component

const FullNewsPage = ({ newsData }) => {
  const router = useRouter();
  const { id } = router.query;
  
  const article = newsData.find(news => news.id === parseInt(id, 10));

  if (!article) {
    return <p>ไม่พบข่าวที่คุณกำลังหา</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Layout>
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
          <p className="text-gray-600 mb-4">{article.date}</p>
          <img src={article.imageUrl} alt={article.title} className="w-full h-auto object-cover mb-6" />
          <div className="text-gray-700 leading-relaxed">
            {article.content}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default FullNewsPage;
