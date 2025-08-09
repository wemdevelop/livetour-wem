import React, { useState } from 'react';
import ModalCommon from '../../components/ui/ModalCommon';

const videos = [
  {
    desc: 'Live Tour Software With Advanced Enquiry Conversions And Advanced Follow Up Sections',
    url: 'https://www.youtube.com/embed/cMfV_zg7Zhs',
  },
  {
    desc: 'Online Travel Agency Software - Live Tour Software',
    url: 'https://www.youtube.com/embed/04x3IvXub1A',
  },
  {
    desc: 'Live Tour Operator Online Booking Software',
    url: 'https://www.youtube.com/embed/hUXcAnkqG7I',
  },
  {
    desc: 'Live Tour - Tour Booking Management System',
    url: 'https://www.youtube.com/embed/D79Uh4j2_rA',
  },
  {
    desc: 'Live Tour - Contribute to Make a Difference',
    url: 'https://www.youtube.com/embed/f7p87Dck0Ew',
  },
  {
    desc: 'Live Tour Software - Online Tour Booking Management Software',
    url: 'https://www.youtube.com/embed/iRsKqMXW84Y',
  },
];

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOpen = (video) => {
    setSelectedVideo(video);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-2">Video Tutorials</h2>
        <p className="text-base font-semibold text-gray-700">
          Watch quick walkthroughs to help you get the most out of Livetour.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-3xl flex flex-col gap-0 border border-gray-200 overflow-hidden text-center hover:shadow-xl transition-all duration-200"
              onClick={() => handleOpen(video)}
            >
              <div className="relative w-full h-52 md:h-48">
                <iframe
                  className="w-full h-full pointer-events-none"
                  src={video.url}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 border-t border-gray-200">
                <p className="text-sm text-start text-black">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ModalCommon isOpen={!!selectedVideo} onClose={handleClose} size="lg">
        {selectedVideo && (
          <div className="w-full h-full">
            <iframe
              className="w-full h-full rounded-lg"
              src={`${selectedVideo.url}?autoplay=1`}
              title="Selected Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </ModalCommon>
    </div>
  );
};

export default Videos;
