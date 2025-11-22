
export default function Level1AuthPage() {
  return (
    <>
      <div className="Level1AuthPage">
        <h1>Level 1 Auth - Simple Session Cookies</h1>
        <h2>Goals</h2>
        <p>
          1. Learn how basic password hashing, cookies, and sessions work in Next.js. 
          2. No JWT/ OAuth / Refresh Tokens yet - just simple session cookies.
          3. Build a working auth flow: Register → Login → Session Cookie → Protected Route → Logout.          
        </p> 
        <h2>Core Steps</h2>               
        <h3>1. Setup Database</h3>
        <p>
          1. Use Prisma + MongoDB
        </p>
        <h3>2. Password Hashing (auth.ts helpers)</h3>
        <p>
          Notes:
          1. Always hash before saving.
          2. Never store plain text passwords.
        </p>
        <h3>Set Get Clear Cookies inside APIs not in helpers functions</h3>
        <p>
        Notes:
        1. Cookies must always be attached to the API response (NextResponse) so the browser stores them.
        2. Helpers only provide logic, but final cookies go with API response.          
        </p>
        <h3>Setup Register, Login, Logout API</h3>
        <p>These API wil set, get and clear cookies and attach with the api response for frontend.</p>
        <h3>Setup Me API (A kind of Auth Middleware of MERN)</h3>
        <p>
          1. Use to help to authenticate logged-in user using cookies (sessions, tokens, etc)
        </p>        
        <h3>Setup Register & Login Pages</h3>
        <p>
          Notes:
          1. Always use credentials: "include" during api request when working with cookies to send & get cookies.          
        </p>
        <h3>Setup Dashboard Page</h3>
        <h2>Key Notes & Guidelines</h2>
        <p>
          1. Cookies must be set in the API response, not in helper files.
          2. Use httpOnly for security (prevents JS access to cookies).
          3. Use secure: true in production only (HTTPS required).
          4. sameSite: "lax" is safe default in dev; use "strict" for higher security, "none" if frontend/backend on different domains.
          5. /api/auth/me works as middleware-style auth (just like MERN’s authMiddleware).
          6. Frontend should never trust client-side-only checks → always ask the backend (/me) to auth a user.          
        </p>
        <h2>What We Learned in Level 1</h2>
        <p>
          1. Password hashing (bcrypt).
          2. Session management using cookies.
          3. Register, Login, Logout APIs.
          4. /me API = centralized authentication middleware.
          5. Secure cookie handling (httpOnly, secure, sameSite).
          6. Protecting frontend routes using /me.          
        </p>
      </div>
    </>
  );
}

