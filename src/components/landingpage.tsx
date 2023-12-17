import React from "react";
import { Button } from "./ui/button";
export default function LandingPage() {
  return (
    <div className="flex flex-col items-center  text-center">
      <div className="font-barlow flex flex-col items-center space-y-2  pt-24 text-[50px] font-medium max-xl:text-4xl max-lg:text-2xl">
        <div>
          <span className="mr-1 text-[#9EFF00]">Seamlessly</span> Share Videos
          And Shorts
        </div>
        <div>
          With Just One<span className="ml-2 text-[#9EFF00]">CLICK!</span>
        </div>
      </div>
      <div className="border- mt-5 flex h-[80px] w-[470px] items-center space-x-4 rounded-lg border-2 bg-[#242424] px-2 shadow-lg ">
        <p className="ml-4 text-lg font-medium">For</p>
        <Button className="text-white dark:bg-red-500">Youtube</Button>
        <Button className="text-white dark:bg-blue-500">Twitter</Button>
        <Button className="text-white dark:bg-purple-500">Instagram</Button>
        <p className="text-lg font-medium">and etc!</p>
      </div>
      <div className="mt-10 flex space-x-5">
        <Button variant="secondary">Our Works</Button>
        <Button className="bg-[#9EFF00] transition duration-300 hover:bg-white hover:text-black">
          Get Started
        </Button>
      </div>
      <div className="ocean">
        <div className="wave green-1"></div>
        <div className="wave white"></div>
        <div className="wave green-2"></div>
      </div>
    </div>
  );
}
