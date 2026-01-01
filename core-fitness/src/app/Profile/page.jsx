"use client"
import { Edu_AU_VIC_WA_NT_Arrows } from "next/font/google";
import { useUser } from "../Context/page"

export default function Profile() {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <div className="text-white flex justify-center items-center h-screen">
        Loading profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-white flex justify-center items-center h-screen">
        No user signed in
      </div>
    );
  }

  return (
    <div className="relative bg-black min-h-screen">
      <div className="justify-center flex flex-col min-h-14 px-4 pt-2 border-t border-t-gray-300 border-b-dashed border-b border-b-gray-300 ">
        <h1 className="text-white text-3xl">Profile</h1>
        <p className="text-gray-500">View all your profile details here.</p>
      </div>

    
      <div className="flex flex-row gap-8 px-10 mt-10 ml-20">
  
        <div className="flex flex-col bg-gray-900 rounded-3xl w-72 h-80 items-center justify-center shadow-lg">
          <img
            src="/avatar.png"
            alt="User Avatar"
            className="w-40 h-40 object-cover rounded-full mb-4"
          />
          <h1 className="text-white text-xl"> {user.username} </h1>
          <h4 className="text-green-400">Premium User</h4>
        </div>

        
        <div className="flex flex-col bg-gray-800 rounded-3xl w-96 h-80 p-6 shadow-lg text-white">
          <h2 className="text-2xl font-semibold mb-2">Bio & Other Details</h2>
          <p className="text-gray-300">
            Email Address : {user.email} 
          </p>
          <p className="text-gray-300 mt-5">Location: {user.location || "Unknown"}</p>
        </div>
      </div>
    </div>
  )};

