import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAccessToken } from "@/lib/auth";


// Auth logged-in user using jwt tokens level 2
// Verify access token in request headers.
// Used by Frontend & Backend APIs which need to verify the received header Access Token 
// to auth user & want to get some user-info
export async function GET(req: NextRequest) {
  try {
    // 1️⃣ Get access token from Authorization header of request
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("No accessToken header provided from frontend.");
      return NextResponse.json({ user: null, message: "No token provided" }, { status: 401 });
    }

    const accessToken = authHeader.split(" ")[1];

    // 2️⃣ Verify token
    const payload = verifyAccessToken(accessToken);
    if (!payload) {
      console.log("accessToken is Invalid or Expired!");
      return NextResponse.json({ user: null, message: "Invalid or expired token" }, { status: 401 });
    } else {
      console.log("AccessToken is verified successfully");
    }

    // 3️⃣ Fetch user from DB
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: { id: true, name: true, email: true }, // never send password
    });

    if (!user) {
      return NextResponse.json({ user: null, message: "User not found" }, { status: 404 });
    }

    // 4️⃣ Return user
    return NextResponse.json({ user });
  } catch (err) {
    console.error("❌ /api/auth/me error:", err);
    return NextResponse.json({ user: null, message: "Server error" }, { status: 500 });
  }
}


// Auth logged-in user using session cookies level 1
// Used by frontend only, can't used to auth user in API (they just assume user logged-in)
// export async function GET(req: Request) {
//   // ✅ Get cookies from the request
//   const cookieHeader = req.headers.get("cookie");
//   const cookies = new Map(
//     cookieHeader?.split(";").map(c => {
//       const [k, v] = c.trim().split("=");
//       return [k, decodeURIComponent(v)];
//     }) || []
//   );

//   const session = cookies.get("session");

//   if (!session) {
//     return NextResponse.json({ user: null, message: "Not logged in" }, { status: 401 });
//   }

//   // ✅ Fetch user from DB using session (userId)
//   const user = await prisma.user.findUnique({
//     where: { id: session },
//     select: { id: true, name: true, email: true },
//   });

//   if (!user) {
//     return NextResponse.json({ user: null, message: "Invalid session" }, { status: 401 });
//   }

//   return NextResponse.json({ user });
// }

