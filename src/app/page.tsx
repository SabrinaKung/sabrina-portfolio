"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import SelfIntro from "@/_contents/about/self-intro.mdx";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-50 flex items-center justify-center px-8">
        {/* Container */}
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-4xl w-full gap-8">
          {/* Left - Image */}
          <div className="w-48 h-48 md:w-80 md:h-100 flex-shrink-0 rounded-2xl overflow-hidden">
            <Image
              src="/images/profile/profilePhoto.jpg"
              alt="Profile Image"
              width={400} // Slightly larger to avoid upscaling
              height={500}
              quality={100}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Right - Text */}
          <div className="about-font text-[16px] max-w-lg mt-2 mb-50">
            <SelfIntro />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
