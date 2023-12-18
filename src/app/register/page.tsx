import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React from "react";

export default function RegisterPage() {
  return (
    <div>
      {/* DONT TOUCH */}
      <div id="bg-grid">
        <div id="blur-grid"></div>
      </div>
      {/* TILL HERE */}
      <div className="flex flex-col items-center xl:flex-row">
        <div className="hidden h-[91vh] bg-primary xl:ml-[500px] xl:block xl:w-[1.5px]"></div>
        <div className="p-10 xl:ml-60 xl:p-12">
          <h1 className="text-3xl font-medium sm:mt-10">Set Up Your Account</h1>
          <p className="mt-2 text-gray-500">
            Some Random Paragraph to convince people
          </p>
          <div className="mt-5 flex flex-col gap-5 xl:mt-10">
            <Input placeholder="FirstName..." />
            <Input placeholder="LastName..." />
            <Input placeholder="Email..." />
            <Input type="password" placeholder="Password..." />
            <Input type="password" placeholder="Confirm Password..." />
            <div className="items-top flex space-x-2">
              <Checkbox id="terms1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
                <p className="text-sm text-muted-foreground">
                  You agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
            <div className="h-[1.5px] bg-primary"></div>
            <Button className="bg-primary hover:bg-lime-400">Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
