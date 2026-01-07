"use client";
import React, { useState } from "react";
import DynamicTable from "@/app/utils/DynamicTable";
import { useRouter } from "next/navigation";
import {OpenEye } from "@/app/utils/icons";

// Example Page Component - Sellers Management
const ItemsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Sample data for sellers
  const sellersData = [
  {
    srNo: 1,
    nameOfUser: "John Doe",
    email: "john.doe@example.com",
    ticketsPurchased: 120,
  },
  {
    srNo: 2,
    nameOfUser: "Marco Smith",
    email: "marco.smith@example.com",
    ticketsPurchased: 200,
  },
  {
    srNo: 3,
    nameOfUser: "Alex Johnson",
    email: "alex.johnson@example.com",
    ticketsPurchased: 95,
  },
  {
    srNo: 4,
    nameOfUser: "Emily Carter",
    email: "emily.carter@example.com",
    ticketsPurchased: 150,
  },
  {
    srNo: 5,
    nameOfUser: "Emily Carter",
    email: "emily.carter@example.com",
    ticketsPurchased: 150,
  },
  {
    srNo: 6,
    nameOfUser: "Emily Carter",
    email: "emily.carter@example.com",
    ticketsPurchased: 150,
  },
  {
    srNo: 7,
    nameOfUser: "Emily Carter",
    email: "emily.carter@example.com",
    ticketsPurchased: 150,
  },
  {
    srNo: 8,
    nameOfUser: "Emily Carter",
    email: "emily.carter@example.com",
    ticketsPurchased: 150,
  },
  {
    srNo: 9,
    nameOfUser: "Emily Carter",
    email: "emily.carter@example.com",
    ticketsPurchased: 150,
  },
  {
    srNo: 10,
    nameOfUser: "Emily Carter",
    email: "emily.carter@example.com",
    ticketsPurchased: 150,
  },
  {
    srNo: 11,
    nameOfUser: "Emily Carter",
    email: "emily.carter@example.com",
    ticketsPurchased: 150,
  },
];


  const columns = [
    { key: "srNo", label: "Sr No." },
    { key: "nameOfUser", label: "Name of User" },
    { key: "email", label: "Email Address" },
    { key: "ticketsPurchased", label: "Tickets Purchased" },
  ];

  // Filter data based on search
  const filteredData = sellersData.filter(
    (item) =>
      item.nameOfUser.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeActions = [
    {
      key: "view",
      icon: <OpenEye />,
      variant: "icon",
      onClick: () => router.push("/admin/sellers/45"),
      className: "bg-[#497BC6] text-white hover:bg-[#3a6bb0]",
    },
  ];

  return (
    <div className="min-h-screen py-6">
      <div className="mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap mb-2 justify-between">
          <div className="flex flex-wrap text-2xl font-normal magison [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] text-[#F2482D] mb-6">
            Entries Purchased This Week
          </div>

          {/* Search Bar */}
          <div className="flex gap-2 flex-wrap">
            <div className="bg-none">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 h-12 py-2 border border-gray-300 bg-[#FFFFFF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2482D] focus:border-transparent"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <button
              onClick={() => router.push("/admin/items/host-item")}
              className="px-5 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] bg-[#272727] cursor-pointer rounded-[10px] h-12"
            >
              Export CSV
            </button>
          </div>
        </div>

        <DynamicTable
          columns={columns}
          data={filteredData}
          rowActions={activeActions}
          pagination={{ enabled: true, itemsPerPage: 10 }}
        />
      </div>
    </div>
  );
};

export default ItemsPage;
