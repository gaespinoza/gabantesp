import NextAuth from "next-auth/next";
import { NextApiHandler } from "next";
import { options } from "../../../../lib/auth";


const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export {authHandler as GET, authHandler as POST};