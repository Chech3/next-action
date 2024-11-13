import React from "react";
import { ModeToggle } from "@/components/theme-toggle-button";
import Link from 'next/link'
import { buttonVariants } from "./ui/button";
const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <h1>Next action</h1>

      <div className="flex gap-x-2 items-center">
        <Link href="/new" className={buttonVariants({variant: "secondary"})}>
        Add Task
        </Link>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
};

export default NavBar;
