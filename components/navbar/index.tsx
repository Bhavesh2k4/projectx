import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "../theme-switcher";
const Navbar = () => {
    return (
        <nav className="pt-2 sticky z-10 items-center justify-center flex bg-base">
        <div className="navbar bg-base/90 backdrop-blur h-8 w-7/12 rounded-2xl items-center flex shadow-lg shadow-base-300  border-base-100 border-opacity-40 border-b-2">
          <div className="flex navbar-start pl-8">
            <Link href="/" className="btn btn-ghost h-8">
              <div className="flex items-center">
                <h1 className="text-xl font-bold text-base-content">Git</h1>
                <h1 className="text-xl font-bold text-purple-600">Hired</h1>
              </div>
            </Link>
          </div>
          <div className="flex navbar-end items-center gap-2 pr-9">
            <ThemeSwitcher />
            <Link href="/sign-in">
              <button className="btn btn-neutral rounded-2xl">
                SignIn
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="btn btn-outline rounded-2xl">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </nav>
  );
};

export default Navbar