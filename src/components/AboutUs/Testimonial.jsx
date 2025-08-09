import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import slideone from '../../assets/img/about/1.png'


const Testimonial = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);




  const testimonials = [
    {
      id: 1,
      company: "WANDERLUST ESCAPES",
      logo: "🌍",
      logoColor: "bg-red-500",
      quote:
        "LivetourPRO helped us craft a dreamy European honeymoon. The itinerary was thoughtfully planned, the guides were knowledgeable, and the little surprises made it even more special. We’ll always remember Amalfi’s sunsets and Parisian evenings!",
      author: "Alisa Zotimova",
      position: "Traveler, Paris & Amalfi",
      hasVideo: true,
      videoThumbnail: "https://img.youtube.com/vi/Scxs7L0vhZ4/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/Scxs7L0vhZ4",
      hoverImg: 'https://img.freepik.com/free-photo/businessman-shows-his-finger-up_329181-9112.jpg?t=st=1753872820~exp=1753876420~hmac=3bd30e1b4d2e4f2fc75a8eecce1590097b7eed96d227d56c7e5d795d61539d99&w=1380'
    },
    {
      id: 2,
      company: "PEAK TREKKERS",
      logo: "⛰️",
      logoColor: "bg-purple-500",
      quote:
        "The routes were breathtaking, and the coordination was flawless. As a solo traveler, I felt safe and excited every single day. From snowy mountain tops to cozy village says LivetourPRO made every moment count!",
      author: "Deepak Subramani",
      position: "Solo Trekker, Himachal",
      hasVideo: true,
      videoThumbnail: "https://img.youtube.com/vi/oUFJJNQGwhk/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/oUFJJNQGwhk",
      hoverImg: 'https://img.freepik.com/free-photo/passionate-singer-red-dress_1163-2597.jpg?t=st=1753872937~exp=1753876537~hmac=52ae962442387c5f09ffafa0ccf1049f46206475fe23e8b37962e7fbbff77e7c&w=1380'
    },
    {
      id: 3,
      company: "SOLAR NOMADS",
      logo: "☀️",
      logoColor: "bg-orange-500",
      quote:
        "Our group getaway to the Maldives was effortless and luxurious. LivetourPRO arranged ocean villas, candlelight dinners, and guided snorkeling trips. It felt like a dream — and they made it happen seamlessly!",
      author: "Mehul Prajapati",
      position: "Trip Organizer, Maldives",
      hasVideo: true,
      videoThumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
      hoverImg: 'https://img.freepik.com/free-photo/joyful-brunet-men-point-into-distance-rejoice-travelers-checkered-shirts-pose-with-suitcase-retro-camera-backpack-orange-background_197531-29559.jpg?t=st=1753873044~exp=1753876644~hmac=50dfd281127edeede3fc827efc2733ebdbcbff7ce5fce6ebe63b6754f23daa1a&w=1380'
    },
    {
      id: 4,
      company: "FAMILY FLYERS",
      logo: "👨‍👩‍👧‍👦",
      logoColor: "bg-blue-500",
      quote:
        "LivetourPRO made our vacation fun and stress-free. The kids loved the interactive museum tours and theme parks, while we enjoyed the wine tastings and city walks. It was the perfect blend of learning and leisure.",
      author: "Phanindra",
      position: "Father, Europe Family Tour",
      hasVideo: true,
      videoThumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
      hoverImg: 'https://img.freepik.com/free-photo/travelers-young-women-look-amazing-mountains-forests-wanderlust-travel-ideas_1150-15034.jpg?t=st=1753873096~exp=1753876696~hmac=d29fae204000420ac9b4b707978a5237a2a4dbf605bd6294a36e7d7ba6e85e33&w=1380'
    },
    {
      id: 5,
      company: "WILDWALKERS",
      logo: "🦁",
      logoColor: "bg-yellow-600",
      quote:
        "From spotting elephants in Kerala to stargazing in the desert LivetourPRO nailed the perfect balance between thrill and peace. We connected with nature in ways we didn’t expect, and every location felt safe and well-arranged.",
      author: "Neha Kapoor",
      position: "Wildlife Enthusiast, India Safari",
      hasVideo: true,
      videoThumbnail: "https://img.youtube.com/vi/Z1BCujX3pw8/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/Z1BCujX3pw8",
      hoverImg: 'https://img.freepik.com/free-photo/young-attractive-man-woman-traveling-bicycles-holding-map-sightseeing-romantic-couple-summer-vacation-by-sea-sunset-boho-hipster-style-outfit-friends-having-fun-together_285396-3150.jpg?t=st=1753873133~exp=1753876733~hmac=33d6474ad936169f303d8a6ba1cdd725788657b29b326b9cbc59a4bc719b6aad&w=1380'
    },
    {
      id: 6,
      company: "CRUISEWAVE",
      logo: "🚢",
      logoColor: "bg-cyan-700",
      quote:
        "We sailed across the Mediterranean in style. Every port we visited had its own charm—from the cobbled streets of Santorini to the lively markets in Barcelona. LivetourPRO's cruise planning was top-notch!",
      author: "Jonathan Rice",
      position: "Luxury Traveler, Mediterranean Cruise",
      hasVideo: true,
      videoThumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
      hoverImg: 'https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?t=st=1753873145~exp=1753876745~hmac=917112d9aaec8a36f1f1945c1a796d1006b2a189c8db6735d41bf156eec8315f&w=1380'
    },
    {
      id: 7,
      company: "LOCAL LEAPS",
      logo: "🏙️",
      logoColor: "bg-teal-500",
      quote:
        "Our cultural tour of Japan gave us more than just sightseeing. We lived like locals, tried authentic street food, wore kimonos, and even attended a tea ceremony. It wasn’t just a tour—it was an experience.",
      author: "Ayesha & Kabir",
      position: "Culture Seekers, Tokyo & Kyoto",
      hasVideo: true,
      videoThumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
      hoverImg: 'https://img.freepik.com/free-photo/curly-cute-lady-with-brunette-hair-white-wide-sleeve-shirt-beige-pants-modern-belt-stylish-eyeglasses-posing-with-plane-tickets_197531-23955.jpg?t=st=1753873185~exp=1753876785~hmac=ed4a4b35c4093d93b80a7e645132c3fbf7861a7e20ed8d153d7ed796b2f5e7f8&w=1380'
    },
    {
      id: 8,
      company: "ADVENTURE ZONE",
      logo: "🧗‍♂️",
      logoColor: "bg-indigo-600",
      quote:
        "Every adrenaline junkie needs LivetourPRO. From ziplining in Costa Rica to scuba diving in the Andamans—it was pure thrill from start to finish. The team ensured safety without compromising fun.",
      author: "Rahil Thomas",
      position: "Adventure Addict, Global Tour",
      hasVideo: true,
      videoThumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      hoverImg: 'https://img.freepik.com/free-photo/man-vacation-holding-tickets-leaning-his-red-bag-blue_140725-94101.jpg?t=st=1753873215~exp=1753876815~hmac=15d3ca448e8698d64a83b4c68bce202ba1c8103ba31170bc9efabcebfd8b5bb2&w=1380'
    },
    {
      id: 9,
      company: "SOUL RETREAT",
      logo: "🧘‍♀️",
      logoColor: "bg-pink-400",
      quote:
        "The wellness retreat in Bali was a soul-refreshing experience. Mornings started with sunrise yoga, afternoons were spent exploring temples, and evenings ended with massages and soft music. I came back completely rejuvenated.",
      author: "Simran Das",
      position: "Wellness Traveler, Bali",
      hasVideo: true,
      videoThumbnail: "https://img.youtube.com/vi/e-ORhEE9VVg/hqdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/e-ORhEE9VVg",
      hoverImg: 'https://img.freepik.com/free-photo/man-woman-dressed-travel-wear-glasses-take-pictures_1150-27523.jpg?t=st=1753873093~exp=1753876693~hmac=d8e72735609c3c8d16e6d33d89d75d4808a4474954e4755b2d07c8135529a3de&w=1380'
    },
  ];

  return (
    <div className="bg-[#fae1b6] min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <h2 className="text-center">
          What Our Travelers Say
        </h2>
        <p className="caption_text  text-center max-w-3xl mx-auto mb-10 mt-5">
          Real stories. Real memories. Discover how LivetourPRO helped thousands of travelers turn their dream journeys into unforgettable experiences.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className=" relative group  bg-white rounded-3xl overflow-hidden  flex flex-col justify-between"
            >

              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 
                                 group-hover:grayscale transition-all  duration-500 rounded-3xl z-0"
                style={{ backgroundImage: `url(${testimonial.hoverImg})` }}
              />
              <div className="p-6 flex z-10 flex-col justify-between h-full">
                <div className="flex items-center mb-4">
                  <div
                    className={`w-8 h-8 rounded ${testimonial.logoColor} flex items-center justify-center text-white font-bold mr-3`}
                  >
                    {testimonial.logo}
                  </div>
                  <span className="text-sm font-semibold text-bold">
                    {testimonial.company}
                  </span>
                </div>

                <p className="text-gray-800 text-base leading-relaxed mb-4">
                  {testimonial.quote}
                </p>

                <div className="mb-4">
                  <p className="font-semibold text-black">{testimonial.author}</p>
                  <p className="text-sm text-black">{testimonial.position}</p>
                </div>

                <button className="flex items-center text-green-600 font-semibold hover:text-green-700 transition">
                  Read more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>

              {/* Video Thumbnail */}
              {testimonial.hasVideo && (
                <div
                  className="relative cursor-pointer"
                  onClick={() => setSelectedVideo(testimonial.videoUrl)}
                >
                  <img
                    src={testimonial.videoThumbnail}
                    alt="Video thumbnail"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-white p-3 rounded-full shadow-lg">
                      <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
        <AnimatePresence>
      
      {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full relative shadow-lg"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
              >
                <X size={20} />
              </button>
              <iframe
                src={selectedVideo}
                title="Testimonial Video"
                className="w-full h-[400px]"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
      )}
        </AnimatePresence>

    </div>
  );
};

export default Testimonial;
