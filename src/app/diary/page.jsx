'use client'
import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiSettings, FiSearch, FiPlus } from 'react-icons/fi';

const DashboardHeader = () => {
  return (
    <>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat p-8"
           style={{ backgroundImage: `url('/vecteezy_blue-vector-grunge-background_107486.jpg')` }}>
        <Header/>
        
        {/* Main container with black background */}
        <div className="mx-auto max-w-5xl bg-black/80 rounded-lg mt-10 p-6 relative h-[800px]">
          {/* My Safe Section positioned over black background */}
          <div className="absolute top-6 left-6 right-6 bg-gray-200 rounded-lg p-6 h-5/6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">My Safe</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 cursor-pointer">
                  <span>Create note</span>
                  <Link href='create-diary'>
                  <FiPlus className="w-6 h-6" />
                  </Link>
                </div>
               
              </div>
            </div>
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                className="w-full p-2 pl-10 rounded-full bg-white" 
                placeholder="Search..." 
              />
            </div>
          </div>
        </div>
      </div>


    <footer>
                <div className="w-full">
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

                    <div className="bg-[#FFFBA0] p-4">
                        <div className="relative flex justify-between items-center">
                            <img
                                src="/FreshLink Logo OG 1.png"
                                alt="Hope"
                                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-14 mt-6 z-10"
                            />

                            <div className="border-[15px] border-black bg-white w-[30%]">
                                <div className="p-2">
                                    <img src="/Poetherapy (1).png" alt="I will not take me away" className="w-full" />
                                </div>
                            </div>

                            <div className="border-[15px] border-black bg-white w-[35%] ">
                                <div className="p-1">
                                    <img src="/Lil Wayne (3).png" alt="HEAL" className="w-full h-72 ml-1" />
                                </div>
                            </div>

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