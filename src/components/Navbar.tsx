"use client";
import Link from "next/link";
import React from "react";
import { LiaUserAltSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-100 h-[100px] w-full py-4 px-4 flex justify-between items-center md:px-10">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/logo1.png" alt="logo" className="w-[50px] h-[32px]" />
          <h1 className="text-2xl font-bold">
            <a href="#!">Furniro</a>
          </h1>
        </div>

        {/* Links Section (Hidden on small screens) */}
        <div className="hidden md:flex">
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="flex space-x-4 text-xl">
          <LiaUserAltSolid className="cursor-pointer" />
          <CiSearch className="cursor-pointer" />
          <CiHeart className="cursor-pointer" />
          <IoCartOutline className="cursor-pointer" />
        </div>
      </nav>

      {/* Mobile Links Section */}
      <div className="bg-slate-100 flex md:hidden flex-col items-center space-y-2 p-4 text-sm font-medium">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
