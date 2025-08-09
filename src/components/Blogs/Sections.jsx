import React, { useState } from 'react';
import { Search, Filter, Calendar, TrendingUp, Star } from 'lucide-react';
import BlogCard from './BlogsCard';
import ScrollSlideRight from '../ui/ScrollSlideRight';
import ScrollSlideLeft from '../ui/ScrollSlideLeft';

const BlogSection = () => {




  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollSlideRight>
        <div className="text-center mb-12">
          <h2 className="">
            CRM Insights & Industry News
          </h2>
          <p className="caption_text   text-center max-w-3xl mx-auto mb-10 mt-5">
            Stay ahead of the curve with expert insights, best practices, and the latest trends
            in tour CRM and customer experience management.
          </p>
        </div>
        </ScrollSlideRight>

        {/* Search and Filters */}


        {/* Featured Stats */}
        <ScrollSlideLeft>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white rounded-3xl border border-gray-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-black ">24</div>
                <div className="text-gray-600 text-sm mt-2">Articles Published</div>
              </div>
              <div className="p-3 bg-[#fae1b6] rounded-full">
                <Calendar className="" />
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-gray-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-black">15K+</div>
                <div className="text-gray-600 text-sm mt-2">Monthly Readers</div>
              </div>
              <div className="p-3 bg-[#fae1b6] rounded-full">
                <TrendingUp className="" />
              </div>
            </div>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-gray-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-black">4.8</div>
                <div className="text-gray-600 text-sm mt-2">Average Rating</div>
              </div>
              <div className="p-3 bg-[#fae1b6] rounded-full">
                <Star className="" />
              </div>
            </div>
          </div>
        </div>
        </ScrollSlideLeft>




      </div>
      <BlogCard />

    </section>
  );
};

export default BlogSection;