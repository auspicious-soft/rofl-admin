"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"; // ✅ import for routing


export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  // const {setUser} = useAuth()
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", icon: "/icons/Frame.svg", path: "/admin/dashboard" },
    { name: "Sellers", icon: "/icons/users.svg", path: "/admin/sellers" },
    { name: "Items", icon: "/icons/item.svg", path: "/admin/items" },
    {
      name: "Users",
      icon: "/icons/users.svg",
      path: "/admin/users",
    },
    {
      name: "Winners&Fulfillment",
      icon: "/icons/winner.svg",
      path: "/admin/winners",
    },
    {
      name: "Weekly Giveaway",
      icon: "/icons/weekly.svg",
      path: "/admin/weekly-giveaway",
    },
    {
      name: "Disputes",
      icon: "/icons/disputes.svg",
      path: "/admin/disputes",
    },
    {
      name: "Revenue Overview",
      icon: "/icons/revenue.svg",
      path: "/admin/revenue-overview",
    },
    {
      name: "Manage Banners",
      icon: "/icons/gallery.svg",
      path: "/admin/manage-banners",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={`
    m-5 p-4 flex flex-col justify-between bg-[#FFFFFF] rounded-[10px] text-white transition-all duration-100
    ${collapsed ? "w-25 min-w-25 pt-0" : "min-w-65  w-65 pt-0"}
    overflow-y-auto scrollbar-hide
  `}
    >
      {/* Top Section */}
      <div>
        <div
          className={`
            flex items-center justify-between
            ${collapsed ? "flex-col-reverse gap-2 pt-2" : "flex-row p-4"}
          `}
        >
          {/* Logo */}
          <Image
            src={"/authleftlogo.svg"}
            width={25}
            height={25}
            alt="Logo"
            className={`
              transition-all duration-300
              ${collapsed ? "w-24 h-24" : "w-24"}
            `}
          />

          {/* Toggle button */}
          <button onClick={() => setCollapsed(!collapsed)}>
            <Image
              src="/icons/collapse.svg"
              alt="icons"
              height={25}
              width={25}
              className="cursor-pointer"
            />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="mt-6 flex flex-col gap-1">
          {menuItems.map((item, idx) => {
            const isActive =
              item.path === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.path);
            return (
              <button
                key={idx}
                onClick={() => router.push(item.path)} // ✅ navigation
                className={`
                  flex items-center rounded-md transition-colors
                  ${collapsed ? "gap-0 justify-center py-4" : "gap-3 p-4"}
                  ${isActive ? "bg-[#F2482D] text-white" : "hover:bg-[#F2482D]"}
                `}
              >
                <span className="flex-shrink-0">
                  <Image src={item.icon} alt="icons" width={25} height={25} />
                </span>
                {!collapsed && (
                  <span className="text-[#464646] font-medium">
                    {item.name}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div>
        <button
          // onClick={()=> {localStorage.clear(); setUser(null)}}
          className={`
            flex items-center px-4 py-3 w-full rounded-md transition-colors
            ${collapsed ? "gap-0 justify-center" : "gap-3"}
            hover:bg-[#F2482D]
          `}
        >
          <Image src="/icons/logout.svg" alt="icons" height={25} width={25} />
          {!collapsed && <span className="text-[#464646]">Logout</span>}
        </button>
      </div>
    </div>
  );
}
