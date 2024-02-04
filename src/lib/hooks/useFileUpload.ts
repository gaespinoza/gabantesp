import { Session } from "next-auth";
export function useFileUpload() {
    return async (filename: string, file: File, session: Session) => {
        if (session && session.user.role === "ADMIN") {

            const result = await fetch(`/api/files/upload-url?file=${filename}`);
            
            const { url, fields } = await result.json();
            
            const formData = new FormData();
            Object.entries({ ...fields, file }).forEach(([key, value]) => {
                formData.append(key, value as string | Blob);
            });
            await fetch(url, {
                method: "POST",
                body: formData,
            }).then((response) => {
                console.log(`Uploaded file: ${response}`)
                return true;
            }).catch((err) =>{
                console.error(`Error uploading image to bucket: ${err}`)
                return false;
            });
            
        }
        return false;
    };
  }