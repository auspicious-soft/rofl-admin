"use client";

import Image from "next/image";
import { Bell, ChevronDown, LogOut, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname,useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const PAGE_TITLES: Record<string, string> = {
  "/sellers": "Sellers",
  "/buyers": "Buyers",
  "/dashboard": "Dashboard",
  "/orders": "Orders",
  "/profile": "Profile",
};


const pageTitle =
  PAGE_TITLES[pathname] ??
  pathname
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());


  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  return (
    <header className="w-full h-11 mt-7 flex items-center justify-between pr-6 py-3">
      
      {/* Left: Page Title */}
      <h1 className="text-4xl [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] font-normal magison text-[#F2482D]">
        {pageTitle}
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Notification */}
        <button className="p-4 rounded-2xl bg-white hover:bg-[#F2482D]/10 transition">
          <div className="relative">
            <Bell size={22} className="text-[#464646]" />
            <span className="absolute top-0.5 right-1 h-2 w-2 rounded-full bg-[#F2482D]" />
          </div>
        </button>

        {/* Profile Dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-2 w-44 rounded-2xl p-2 bg-white cursor-pointer hover:bg-gray-50"
          >
            <Image
              src="/icons/Avatar.svg"
              alt="User Avatar"
              width={32}
              height={32}
              className="rounded-full h-11"
            />

            <div className="text-sm leading-tight flex-1">
              <p className="font-medium text-black">Anita Arora</p>
              <p className="text-xs text-[#6B6B6B]">Admin</p>
            </div>

            <ChevronDown
              size={16}
              color="black"
              className={`transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white shadow-lg border z-50">
              
              <button
                onClick={() => {
                  setOpen(false);
                  router.push("/profile");
                }}
                className="w-full px-4 py-2 flex items-center gap-2 text-black text-sm hover:bg-gray-100"
              >
                <User size={16} />
                Profile
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  router.push("/logout");
                }}
                className="w-full px-4 py-2 flex items-center gap-2 text-sm text-red-600 hover:bg-red-50"
              >
                <LogOut size={16} />
                Logout
              </button>

            </div>
          )}
        </div>

      </div>
    </header>
  );
}
