import React from "react";
import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial, className = "" }) => {
  const renderContentWithHighlights = (content, highlights = []) => {
    if (!highlights.length) return content;

    let highlightedContent = content;
    highlights.forEach((highlight) => {
      const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      highlightedContent = highlightedContent.replace(
        regex,
        '<span class="bg-blue-200 text-blue-800 px-1 rounded font-medium">$1</span>'
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: highlightedContent }} />;
  };

  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm outline outline-gray-200  hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <div className="flex items-start gap-4 mb-4">
        <Quote className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <p className="text-black leading-relaxed mb-4 text-sm ">
            {renderContentWithHighlights(testimonial.content, testimonial.highlights)}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-auto">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
          <p className="text-sm text-black">{testimonial.position}</p>
          <p className="text-sm text-black ">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
