import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { demoBlogPosts } from '../../data/BlogDetailPage';
import { Calendar, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = demoBlogPosts.find((item) => item.id === id);

  // Scroll to top on blog change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!post) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-semibold">Post Not Found</h2>
        <button className="btn mt-4" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  const sections = [
    { h2: post.title, ...post.content },
    post.contentTwo,
    post.contentThree,
    post.contentFour,
    post.contentFive,
    post.contentSix,
    post.contentSeven,
    post.contentEight,
    post.contentNine,
    post.contentTen,
  ];

  const renderContentSection = (section, index) => {
    if (!section || (!section.h2 && Object.values(section).every((v) => !v))) {
      return null;
    }

    return (
      <motion.div
        key={section.h2 || Math.random()}
        className="flex flex-col gap-2 mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        {section.h2 && <h4 className="">{section.h2}</h4>}
        <article className="prose prose-lg max-w-none flex flex-col gap-2 text-base font-light">
          {Object.entries(section).map(
            ([key, value]) => key !== 'h2' && value ? <p key={key}>{value}</p> : null
          )}
        </article>
      </motion.div>
    );
  };

  const relatedPosts = demoBlogPosts
    .filter((item) => item.id !== id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={post.id}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
        className="flex md:flex-row flex-col gap-10 container mx-auto py-10 px-4 md:px-0"
      >
        {/* Left Section - Blog Content */}
        <motion.section
          className="w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full md:h-[30rem] rounded-3xl object-cover"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="text-sm text-gray-500">
              {post.date} • By {post.author}
            </div>
            {sections.map((section, i) => renderContentSection(section, i))}
          </div>
        </motion.section>

        {/* Right Section - Latest Blogs */}
        <motion.div
          className="container w-auto md:w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="mb-6 text-lg">Latest Blogs</h3>
          <div className="flex flex-col gap-5 sticky top-10 overflow-hidden">
            {relatedPosts.map((related, index) => (
              <motion.div
                key={related.id}
                className="border border-gray-200 rounded-xl flex flex-col md:flex-row overflow-hidden hover:border-gray-700  transition cursor-pointer"
                onClick={() => navigate(`/blogs/${related.id}`)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <img
                  src={related.image}
                  alt={related.title}
                  className="h-48 md:w-40 object-cover"
                />
                <div className="p-4 space-y-2">
                  <div className="text-gray-500 text-sm flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {related.date}
                    <span className="mx-1">•</span>
                    <User className="h-4 w-4" />
                    {related.author}
                  </div>
                  <h5 className="line-clamp-2 font-semibold">{related.title}</h5>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {related.excerpt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogDetailPage;
