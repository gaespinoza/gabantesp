import Image from "next/image";
import React, { useState } from "react";

type PopOutImageProps = {
    src: string,
    alt: string,
}

export default function PopOutImage({src, alt}: PopOutImageProps) {
    const [popOutActive, setPopOutActive] = useState<boolean>(false);

    const card = 
    <Image 
        src={src} 
        alt={alt} 
        fill={true}
        sizes="128px, 128px"
        className="rounded-2xl border-2 border-slate-600 p-1 object-cover"
        onClick={() => setPopOutActive(!popOutActive)}
    />

    const expanded = 
    <Image
        src={src} 
        alt={alt}
        width={800}
        height={800}
        style={{
            objectFit: "contain",
            fill: 'true',
            contain: "fill",
            padding: "10%",
            pointerEvents: "none",
    }}

    />

    return (
        <div>
            <div className="h-32 w-32 relative hover:animate-pulse">
                {card}
            </div>
            {popOutActive ? 
                <div 
                id="wrapper" 
                className=" z-50 fixed inset-0 bg-black bg-opacity-35 backdrop-blur-md flex justify-center items-center"
                onClick={() => setPopOutActive(!popOutActive)}>
                    {expanded}
                </div>
                : null }
        </div>
    )
}