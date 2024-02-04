import React from "react";
import { auth } from '../../../lib/auth';


export default async function CreateBlog() {
    const session = await auth();
    if (!session || session.user.role !== "ADMIN") {
        return;
    }
    
    return (
        <div>Create new blog post Page!!</div>
    )
}
