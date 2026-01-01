'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/runningvid.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-0" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-5xl font-bold text-center mb-4">
          Welcome to {' '}
          <span className="text-green-400">Core Fitness</span>
        </h1>
        <p className="text-xl text-center max-w-2xl mb-8">
          Achieve your fitness goals with expert guidance, personalized workouts,
          and a community that pushes you beyond limits. We hope you enjoy this jounrey into fitness!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mb-12">
          <div className="bg-black bg-opacity-60 p-6 rounded-2xl border-2 border-green-600 text-center hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">💪 Strength</h2>
            <p>Build muscle with guided routines and expert plans.</p>
          </div>
          <div className="bg-black bg-opacity-60 p-6 rounded-2xl border-2 border-green-600 text-center hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">🏃 Endurance</h2>
            <p>Improve stamina with cardio challenges and trackers.</p>
          </div>
          <div className="bg-black bg-opacity-60 p-6 rounded-2xl border-2 border-green-600 text-center hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">🧘 Wellness</h2>
            <p>Stay balanced with recovery tools and mental fitness tips.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={ () =>router.push('/programs')} className="px-6 py-3 bg-green-600 rounded-full hover:bg-green-800 transition">
            Start Your Journey
          </button>
          <button onClick={ () => router.push('/trainers')} className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-300 transition">
            Meet Our Trainers
          </button>
        </div>
      </div>
    </div>
  );
}

