import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Note: In Next.js 16 the middleware file is named proxy.ts
// See: https://next-intl.dev/docs/routing/middleware
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except:
  // - API routes (/api, /trpc)
  // - Next.js internals (/_next, /_vercel)
  // - Static files (containing a dot like favicon.ico)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
