import type { CustAuthOptions, Session } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import prisma from '../lib/prisma';
import { getServerSession } from "next-auth"
import { User } from "@prisma/client";

export const options: CustAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          }),
    ],
    adapter: PrismaAdapter(prisma),
    secret: process.env.SECRET,
    callbacks: { async redirect({ url, baseUrl }: {url:string, baseUrl:string}) { return baseUrl }, 
                async session({session, user}: {session: Session, user: User}) { 
                    session.user.role = user.role
                    return session;
                 },}
}

export async function auth() {

    const session: Session|null = await getServerSession(options);
    return session;
}