import React from "react";
import { auth } from '../../../lib/auth';

export default async function CreatePhoto() {
    const session = await auth();
    if (!session || session.user.role !== "ADMIN") {
        return
    }
    return (
        <div>Create new photo Page!!</div>
    )
}
