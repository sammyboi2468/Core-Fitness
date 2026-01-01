'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from "../Context/page";


export default function Navbar() {
   const { user, loading } = useUser();
   const router = useRouter();
     if (loading) return null; 
     if (!user) return null; 
  

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      
      <Link href="/Home" className="text-2xl font-extrabold tracking-wide text-green-400">
        Core<span className="text-white">Fitness</span>
      </Link>

      
      <div className="flex space-x-6 font-medium">
        <Link href="/Home" className="hover:text-green-400 transition">Home</Link>
        <Link href="/Programs" className="hover:text-green-400 transition">Programs</Link>
        <Link href="/Trainers" className="hover:text-green-400 transition">Trainers</Link>
        <Link href="/Contact" className="hover:text-green-400 transition">Contact</Link>
        <Link href="/Profile" className="hover:text-green-400 transition">Profile</Link>
      </div>
    </nav>
  );
}