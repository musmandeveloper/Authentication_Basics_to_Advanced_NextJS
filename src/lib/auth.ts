import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AccessTokenPayload extends JwtPayload {
  userId: string;
}

// 🔹 Hash password
export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

// 🔹 Compare passwords
export async function verifyPassword(password: string, hashed: string) {
  return bcrypt.compare(password, hashed);
}


const SECRET = process.env.JWT_SECRET!;

// Best practice:
// 1. Save refresh tokens in DB or cache (Redis) to allow revoking.
// 2. Store refresh tokens in httpOnly cookies.
// Store Access Token in browser memory (sessionStorage) or React State (Global Context) 
// but never in (LocalStorage or Cookies)
// 3. Login API
// Verify credentials → generate access + refresh tokens.
// Also Send with API Res:
// Access Token → JSON response.
// Refresh Token → HttpOnly cookie.

export function generateAccessToken(userId: string) {
  console.log("Generating Access Token");
  return jwt.sign({ userId }, SECRET, { expiresIn: "15m" });
}

export function generateRefreshToken(userId: string) {
  console.log("Generating Refresh Token");
  return jwt.sign({ userId }, SECRET, { expiresIn: "7d" });
}

export function verifyAccessToken(accessToken: string) {
  try {
    console.log("Verifying Access Token");
    // jwt.verify can return string or JwtPayload (from jsonwebtoken library).
    const AccessTokenPayload = jwt.verify(accessToken, process.env.JWT_SECRET!) as AccessTokenPayload;
    return AccessTokenPayload;
  } catch {
    return null;
  }
}

