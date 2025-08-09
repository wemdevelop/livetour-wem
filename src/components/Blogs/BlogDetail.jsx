// src/pages/BlogDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();

  // Normally you'd fetch this from backend. For now, fake it:
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Live Tour CRM",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      content: "This is the full content of the blog post.",
      author: "Alex Chen",
      date: "Jan 15, 2024",
    },
    // ... add more if needed
  ];

  const blog = blogPosts.find((b) => b.id === Number(id));

  if (!blog) {
    return <div className="text-center py-20 text-2xl text-red-600">Blog not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img src={blog.image} alt={blog.title} className="w-full rounded-xl mb-6" />
      <h1 className="text-4xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-600 mb-4">By {blog.author} | {blog.date}</p>
      <p className="text-lg">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
