import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ 
      message: "All fields required" 
    }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });

  if (existing) {
    return NextResponse.json({ 
      message: "Email already registered"
    }, { status: 400 } );
  }

  const hashed = await hashPassword(password);

  const user = await prisma.user.create({
    data: { name, email, password: hashed, refreshToken: "",  },
  });

  // Create Response (optional attach cookies as header)
  const res =  NextResponse.json({     
    message: "User registered", 
    user: { id: user.id, name: user.name, email: user.email, refreshToken: "",} 
  }, {
    status: 200,
    // headers: {
    //   "Set-Cookie": `refreshToken=${refreshToken}; 
    //     HttpOnly; Path=/; 
    //     SameSite=lax; ${process.env.NODE_ENV === "production" ? "Secure;" : ""
    //   }`,      
    // }     
  });

  // Final Response
  return res;


}

 


