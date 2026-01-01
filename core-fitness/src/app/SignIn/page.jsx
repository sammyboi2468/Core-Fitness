'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Loadingscreen from "../components/Loadingscreen";
import { auth } from "../firebase";
import {doc, setDoc} from "firebase/firestore"
import { db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useUser } from "../Context/page";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  const [loading, setLoading] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  const { setUser, userName, setUserName } = useUser(); 
  const router = useRouter();

  const handleAuth = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      alert('❌ Please enter a valid email address!');
      return;
    }

    try {
      setLoading(true);

      let userCredential;

      if (isNewUser) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
         const res = await fetch("https://randomuser.me/api/");
         const data = await res.json();
         const avatarUrl = data.results[0].picture.large;
        
        await setDoc(doc(db, "users", userCredential.user.uid),
        {
         email: email,
         username: userName,
         avatar: avatarUrl,
         createdAt: new Date()
        });
        alert("✅ Account created successfully!");
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }

      
      setUser(userCredential.user);

  
      console.log("User:", userCredential.user);
      console.log("Username:", userName);

      router.push('/Home');
    } catch (error) {
      alert(`❌ Error: ${error.message}`);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loadingscreen />;
  }

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

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-[-1]" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-1">
        <h1 className="text-4xl font-bold text-center mb-6">
          {isNewUser ? "Create Your Account" : "Welcome Back!"}
        </h1>

        <form onSubmit={handleAuth} className="flex flex-col items-center gap-4 mb-6">
          <input
            type="email"
            required
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 w-72 rounded-full border-2 border-pink-950 text-black"
          />
          <input
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 w-72 rounded-full border-2 border-pink-950 text-black"
          />
          {isNewUser && (
            <input
              type="text"
              required
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              className="px-4 py-2 w-72 rounded-full border-2 border-pink-950 text-black"
            />
          )}
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-800 transition"
          >
            {isNewUser ? "Sign Up" : "Sign In"}
          </button>

          <p
            onClick={() => setIsNewUser(!isNewUser)}
            className="text-sm cursor-pointer mt-2 underline"
          >
            {isNewUser ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
          </p>
        </form>
      </div>
    </div>
  );
}

