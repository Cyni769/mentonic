'use client';

import React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

const Landing = () => {
  return (
    <>
    <div className="top-0 m-4 justify-center w-auto bg-background dark:bg-foreground">
      <nav className="flex items-center h-16 justify-center p-6 border-primary border gap-x-22">
        <Link href="/About" className="text-xs1 text-mono text-foreground hover:text-primary dark:hover:bg-primary px-3 py-1 transition">
           About
        </Link>
        <Link href="/Explore" className="text-xs1 text-mono text-foreground ">
           Explore
        </Link>
        <Link href="/Partners" className="text-xs1 text-mono text-foreground">
           Partners
        </Link>
        <Link href="/FQA" className="text-xs1 text-mono text-foreground">
           FQA
        </Link>
        </nav>
    </div>
    </>
  );
};

export default Landing;