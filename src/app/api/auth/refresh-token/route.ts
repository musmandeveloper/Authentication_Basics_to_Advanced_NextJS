import { NextResponse,  NextRequest } from "next/server";
import { generateAccessToken } from "@/lib/auth";
import jwt, {JwtPayload } from "jsonwebtoken";

interface RefreshTokenPayload extends JwtPayload {
  userId: string;
}

export async function POST(req: NextRequest) {
  const refreshToken = req.cookies.get("refreshToken")?.value;
  if (!refreshToken) return NextResponse.json({ message: "No refresh token" }, { status: 401 });

  try {
    const RefreshTokenPayload = jwt.verify(refreshToken, process.env.JWT_SECRET!) as RefreshTokenPayload;
    const newAccess = generateAccessToken(RefreshTokenPayload.userId);
    return NextResponse.json({ accessToken: newAccess });
  } catch {
    return NextResponse.json({ message: "Invalid refresh token" }, { status: 403 });
  }
}
