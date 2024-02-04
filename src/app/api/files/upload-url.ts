import type { NextApiRequest, NextApiResponse } from "next";
import { SignedPostPolicyV4Output, GenerateSignedPostPolicyV4Options } from "@google-cloud/storage";
import { Storage } from "@google-cloud/storage";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignedPostPolicyV4Output | string>
) {
    const session = await getSession({ req });

    const { query } = req;

    if (session && session.user.role === "ADMIN") {
        const storage = new Storage({
            projectId: process.env.PROJECT_ID,
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                private_key: process.env.GOOGLE_SERVICE_PRIVATE_KEY,
            },
        });
        const bucket = storage.bucket(process.env.GOOGLE_BUCKET || "");
        const file = bucket.file(query.file as string);
        const options: GenerateSignedPostPolicyV4Options = {
            expires: Date.now() + 5 * 60 * 1000, //  5 minutes,
            fields: { "x-goog-meta-source": process.env.PROJECT_ID || "" },
        };
        const [response] = await file.generateSignedPostPolicyV4(options);
        res.status(200).json(response);
        return;
    }

    res.status(401).json("Not Authenticated!");
    return;
}