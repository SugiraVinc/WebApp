'use client'
import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const DashboardHeader = () => {
  const [isRoomDropdownOpen, setIsRoomDropdownOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const rooms = [
    { id: 1, name: 'Depression' },
    { id: 2, name: 'Anxiety' },
    { id: 3, name: 'Bipolar' }
  ];

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Here you would typically handle the file upload to your server
      console.log('Selected file:', file.name);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-cover bg-center bg-no-repeat p-8 "
         style={{ backgroundImage: `url('/vecteezy_blue-vector-grunge-background_107486.jpg')` }}>

            <Header/>
      <div className="mx-auto max-w-5xl rounded-lg bg-black/80 p-6 mt-10">
        {/* Header buttons container */}
        <div className="flex justify-between items-center">
          {/* Upload Content Button */}
          <div className="relative">
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              className="hidden"
              // Add accepted file types as needed
              accept="image/*,video/*,audio/*"
            />
            
            {/* Upload button that triggers file input */}
            <button 
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded flex items-center gap-2 text-sm group"
              onClick={() => fileInputRef.current.click()}
            >
              <span>Upload Content</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 transition-transform group-hover:translate-y-[-2px]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </button>

            {/* Show selected file name if one is selected */}
            {selectedFile && (
              <div className="absolute mt-2 px-3 py-1 bg-white rounded-md shadow-sm text-sm">
                Selected: {selectedFile.name}
              </div>
            )}
          </div>

          {/* Choose Room Button with Dropdown */}
          <div className="relative">
            <button 
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded flex items-center gap-2 text-sm"
              onClick={() => setIsRoomDropdownOpen(!isRoomDropdownOpen)}
            >
              Choose A Room
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transform transition-transform ${isRoomDropdownOpen ? 'rotate-180' : ''}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isRoomDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {rooms.map((room) => (
                    <button
                      key={room.id}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={() => {
                        // Handle room selection here
                        setIsRoomDropdownOpen(false);
                      }}
                    >
                      {room.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main content area - light background */}
        <div className="mt-4 bg-gray-100 rounded-lg w-full h-[500px]">
          {/* Add your content here */}
        </div>
      </div>
    </div>
    <footer>
                <div className="w-full">
                    {/* Player controls bar */}
                    <div className="bg-[#4AA9AD] px-4 py-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-black rounded-full" />
                            <div className="text-white">
                                <div className="text-sm">NF</div>
                                <div className="text-xs">The Search</div>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center gap-4">
                            <div className="h-[2px] bg-black flex-1" />
                            <button className="text-[#1E90FF]">⟲</button>
                            <button className="text-[#1E90FF]">◀◀</button>
                            <button className="h-8 w-8 bg-black rounded-full flex items-center justify-center">
                                <span className="text-[#1E90FF]">▶</span>
                            </button>
                            <button className="text-[#1E90FF]">▶▶</button>
                            <button className="text-[#1E90FF]">⟳</button>
                            <div className="h-[2px] bg-black flex-1" />
                        </div>
                        <button className="text-[#1E90FF]">🔊</button>
                    </div>

                    {/* Main content area */}
                    <div className="bg-[#FFFBA0] p-4">
                        <div className="relative flex justify-between items-center">
                            <img
                                src="/FreshLink Logo OG 1.png"
                                alt="Hope"
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-14 mt-6 z-10"
                            />

                            {/* Left image */}
                            <div className="border-[15px] border-black bg-white w-[30%]">
                                <div className="p-2">
                                    <img src="/Poetherapy (1).png" alt="I will not take me away" className="w-full" />
                                </div>
                            </div>

                            {/* Middle image - adjusted to be only slightly smaller */}
                            <div className="border-[15px] border-black bg-white w-[35%] ">
                                <div className="p-1">
                                    <img src="/Lil Wayne (3).png" alt="HEAL" className="w-full h-72 ml-1" />
                                </div>
                            </div>

                            {/* Right image */}
                            <div className="border-[15px] border-black bg-white w-[30%]">
                                <div className="p-2">
                                    <img src="/Selena Gomez Quote 1.png" alt="Selena Gomez quote" className="w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#4AA9AD] py-8"> 
          <div className="container mx-auto px-4 flex justify-between items-center">
    
            <div className="text-center">
              <img src="/smile2.png" alt="Smile" className="w-7 h-7 mx-auto" />
            </div>

            <div className="flex space-x-6">
              <Link href="https://facebook.com" className="w-6 h-6 rounded-full flex items-center justify-center text-white">
                <FaFacebookF size={20} />
              </Link>
              <Link href="https://twitter.com" className="w-6 h-6 rounded-full flex items-center justify-center text-white">
                <FaTwitter size={20} />
              </Link>
              <Link href="https://instagram.com" className="w-6 h-6 rounded-full flex items-center justify-center text-white">
                <FaInstagram size={20} /> 
              </Link>
            </div>
          </div>

          <div className="text-center text-white text-xs mt-10">
            © Copyright Year
          </div>
        </div>
            </footer>
    </>
  );
};

export default DashboardHeader;