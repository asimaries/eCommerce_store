import { authMiddleware } from "@clerk/nextjs";
export const runtime = 'edge'

export default authMiddleware({
  publicRoutes: ["/:path*"]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};