import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's name. */
      name: string
      email: string
      image: string
      role: string
    }
  }
  interface CustAuthOptions extends NextAuthOptions {
    providers,
    adapter,
    secret,
    callbacks 
  }
}