"use client";

import { useRouter } from "next/navigation";

export default function Programs() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
        Our Programs
      </h1>

      <p className="text-lg text-gray-600 mb-10 text-center max-w-xl">
        Explore our range of fitness programs designed for all levels.
      </p>

      <div className="w-full max-w-3xl space-y-6">
        {/* Beginner */}
        <div className="bg-green-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2 text-green-900">
            Beginner Program
          </h2>
          <p className="text-green-800 mb-4">
            A great starting point for those new to fitness.
          </p>
          <button
            onClick={() => router.push("/signup")}
            className="px-5 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition"
          >
            Get Started
          </button>
        </div>

        {/* Intermediate */}
        <div className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2 text-blue-900">
            Intermediate Program
          </h2>
          <p className="text-blue-800 mb-4">
            For those who have some experience and want to level up.
          </p>
          <button
            onClick={() => router.push("/signup")}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Join Now
          </button>
        </div>

        {/* Advanced */}
        <div className="bg-red-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2 text-red-900">
            Advanced Program
          </h2>
          <p className="text-red-800 mb-4">
            Challenging workouts for seasoned athletes.
          </p>
          <button
            onClick={() => router.push("/signup")}
            className="px-5 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
          >
            Start Challenge
          </button>
        </div>
      </div>
    </div>
  );
}
