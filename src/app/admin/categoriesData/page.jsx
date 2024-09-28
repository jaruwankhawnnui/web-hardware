
"use client"
import Layout from '@/components/Layout';
import { useState } from 'react';

const categoriesData = [
  { label: '10-02-2024', date: '10-02-2024' },
  { label: '10-02-2024', date: '10-02-2024' },
  { label: '10-02-2024', date: '10-02-2024' },
  { label: '10-02-2024', date: '10-02-2024' },
];

export default function Categories() {
  const [categories, setCategories] = useState(categoriesData);

  const handleUpdate = (index) => {
    console.log(`Update category at index ${index}`);
  };

  const handleDelete = (index) => {
    const newCategories = categories.filter((_, i) => i !== index);
    setCategories(newCategories);
  };

  return (
    <div className='bg-gray-100 w-full flex flex-col min-h-screen'>
    <Layout>
    <div className="min-h-screen bg-gray-100 p-8">
        
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Categories</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            + Add New
          </button>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
        />
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-6 py-2">Label</th>
              <th className="px-8 py-2">Date</th>
              <th className="px-40 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{category.label}</td>
                <td className="px-4 py-2">{category.date}</td>
                <td className="px-60 py-2">
                  <button
                    className="text-blue-500 hover:text-blue-700 mr-2"
                    onClick={() => handleUpdate(index)}
                  >
                    Update
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button className="text-gray-500">Previous</button>
          <button className="text-gray-500">Next</button>
        </div>
      </div>
    </div>
    </Layout>
    </div>
  );
}
