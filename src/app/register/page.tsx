import React from "react";
import { SignInForm } from "@/components/signin-form";

export default function RegisterPage() {
  return (
    <div>
      {/* DONT TOUCH */}
      <div id="bg-grid">
        <div id="blur-grid"></div>
      </div>
      {/* TILL HERE */}
      <div className="grid min-h-[85svh] place-content-center">
        <SignInForm />
      </div>
    </div>
  );
}
