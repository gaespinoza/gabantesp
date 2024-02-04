import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
      name: string
      email: string
      image: string
      role?: string
  }
  interface Session {
    user: User
  }
  interface CustAuthOptions extends NextAuthOptions {
    providers,
    adapter,
    secret,
    callbacks 
  }
}