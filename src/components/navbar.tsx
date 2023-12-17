import React from "react";
import { ThemeToggle } from "./theme-toggle";
import Lolgo from "./lolgo.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-evenly px-2 py-5 shadow-xl dark:bg-zinc-950">
      <div className="flex items-center space-x-2 dark:text-white max-lg:hidden">
        <Image
          src={Lolgo}
          width={50}
          height={30}
          alt="logo"
          className="rounded"
        />
        <h1 className="font-medium">SMM</h1>
      </div>
      <div className="flex items-center space-x-8 max-lg:space-x-1">
        <Link
          href="#"
          className="rounded px-4 py-2 font-medium transition duration-200 hover:bg-white hover:text-[#9EFF00]"
        >
          Home
        </Link>
        <Link
          href="#"
          className="rounded px-4 py-2 font-medium transition duration-200 hover:bg-white hover:text-[#9EFF00]"
        >
          Work
        </Link>
        <Link
          href="#"
          className="rounded px-4 py-2 font-medium transition duration-200 hover:bg-white hover:text-[#9EFF00]"
        >
          Services
        </Link>
        <Link
          href="#"
          className="rounded px-4 py-2 font-medium transition duration-200 hover:bg-white hover:text-[#9EFF00]"
        >
          Career
        </Link>
      </div>
      <div className="flex space-x-4 max-lg:hidden">
        <Button className="transition duration-75 dark:bg-[#9EFF00]">
          Contact Us
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
}
