import React, { useState } from 'react';
import BlogCard from './BlogsCard';
// Adjust the path if needed

const posts = [
  {
    id: 1,
    title: 'Top Travel Tips for 2025',
    image: '/images/travel.jpg',

    date: 'July 12, 2025',
    author: 'Ishaa Thameema',
    excerpt: 'Plan better trips with these updated tips and tools.',
    views: 120,
    comments: 15,
    readTime: '6 min read',
    content: 'Full blog content goes here...',
  },
  {
    id: 2,
    title: 'Why You Should Use LivetourPRO',
    image: '/images/livetour.jpg',

    date: 'June 25, 2025',
    author: 'Team LivetourPRO',
    excerpt: 'Discover how LivetourPRO helps travel businesses grow fast.',
    views: 90,
    comments: 5,
    readTime: '4 min read',
    content: 'More detailed blog content here...',
  },
];

const BlogList = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Blogs</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} onClick={setSelectedBlog} />
        ))}
      </div>

      {/* Optional Modal Display */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white max-w-3xl w-full p-6 rounded-lg shadow-xl relative">
            <button
              className="absolute top-4 right-4 text-red-600 font-bold text-xl"
              onClick={() => setSelectedBlog(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedBlog.title}</h3>
            <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-60 object-cover rounded mb-4" />
            <p className="text-gray-800">{selectedBlog.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
