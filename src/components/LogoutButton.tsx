"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    // 🔹 First clear refreshToken from browser cookies & DB using logout API
    console.log("First Calling logout API to clear refreshToken from cookies & DB");
    const res = await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    if (res.ok) {
      // 🔹 Now Clear accessToken from browser sessionStorage
      console.log("Now Clearing AccessToken from sessionStorage");
      sessionStorage.removeItem("accessToken");

      // (optional) Clear all sessionStorage data
      // sessionStorage.clear();

      console.log("Now redirecting ...");
      router.push("/"); // 🚪 redirect to homepage or login after logout
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded"
    >
      Logout
    </button>
  );
}
