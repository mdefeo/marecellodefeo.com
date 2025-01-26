"use client";
import Image from "next/image";
import Link from "next/link";
import Signature from "@/components/ui/Signature";

export default function SummarySection({ showSignature }: { showSignature: boolean }) {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId!);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="summary" aria-labelledby="summary-heading" role="contentinfo" className="flex items-center justify-center min-h-screen">
      <div className="summary-grid grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center">
        <div className="sm:order-1 order-2 h-auto sm:h-auto text-center mx-auto md:text-left">
          {showSignature && <Signature />}
          <h3 className="font-normal">Full-Stack Engineer & People Leader</h3>
          <h4 className="font-md md:font-lg font-normal md:font-base md:font-light">MBA Candidate at Boston University</h4>
          <p className="my-5 italic text-base sm:text-sm font-light">
            Experienced software engineer and leader with 20+ years in full-stack development, team management, and business ownership.
          </p>
          <p className="italic text-secondary-content text-base md:text-sm font-light"> Want to learn more? 
            &nbsp;<Link href="#chat" onClick={handleScroll}>Let's chat!</Link></p>
        </div>
        <div className="sm:order-2 order-1 flex justify-center sm:justify-end items-center h-full sm:h-auto">
          <div className="relative md:w-80 md:h-80 sm:h-auto">
            <Link
              href="https://linkedin.com/in/marcellodefeo"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-image-container"
            >
              <Image
                src="/images/marcello-de-feo.png"
                alt="Marcello De Feo"
                height={320}
                width={320}
                className="profile-image"
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}