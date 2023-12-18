import { Button } from "@/components/ui/button";
import { Barlow } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const barlow = Barlow({ subsets: ["latin"], weight: ["600", "700", "500"] });

export default function Home() {
  return (
    <div>
      <div id="bg-grid">
        <div id="blur-grid"></div>
      </div>
      <div>
        <div className="flex flex-col items-center text-center">
          <div
            className={cn(
              barlow.className,
              "flex flex-col items-center space-y-2 pt-24 text-2xl font-semibold md:text-4xl 2xl:text-[50px]",
            )}
          >
            <div>
              <span className="mr-1 text-primary">Seamlessly</span> Share Videos
              And Shorts
            </div>
            <div>
              With Just One<span className="ml-2 text-primary">CLICK!</span>
            </div>
          </div>
          <div className="mt-5 flex max-w-[470px] scale-90 items-center gap-4 rounded-lg border-2 bg-[#242424] p-5 shadow-lg md:scale-100 lg:mt-10">
            <p className="ml-2 text-lg font-medium">For</p>
            <Button
              size="sm"
              className="bg-red-500 text-white hover:bg-red-500/70"
            >
              Youtube
            </Button>
            <Button
              size="sm"
              className="bg-blue-500 text-white hover:bg-blue-500/70"
            >
              Twitter
            </Button>
            <Button
              size="sm"
              className="bg-purple-500 text-white hover:bg-purple-500/70"
            >
              Instagram
            </Button>
            <p className="hidden text-lg font-medium sm:block">and etc!</p>
          </div>
          <div className="mt-10 flex space-x-5">
            <Button variant="secondary">Our Works</Button>
            <Link href="/register">
              <Button className="bg-primary hover:bg-lime-500 hover:text-black">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
