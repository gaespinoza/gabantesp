import NextAuth from "next-auth/next";
import { options } from "@/lib/auth";


// const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
const authHandler = NextAuth(options);
export {authHandler as GET, authHandler as POST};