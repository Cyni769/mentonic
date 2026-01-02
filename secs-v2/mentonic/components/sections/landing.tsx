'use client';

import React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

const Landing = () => {
  return (
    <>
    <div className="top-0 flex flex-col items-center m-4 justify-center bg-background text-primary">
    <div className="w-full justify-center bg-background dark:bg-foreground">
      <nav className="flex items-center h-16 justify-center p-6 border-primary border gap-x-22">
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
        <div className="flex flex-col w-auto border-primary border-t-0 border p-6 items-start">
          <Link href="/"><h1 className="text-8xl justify-center uppercase tracking-tight">Mevlint</h1></Link>
          <p className="text-xl w-full text-right">Collaborate with creators and make dream come true</p>
        </div>
        <div className="flex flex-col w-auto border-primary border-t-0 border p-6 items-start">
          <div className=""></div>
        </div>
    </div>
    </div>
    </>
  );
};

export default Landing;