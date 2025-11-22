import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


// Logout Api - Level 2 (cookies with jwt tokens)
export async function POST(req: Request) {
  console.log("✅ Inside Logout api :");
  try {    
    // ✅ Extract userId from refreshToken before clearing
    const cookieHeader = req.headers.get("cookie");
    const cookies = new Map(
      cookieHeader?.split(";").map((c) => {
        const [k, v] = c.trim().split("=");
        return [k, decodeURIComponent(v)];
      }) || []
    );

    const refreshToken = cookies.get("refreshToken");

    if (refreshToken) {
      // Remove refreshToken from DB (find user with that token)
      console.log("✅ Clearing RefreshToken from DB");
      await prisma.user.updateMany({
        where: { refreshToken },
        data: { refreshToken: null }, // clear it by null value
      });
    }

    // ✅ Clear refreshToken cookie in browser
    console.log("✅ Clearing RefreshToken from Browser Cookie");
    const res = NextResponse.json({ message: "Logged out" }, { status: 200 });
    res.cookies.set("refreshToken", "", { maxAge: -1 });

    console.log("✅ RefreshToken cleared from both browser & DB");
    return res;
  } catch (error) {
    console.error("❌ Logout error:", error);
    return NextResponse.json({ message: "Logout failed" }, { status: 500 });
  }
}


// Logout Api - Level 1 (session cookies without jwt)
// export async function POST() {
//   const res = NextResponse.json({ message: "Logged out" }, { status: 200 });

//   // Clear Cookies - Overwrite the cookie with empty value + expired date
//   res.cookies.set("session", "", {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "lax",
//     path: "/",
//     maxAge: 0, // expire immediately
//   });

//   return res
// }




