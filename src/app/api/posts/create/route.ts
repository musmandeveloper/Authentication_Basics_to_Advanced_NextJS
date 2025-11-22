// /api/posts/create/route.ts
import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// export async function POST(req: NextRequest) {
//   const authHeader = req.headers.get("authorization");
//   if (!authHeader) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

//   const accessToken = authHeader.split(" ")[1];
//
//   const payload = verifyAccessToken(accessToken);
//   if (!payload) { 
//    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
//   }

//   const { title, content } = await req.json();

//   const post = await prisma.post.create({
//     data: {
//       title,
//       content,
//       authorId: payload.userId, // ✅ associate post with logged-in user
//     },
//   });

//   return NextResponse.json({ post });
// }

