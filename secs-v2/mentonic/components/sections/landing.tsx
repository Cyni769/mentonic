'use client';

import React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

const Landing = () => {
  return (
    <>
    <div className="top-0 flex flex-col items-center m-4 justify-center bg-background text-primary">
      <div className="w-full justify-center bg-background dark:bg-foreground">
        <nav className="flex items-center h-16 justify-center p-6 border-primary border gap-x-22 media:max-lg:gap-x-6 max-md:gap-x-4 max-sm:gap-x-2 max-sm:flex-wrap max-sm:justify-center max-sm:p-4 media:max-sm:h-auto max-sm:mb-0">
          <Link href="/" className="text-x text-mono hover:bg-primary hover:text-white px-3 py-1 transition">
           About
          </Link>
          <Link href="/" className="text-x text-mono hover:bg-primary hover:text-white px-3 py-1 transition">
           Explore
          </Link>
          <Link href="/" className="text-x text-mono hover:bg-primary hover:text-white px-3 py-1 transition">
           Partners
          </Link>
          <Link href="/" className="text-x text-mono hover:bg-primary hover:text-white px-3 py-1 transition">
           FQA
          </Link>
        </nav>
          <div className="flex flex-col w-auto border-primary border-t-0 border p-6 items-start max-sm:p-4 max-sm:gap-y-2 max-sm:border-t-0 max-md:border-t-0 max-lg:border-t-0 max-sm:text-left max-sm:top-0">
            <Link href="/">
              <h1 className="text-8xl justify-center uppercase tracking-tight max-sm:text-6xl max-md:text-7xl max-lg:text-8xl">Mevlint</h1>
              </Link>
            <p className="text-xl w-full text-right max-sm:text-left max-sm:text-base">Collaborate with creators and make dream come true</p>
          </div>
            <div className="flex flex-row w-auto h-102 border-primary border-t-0 border items-start max-sm:flex-col max-sm:h-auto max-sm:border-t-0 max-md:border-t-0 max-lg:border-t-0 max-md:h-auto max-lg:h-auto">
              <div className="bg-primary h-full w-1200 max-sm:w-full max-sm:h-60 max-md:w-full max-md:h-80 max-lg:w-full max-lg:h-100">
                // Placeholder for image or video
              </div>
                <div className="flex flex-row w-full m-4 justify-end max-sm:flex-col max-sm:justify-center max-sm:items-start max-sm:m-2 max-md:m-2 max-md:h-auto max-lg:m-2 max-lg:h-auto">
                  <div className="flex flex-col text-right max-sm:text-left m-4 max-md:m-2 max-sm:m-2">
                    <p className="text-4xl font-bold font-mono max-sm:text-2xl max-md:text-3xl max-lg:text-4xl">70+</p>
                    <p className="text-x tracking-wider font-mono font-light">Field & Professions</p>
                  </div>
                </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Landing;