import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { navLinks } from "@/siteConfig";

export default function Navbar() {
  return (
    <div className="flex items-center justify-evenly bg-zinc-950/40 px-2 py-5 shadow-xl backdrop-blur-lg">
      <div className="flex items-center space-x-2 dark:text-white max-lg:hidden">
        <Image
          src="/lolgo.png"
          width={50}
          height={30}
          alt="logo"
          className="rounded"
        />
        <h1 className="font-medium">SMM</h1>
      </div>
      <div className="flex items-center space-x-8 max-lg:space-x-1">
        {navLinks.map((item) => (
          <Link
            key={item.path}
            href="#"
            className="rounded px-4 py-1 font-medium transition duration-200 hover:bg-gray-700/30 hover:text-[#9EFF00]"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex space-x-4 max-lg:hidden">
        <Button className="transition duration-75 dark:bg-[#9EFF00]">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
