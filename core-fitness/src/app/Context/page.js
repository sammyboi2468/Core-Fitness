"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(""); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const ref = doc(db, "users", firebaseUser.uid);
        const snapshot = await getDoc(ref);

        if (snapshot.exists()) {
          setUser({
            uid: firebaseUser.uid,
            email: snapshot.data().email,
            username: snapshot.data().username,
            avatar: snapshot.data().avatar,
          });
          setUserName(snapshot.data().username || ""); // ✅ keeps username separate if needed
        } else {
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
          });
        }
      } else {
        setUser(null);
        setUserName(""); 
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, userName, setUserName, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
