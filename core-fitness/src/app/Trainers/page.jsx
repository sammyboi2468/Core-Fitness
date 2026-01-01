"use client";

export default function Trainers() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
        Meet Our Trainers
      </h1>

      <p className="text-lg text-gray-600 mb-10 text-center max-w-xl">
        Our team of professional trainers is here to help you achieve your fitness goals.
      </p>

      <div className="w-full max-w-3xl space-y-6">
        <div className="bg-purple-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2 text-purple-900">
            John Doe
          </h2>
          <p className="text-purple-800">
            Specializes in strength training and nutrition coaching.
          </p>
        </div>

        {/* Trainer 2 */}
        <div className="bg-pink-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2 text-pink-900">
            Jane Smith
          </h2>
          <p className="text-pink-800">
            Expert in yoga and flexibility training.
          </p>
        </div>

        {/* Trainer 3 */}
        <div className="bg-indigo-100 p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-900">
            Mike Johnson
          </h2>
          <p className="text-indigo-800">
            Focuses on high-intensity interval training (HIIT).
          </p>
        </div>
      </div>
    </div>
  );
}
