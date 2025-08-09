// BlogCard.jsx
import React from 'react';
import { Calendar, User, ArrowRight, Eye, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { demoBlogPosts } from '../../Data/BlogDetailPage';
import ScrollFadeUp from './../ui/ScrollFadUp';



const BlogCard = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto">
        {demoBlogPosts.map((post) => (
          <ScrollFadeUp>
          <article
            key={post.id}
            className="flex flex-col border border-gray-300 rounded-3xl overflow-hidden h-fit md:h-full mx-4 md:mx-auto mb-6"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() => handleCardClick(post.id)}
              />
            </div>

            <div className="p-6 flex flex-col justify-between h-fit md:h-[21rem] gap-5">
              <div className="flex flex-col gap-2">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>

                <h4 className="text-gray-900 line-clamp-2 transition-colors">
                  {post.title}
                </h4>

                <p className="text-sm line-clamp-3">{post.excerpt}</p>
              </div>

              <div className="flex flex-col w-full items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {post.views}
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {post.comments}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <button
                  onClick={() => handleCardClick(post.id)}
                  className="btn-icon-hover-red flex w-full justify-center items-center mt-4"
                >
                  Read More
                  <ArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </article>
          </ScrollFadeUp>
        ))}
      </div>
    </>
  );
};

export default BlogCard;