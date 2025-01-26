"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { animateBorders } from "@/components/animations/borderAnimation";
import { useGlobalClickListener, useObserveImages } from "@/components/animations/elementObserver";
import ViewportBorders from "./ViewportBorders";
import SummarySection from "@/components/sections/SummarySection";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimationClient: React.FC = () => {
  const [showSignature, setShowSignature] = useState(false);

  const popoverButtonRef = useRef<HTMLButtonElement | null>(null);
  const iconRef = useRef<SVGSVGElement | null>(null);

  useObserveImages();
  useGlobalClickListener();

  useEffect(() => {
    animateBorders(() => {
      setShowSignature(true);
    }, iconRef, popoverButtonRef);
  }, []);

  return (
    <>
      <ViewportBorders />
      <SummarySection showSignature={showSignature} />
    </>
  );
};

export default AnimationClient;