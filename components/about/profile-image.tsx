"use client";

import Image from "next/image";

export function ProfileImage() {
  return (
    <div className="relative w-[240px] h-[240px] rounded-full bg-stone-200">
      <Image
        src="/face2.jpg"
        alt="Andrew Yong"
        width={3024}
        height={3024}
        className={`rounded-full object-cover w-[240px] h-[240px] transition-opacity duration-300 `}
        loading="eager"
      />
    </div>
  );
}
