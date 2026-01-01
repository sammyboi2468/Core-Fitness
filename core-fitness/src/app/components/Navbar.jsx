"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <Link
        href="/home"
        className="text-2xl font-extrabold tracking-wide text-green-400"
      >
        Core<span className="text-white">Fitness</span>
      </Link>

      <div className="flex space-x-6 font-medium">
        <Link href="/programs" className="hover:text-green-400 transition">
          Programs
        </Link>
        <Link href="/trainers" className="hover:text-green-400 transition">
          Trainers
        </Link>
        <Link href="/contact" className="hover:text-green-400 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
