"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function SideBar({
  open,
  onClose,
}: {
  open?: boolean;
  onClose?: () => void;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", icon: "/icons/Frame.svg", path: "/seller/dashboard" },
    { name: "Items", icon: "/icons/item.svg", path: "/seller/items" },
    { name: "Orders & Shipping", icon: "/icons/weekly.svg", path: "/seller/orders" },
    { name: "Payouts", icon: "/icons/revenue.svg", path: "/seller/payouts" },
    {
      name: "Disputes",
      icon: "/icons/disputes.svg",
      path: "/seller/disputes",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth <= 1000);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarInner = (isMobile?: boolean) => (
    <div
      className={`m-5 flex flex-col justify-between bg-white rounded-[10px] transition-all duration-100 h-full ${
        isMobile
          ? "w-65 min-w-65"
          : collapsed
          ? "w-25 min-w-25"
          : "w-65 min-w-65"
      }`}
    >
      {/* Header */}
      <div className="p-4 shrink-0">
        <div
          className={`flex items-center justify-between ${
            isMobile ? "p-4" : collapsed ? "flex-col-reverse gap-2 pt-2" : "p-4"
          }`}
        >
          <Image
            src="/authleftlogo.svg"
            width={96}
            height={96}
            alt="Logo"
            className="w-24"
          />

          <button
            onClick={() => {
              setCollapsed(!collapsed);
              if (isMobile) onClose?.();
            }}
          >
            <Image
              src="/icons/collapse.svg"
              alt="toggle"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>

      {/* Scrollable Menu */}
      <nav className="mt-6 px-4 flex flex-col gap-1 overflow-y-auto scrollbar-hide flex-1">
        {menuItems.map((item, idx) => {
          const isActive =
            item.path === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.path);

          return (
            <button
              key={idx}
              onClick={() => {
                router.push(item.path);
                if (isMobile) onClose?.();
              }}
              className={`group flex items-center rounded-md transition-all ${
                isMobile
                  ? "gap-3 p-4"
                  : collapsed
                  ? "justify-center py-4"
                  : "gap-3 p-4"
              } ${
                isActive
                  ? "bg-[#F2482D] text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  : "hover:bg-[#F2482D]"
              }`}
            >
              {/* Icon */}
              <Image
                src={item.icon}
                alt={item.name}
                width={25}
                height={25}
                className={`transition-all ${
                  isActive
                    ? "filter brightness-0 invert"
                    : "group-hover:filter group-hover:brightness-0 group-hover:invert"
                }`}
              />

              {/* Text */}
              {isMobile || !collapsed ? (
                <span
                  className={`font-medium transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-[#464646] group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
              ) : null}
            </button>
          );
        })}
      </nav>

      {/* Bottom - Logout */}
      <div className="p-4 shrink-0 border-t border-gray-200">
        <button
          className={`flex items-center w-full rounded-md transition-colors ${
            isMobile
              ? "gap-3 px-4 py-3"
              : collapsed
              ? "justify-center py-3"
              : "gap-3 px-4 py-3"
          } hover:bg-[#F2482D] group`}
        >
          <Image
            src="/icons/logout.svg"
            alt="logout"
            width={25}
            height={25}
            className="group-hover:filter group-hover:brightness-0 group-hover:invert"
          />
          {isMobile || !collapsed ? (
            <span className="text-[#464646] group-hover:text-white">
              Logout
            </span>
          ) : null}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:block">{sidebarInner()}</div>

      {/* Mobile overlay sidebar */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          onClick={() => onClose?.()}
          className={`absolute inset-0 bg-black/30 transition-opacity cursor-pointer ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sliding panel */}
        <div
          className={`absolute inset-y-0 left-0 transform transition-transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full">{sidebarInner(true)}</div>
        </div>
      </div>
    </>
  );
}
