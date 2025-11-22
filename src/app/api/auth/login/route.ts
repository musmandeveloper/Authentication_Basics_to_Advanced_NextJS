import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateAccessToken, generateRefreshToken, verifyPassword } from "@/lib/auth";

// LEVEL 1 Login API -  Session Cookies without jwt
// export async function POST(req: Request) {
//   const { email, password } = await req.json();

//   if (!email || !password) {
//     return NextResponse.json({ message: "Email & Password required" }, { status: 400 });
//   }

//   const user = await prisma.user.findUnique({ where: { email } });
//   if (!user) {
//     return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
//   }

//   const isValid = await verifyPassword(password, user.password);
//   if (!isValid) {
//     return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
//   }

//   // Create Response
//   const res =  NextResponse.json({     
//     message: "Login successful", 
//     user: { id: user.id, name: user.name, email: user.email } 
//   }, {status: 200 } );

//   // Attach Cookies
//   res.cookies.set("session", user.id, {
//     httpOnly: true, // secure cookies, true in both dev and prod 
//     secure: process.env.APP_ENV === "production", // secure = true only in prod, else false
//     sameSite: "lax", //  safer default for dev, (strict, lax, none)
//     path: "/",
//   });

//   // Final Response by attaching res & cookies together
//   return res;

// }

// Level 2 Login API - With JWT Tokens
export async function POST(req: Request) {

  try {
    const { email, password } = await req.json();
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await verifyPassword(password, user.password))) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    const accessToken = generateAccessToken(user.id);  
    const refreshToken = generateRefreshToken(user.id);

    // save refresh in DB (optional but safer)
    await prisma.user.update({ where: { id: user.id }, data: { refreshToken } });

    // API Res Sending - Universal Truth
    // 1. Always send cookies and body data together from the API response.
    // 2. Cookies (HttpOnly or not) must be attached via the response headers.
    // 3. Body data (JSON, etc.) must be in the response body.
    // 4. Never rely on “setting cookies separately after returning a body,” 
    // because some runtimes (Edge, Turbopack, etc.) may break the response stream, 
    // causing the frontend to fail parsing JSON.

    // Attach accessToken body and refreshToken Cookies as header with res json
    const res = NextResponse.json({ message: "Login success", accessToken }, { 
      status: 200, 
      headers: {
        "Set-Cookie": `refreshToken=${refreshToken}; HttpOnly; Path=/; SameSite=Strict; ${
          process.env.NODE_ENV === "production" ? "Secure;" : ""
        }`,      
      }
    });

    console.log("Login API Returning Res: ", res);
    return res;   
    
  } catch (error) {
    console.error("❌ Login error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });    
  }
}


