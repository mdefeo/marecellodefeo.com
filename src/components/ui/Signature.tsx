"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { playSignatureAnimation } from "@/components/animations/signatureAnimation";
import { SignaturePath } from "./SignaturePath";
import socialMediaData from "@/data/socialMediaData.json";
import { getItemFromJSON } from "@/utils/getItemFromJSON";

const Signature = ({ onComplete }: { onComplete?: () => void }) => {
  const [hasRun, setHasRun] = useState(false);

  const linkedInItem = getItemFromJSON(socialMediaData, "LinkedIn");

  useEffect(() => {
    if (!hasRun) {
      playSignatureAnimation(() => {
        setHasRun(true);
        if (onComplete) onComplete();
      });
    }
  }, [hasRun, onComplete]);

  return (
    <div className="signature-wrapper">
      <Link href={linkedInItem.href} className="signature-link" target="_blank" rel="noopener noreferrer">
        <SignaturePath style={{ stroke: "#29344E", fill: "#29344E" }} className="signature-svg text-neutral" />


        <div class="relative block w-screen h-screen z-50">
  <div class="animate-circle-spin circle-spin circle-one bottom-0 left-0 h-4 w-full fixed rounded-full bg-repeat bg-[50px_50px] bg-sky-50"></div>
  <div class="animate-circle-spin circle-spin circle-two bottom-4 left-4 h-8 w-full fixed rounded-full bg-repeat bg-[50px_50px] bg-sky-100"></div>
  <div class="animate-circle-spin circle-spin circle-three bottom-7 left-7 h-12 w-full fixed rounded-full bg-repeat bg-[50px_50px] bg-sky-200"></div>
  <div class="animate-circle-spin circle-spin circle-four bottom-11 left-11 h-24 w-full fixed rounded-full bg-repeat bg-[50px_50px] bg-sky-300"></div>
  <div class="animate-circle-spin circle-spin circle-five bottom-14 left-14 h-28 w-full fixed rounded-full bg-repeat bg-[50px_50px] bg-sky-400"></div>
  <div class="animate-circle-spin circle-spin circle-six bottom-16 left-16 h-full w-full fixed rounded-full bg-repeat bg-[50px_50px] bg-sky-500"></div>
  <div class="animate-circle-spin circle-spin circle-seven bottom-20 left-20 h-full w-full fixed rounded-full bg-repeat bg-[50px_50px] bg-sky-600"></div>
  <div class="animate-circle-spin circle-spin circle-eight bottom-24 left-24 h-full w-full fixed rounded-full bg-repeat bg-[50px_50px] bg-sky-700"></div>
  <div class="animate-circle-spin circle-spin circle-nine bottom-28 left-28 h-full w-full fixed rounded-full bg-repeat bg-[50px_50px] bg-sky-800"></div>
</div>




      </Link>
    </div>
  );
};

export default Signature;