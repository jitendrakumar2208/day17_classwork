import React, { useEffect, useState, useContext } from "react";

import { auth, db } from "../Auth";
import { doc, getDoc } from "firebase/firestore";

const Welcome = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docref = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docref);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User Not Logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <h1 className="text-4xl font-bold">Welcome, {userData.name}!</h1>
      <p className="text-xl mt-4">Email: {userData.email}</p>
      <div className="mt-8 bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">About MyApp</h2>
        <p>
          MyApp is a revolutionary platform that offers a wide range of features
          to help you manage your tasks and projects efficiently. Our mission is
          to provide the best user experience and help you achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
