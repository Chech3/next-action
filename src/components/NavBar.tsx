import React from "react";
import { ModeToggle } from "@/components/theme-toggle-button";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
const NavBar = () => {
  return (
    <nav className="flex justify-between py-5">
      <h1 className="text-3xl font-bold">Next action</h1>

      <div className="flex gap-x-2 items-center">
        <Link href="/new" className={buttonVariants({ variant: "secondary" })}>
          Add Task
        </Link>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
};

export default NavBar;
