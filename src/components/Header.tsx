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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white px-6 py-4 shadow-sm">
      <div className="flex flex-col sm:space-y-4">
        {/* Top Row: Name & Social Icons */}
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Sabrina Kung
          </h1>
          <div className="flex space-x-2">
            {socialIcons.map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
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
        </div>

        {/* Bottom Row: Description & Navigation */}
        <div className="flex flex-row justify-between items-center w-full">
          <div className="text-left">
            <p className="text-xs leading-tight w-50 sm:w-64">
              Aspiring software engineer.
            </p>
            <p className="text-xs leading-tight w-50 sm:w-80">
              Passionate about building innovative solutions!
            </p>
          </div>
          <nav>
            <ul className="flex flex-col space-y-1 text-right sm:flex-row sm:space-y-0 sm:space-x-6 text-base max-sm:text-xs">
              <li>
                <Link
                  href="/"
                  className={`tracking-wide ${
                    pathname === "/" ? "text-red-500" : "text-gray-800"
                  }`}
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`tracking-wide ${
                    pathname === "/projects" ? "text-red-500" : "text-gray-800"
                  }`}
                >
                  projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className={`tracking-wide ${
                    pathname === "/experience"
                      ? "text-red-500"
                      : "text-gray-800"
                  }`}
                >
                  experience
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
