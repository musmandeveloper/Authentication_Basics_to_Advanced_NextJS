// types/user.ts

// 🔹 Basic User type (matches Prisma User model)
export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;       // optional for safety when sending to frontend
  refreshToken?: string;   // optional since nullable
}

// 🔹 JWT Payload type
export interface AccessTokenPayload {
  userId: string;          // always include userId in JWT
  iat?: number;            // issued at timestamp
  exp?: number;            // expiration timestamp
}

// 🔹 Login response type
export interface LoginResponse {
  message: string;
  accessToken?: string;    // optional, may be missing if login failed
  user?: User;
}

// 🔹 Me API response type
export interface MeResponse {
  message?: string;
  user?: User | null;
}


