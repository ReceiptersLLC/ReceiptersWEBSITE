"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import axios from "axios";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signUp: (payload: Record<string, string>) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const idToken = await currentUser.getIdToken();
          await axios.post("/api/auth/login", { idToken });
        } catch (err) {
          console.error("Failed to sync session cookie on login:", err);
        }
      } else {
        setUser(null);
        try {
          await axios.post("/api/auth/logout");
        } catch (err) {
          console.error("Failed to clear session cookie on logout:", err);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (payload: Record<string, string>) => {
    try {
      // 1. Register user via our API route
      await axios.post("/api/auth/signup", payload);
    } catch (error: any) {
      const serverMessage = error.response?.data?.message || "An error occurred during registration.";
      throw new Error(serverMessage);
    }
    
    // 2. Sign in locally to trigger onAuthStateChanged
    await signInWithEmailAndPassword(auth, payload.email, payload.password);
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    
    if (result.user) {
      try {
        // Sync user profile to Firestore database if they are a new user
        const userDocRef = doc(db, "users", result.user.uid);
        const userDoc = await getDoc(userDocRef);
        if (!userDoc.exists()) {
          const names = result.user.displayName?.split(" ") || [];
          await setDoc(userDocRef, {
            firstName: names[0] || "",
            middleName: "",
            lastName: names.slice(1).join(" ") || "",
            email: result.user.email || "",
            phoneNumber: result.user.phoneNumber || "",
            createdAt: new Date().toISOString(),
          });
        }
      } catch (firestoreError) {
        console.warn("Failed to sync user profile to Firestore (Firestore might not be initialized):", firestoreError);
      }
    }
  };

  const loginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);
    
    if (result.user) {
      try {
        // Sync user profile to Firestore database if they are a new user
        const userDocRef = doc(db, "users", result.user.uid);
        const userDoc = await getDoc(userDocRef);
        if (!userDoc.exists()) {
          const names = result.user.displayName?.split(" ") || [];
          await setDoc(userDocRef, {
            firstName: names[0] || "",
            middleName: "",
            lastName: names.slice(1).join(" ") || "",
            email: result.user.email || "",
            phoneNumber: result.user.phoneNumber || "",
            createdAt: new Date().toISOString(),
          });
        }
      } catch (firestoreError) {
        console.warn("Failed to sync user profile to Firestore (Firestore might not be initialized):", firestoreError);
      }
    }
  };

  const logout = async () => {
    await firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signUp,
        loginWithGoogle,
        loginWithFacebook,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
