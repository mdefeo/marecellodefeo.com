"use client";

import React, { useEffect, useRef } from "react";
import { animateBorders } from "@/components/animations/borderAnimation";

const ViewportBorders: React.FC = () => {
  const iconRef = useRef<SVGSVGElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (
      document.querySelector('.border-top') &&
      document.querySelector('.border-right') &&
      document.querySelector('.border-bottom') &&
      document.querySelector('.border-left')
    ) {
      animateBorders(() => {}, iconRef, buttonRef);
    }
  }, []);

  return (
    <>
      <div className="border-top h-border"></div>
      <div className="border-right v-border"></div>
      <div className="border-bottom h-border"></div>
      <div className="border-left v-border"></div>
    </>
  );
};

export default ViewportBorders;