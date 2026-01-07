"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", icon: "/icons/Frame.svg", path: "/admin/dashboard" },
    { name: "Sellers", icon: "/icons/users.svg", path: "/admin/sellers" },
    { name: "Items", icon: "/icons/item.svg", path: "/admin/items" },
    { name: "Users", icon: "/icons/users.svg", path: "/admin/users" },
    { name: "Winners&Fulfillment", icon: "/icons/winner.svg", path: "/admin/winners" },
    { name: "Weekly Giveaway", icon: "/icons/weekly.svg", path: "/admin/weekly-giveaway" },
    { name: "Disputes", icon: "/icons/disputes.svg", path: "/admin/disputes" },
    { name: "Revenue Overview", icon: "/icons/revenue.svg", path: "/admin/revenue-overview" },
    { name: "Manage Banners", icon: "/icons/gallery.svg", path: "/admin/manage-banners" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 1000);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`
        m-5 p-4 flex flex-col justify-between bg-white rounded-[10px]
        transition-all duration-100
        ${collapsed ? "w-25 min-w-25" : "w-65 min-w-65"}
        overflow-y-auto scrollbar-hide
      `}
    >
      {/* Top */}
      <div>
        <div
          className={`flex items-center justify-between ${
            collapsed ? "flex-col-reverse gap-2 pt-2" : "p-4"
          }`}
        >
          <Image
            src="/authleftlogo.svg"
            width={96}
            height={96}
            alt="Logo"
            className="w-24"
          />

          <button onClick={() => setCollapsed(!collapsed)}>
            <Image src="/icons/collapse.svg" alt="toggle" width={25} height={25} />
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-6 flex flex-col gap-1">
          {menuItems.map((item, idx) => {
            const isActive =
              item.path === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(item.path);

            return (
              <button
                key={idx}
                onClick={() => router.push(item.path)}
                className={`
                  group flex items-center rounded-md transition-all
                  ${collapsed ? "justify-center py-4" : "gap-3 p-4"}
                  ${
                    isActive
                      ? "bg-[#F2482D] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      : "hover:bg-[#F2482D]"
                  }
                `}
              >
                {/* Icon */}
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={25}
                  height={25}
                  className={`
                    transition-all
                    ${
                      isActive
                        ? "filter brightness-0 invert"
                        : "group-hover:filter group-hover:brightness-0 group-hover:invert"
                    }
                  `}
                />

                {/* Text */}
                {!collapsed && (
                  <span
                    className={`font-medium transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-[#464646] group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom */}
      <button
        className={`
          flex items-center w-full rounded-md transition-colors
          ${collapsed ? "justify-center py-3" : "gap-3 px-4 py-3"}
          hover:bg-[#F2482D] group
        `}
      >
        <Image
          src="/icons/logout.svg"
          alt="logout"
          width={25}
          height={25}
          className="group-hover:filter group-hover:brightness-0 group-hover:invert"
        />
        {!collapsed && (
          <span className="text-[#464646] group-hover:text-white">Logout</span>
        )}
      </button>
    </div>
  );
}
