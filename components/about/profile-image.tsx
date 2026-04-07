"use client";

import Image from "next/image";
import { useState } from "react";
import { Blurhash } from "react-blurhash";

export function ProfileImage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-[240px] h-[240px] rounded-full">
      {!loaded && (
        <div className="absolute inset-0 rounded-full overflow-hidden  ">
          <Blurhash
            hash={
              "nlKL2Pt7SdoMjF_NoMx]RjM_S%RiRPxuozxut7V@RjtRs:ofR+fRjsRjRjRjt7of"
            }
            punch={1}
            width="100%"
            height="100%"
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        </div>
      )}
      <Image
        src="/face.jpeg"
        alt="Andrew Yong"
        width={240}
        height={240}
        className={`rounded-full object-cover w-[240px] h-[240px] transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        loading="eager"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
