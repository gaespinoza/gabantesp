import React from "react";
import Image from "next/image";
 
export const Head = () => (
    <Image
    src="/images/face.png"
    alt="head"
    height="34"
    width="34"
    style={{ width: 'auto', height: 'auto' }}
    priority={true}
    />
);