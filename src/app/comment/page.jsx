"use client"
import React, { useState, useEffect } from 'react';
import Layout from "@/components/Layout"; // Assuming you have a Layout component

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [image, setImage] = useState(null);

  // Simulating fetching comments from a server or database
  useEffect(() => {
    const fetchedComments = [
      { text: 'นี่คือความคิดเห็นแรก', image: null },
      { text: 'นี่คือความคิดเห็นที่สอง', image: '/path/to/image.jpg' }
    ];
    setComments(fetchedComments);
  }, []);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObject = { text: newComment, image: image ? URL.createObjectURL(image) : null };
      setComments([...comments, newCommentObject]);
      setNewComment('');
      setImage(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200"> {/* Added gray background */}
      <Layout>
        <div
          className="max-w-2xl mx-auto p-4 bg-white bg-opacity-80 rounded-lg"
          style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }} // Replace with your background image path
        >
          <h1 className="text-2xl font-bold mb-4">แสดงความคิดเห็น</h1>
          <form onSubmit={handleCommentSubmit} className="mb-4">
            <textarea
              value={newComment}
              onChange={handleCommentChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-2"
            />
            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              ส่งความคิดเห็น
            </button>
          </form>
          <div>
            <h2 className="text-xl font-semibold mb-2">ความคิดเห็นทั้งหมด</h2>
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow mb-2">
                  <p>{comment.text}</p>
                  {comment.image && <img src={comment.image} alt="comment image" className="mt-2 rounded-lg max-h-60" />}
                </div>
              ))
            ) : (
              <p>ยังไม่มีความคิดเห็น</p>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CommentPage;
