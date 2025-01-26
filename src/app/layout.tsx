import type { Metadata } from "next";
import AnimationClient from "@/components/ui/AnimationClient";
import PageLoad from "@/components/ui/PageLoad";
import '@/styles/globals.css';
import '@/styles/accessibility.css';

export const metadata: Metadata = {
  title: "Marcello De Feo",
  description: "Personal and Professional Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="aTributeToSinclair">
      <body>
      <AnimationClient />
        <main>  
          {children}
        </main>
        <PageLoad />
      </body>
    </html>
  );
}