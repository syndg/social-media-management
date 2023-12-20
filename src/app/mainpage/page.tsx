import { Button } from "@/components/ui/button";
import {
  IoAddOutline,
  IoBarChartOutline,
  IoDesktopOutline,
  IoExitOutline,
  IoMailUnreadOutline,
} from "react-icons/io5";

export default function SideBar() {
  return (
    <div>
      {/* DONT TOUCH */}
      <div id="bg-grid">
        <div id="blur-grid"></div>
      </div>
      {/* TILL HERE */}
      <div className="flex ">
        <div className="flex h-[91vh] w-[23vh] flex-col items-center border-r-4 border-r-primary bg-black/20  text-black">
          <div className="mt-5 flex cursor-pointer items-center space-x-2 text-white hover:text-primary">
            <IoDesktopOutline />
            <h1 className="text-lg font-medium">Dashboard</h1>
          </div>
          <div className="mt-5 flex cursor-pointer items-center space-x-2 text-white hover:text-primary">
            <IoAddOutline />
            <h1 className="text-lg font-medium">Create</h1>
          </div>
          <div className="mt-5 flex cursor-pointer items-center space-x-2 text-white hover:text-primary">
            <IoBarChartOutline />
            <h1 className="text-lg font-medium">Analyse</h1>
          </div>
          <div className="mt-5 flex cursor-pointer items-center space-x-2 text-white hover:text-primary">
            <IoMailUnreadOutline />
            <h1 className="text-lg font-medium">Schedule</h1>
          </div>
          <div className="mb-5 mt-auto space-y-5 text-center">
            <Button className="bg-blue-500 align-bottom text-base font-medium hover:bg-primary hover:text-black">
              Connect
            </Button>
            <h1 className=" align-bottom text-base font-medium text-white">
              Help
            </h1>
            <Button className="bg-red-700 align-bottom text-lg font-medium hover:bg-red-900">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
