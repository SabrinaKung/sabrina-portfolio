"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const socialIcons = [
    {
      href: "https://github.com/SabrinaKung",
      src: "/github.svg",
      alt: "GitHub",
    },
    {
      href: "http://linkedin.com/in/sabrina-kung-690b37199/",
      src: "/linkedin.svg",
      alt: "LinkedIn",
    },
    {
      href: "mailto:lin-ning_kung@brown.edu",
      src: "/email.svg",
      alt: "Email",
    },
    {
      href: "https://drive.google.com/file/d/1-G_e_yqZNjVKqP1AEeIjlgfhV0ez2bcj/view?usp=sharing",
      src: "/cv.svg",
      alt: "CV",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white px-8 py-4 shadow-sm">
      <div className="flex justify-between">
        {/* Left Column: Name & Description */}
        <div className="flex flex-col">
          <h1
            className="text-3xl font-bold mt-2 mb-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            Sabrina Kung
          </h1>
          <p
            className="text-sm leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Aspiring software engineer
          </p>
          <p
            className="text-sm leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Passionate about building innovative solutions
          </p>
        </div>

        {/* Right Column: Social Icons and Navigation */}
        <div className="flex flex-col items-end">
          {/* Social Icons */}
          <div className="flex space-x-1.5 mt-2">
            {socialIcons.map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:opacity-80"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
          {/* Navigation Links */}
          <nav className="mt-5">
            <ul className="flex p-2 space-x-6 text-l">
              <li>
                <Link
                  href="/"
                  className={`tracking-wide transition-colors ${
                    pathname === "/" ? "text-red-500" : "text-gray-800"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`tracking-wide transition-colors ${
                    pathname === "/projects" ? "text-red-500" : "text-gray-800"
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className={`tracking-wide transition-colors ${
                    pathname === "/experience"
                      ? "text-red-500"
                      : "text-gray-800"
                  }`}
                >
                  Experience
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
