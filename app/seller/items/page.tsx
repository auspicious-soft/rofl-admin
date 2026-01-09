"use client";
import React, { useState } from "react";
import DynamicTable from "@/app/utils/DynamicTable";
import { useRouter } from "next/navigation";
import {  OpenEye } from "@/app/utils/icons";

// Example Page Component - Sellers Management
const ItemsPage = () => {
  const [activeTab, setActiveTab] = useState<"live" | "allItems" | "pending" | "completed" | "soldOut" | "expired">(
    "allItems"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  // Sample data for sellers
  const sellersData = [
  {
    itemId: "ITEM-12345",
    itemName: "Vintage Watch",
    sellerName: "John Doe",
    fmv: "$2,500",
    ticketPrice: "$25",
    slotsFilled: "120 / 200",
    timeLeft: "7 days",
    status: "Live",
  },
  {
    itemId: "ITEM-7890",
    itemName: "Luxury Handbag",
    sellerName: "Marco Smith",
    fmv: "$3,200",
    ticketPrice: "$30",
    slotsFilled: "200 / 200",
    timeLeft: "Ended",
    status: "Sold Out",
  },
  {
    itemId: "ITEM-4567",
    itemName: "Gaming Console",
    sellerName: "Alex Johnson",
    fmv: "$1,800",
    ticketPrice: "$18",
    slotsFilled: "95 / 150",
    timeLeft: "14 days",
    status: "Pending",
  },
  {
    itemId: "ITEM-6789",
    itemName: "Smartphone Pro",
    sellerName: "Emily Carter",
    fmv: "$2,100",
    ticketPrice: "$21",
    slotsFilled: "150 / 150",
    timeLeft: "Completed",
    status: "Completed",
  },
  {
    itemId: "ITEM-6789",
    itemName: "Smartphone Pro",
    sellerName: "Emily Carter",
    fmv: "$2,100",
    ticketPrice: "$21",
    slotsFilled: "150 / 150",
    timeLeft: "Completed",
    status: "Expired",
  },
  {
    itemId: "ITEM-6789",
    itemName: "Smartphone Pro",
    sellerName: "Emily Carter",
    fmv: "$2,100",
    ticketPrice: "$21",
    slotsFilled: "150 / 150",
    timeLeft: "Completed",
    status: "Expired",
  },
  {
    itemId: "ITEM-6789",
    itemName: "Smartphone Pro",
    sellerName: "Emily Carter",
    fmv: "$2,100",
    ticketPrice: "$21",
    slotsFilled: "150 / 150",
    timeLeft: "Completed",
    status: "Expired",
  },
  {
    itemId: "ITEM-6789",
    itemName: "Smartphone Pro",
    sellerName: "Emily Carter",
    fmv: "$2,100",
    ticketPrice: "$21",
    slotsFilled: "150 / 150",
    timeLeft: "Completed",
    status: "Expired",
  },
  {
    itemId: "ITEM-6789",
    itemName: "Smartphone Pro",
    sellerName: "Emily Carter",
    fmv: "$2,100",
    ticketPrice: "$21",
    slotsFilled: "150 / 150",
    timeLeft: "Completed",
    status: "Expired",
  },
  {
    itemId: "ITEM-6789",
    itemName: "Smartphone Pro",
    sellerName: "Emily Carter",
    fmv: "$2,100",
    ticketPrice: "$21",
    slotsFilled: "150 / 150",
    timeLeft: "Completed",
    status: "Expired",
  },
  {
    itemId: "ITEM-6789",
    itemName: "Smartphone Pro",
    sellerName: "Emily Carter",
    fmv: "$2,100",
    ticketPrice: "$21",
    slotsFilled: "150 / 150",
    timeLeft: "Completed",
    status: "Expired",
  },
  {
    itemId: "ITEM-6789",
    itemName: "Smartphone Pro",
    sellerName: "Emily Carter",
    fmv: "$2,100",
    ticketPrice: "$21",
    slotsFilled: "150 / 150",
    timeLeft: "Completed",
    status: "Expired",
  },
  {
    itemId: "ITEM-6789",
    itemName: "Smartphone Pro",
    sellerName: "Emily Carter",
    fmv: "$2,100",
    ticketPrice: "$21",
    slotsFilled: "150 / 150",
    timeLeft: "Completed",
    status: "Expired",
  },
];
 const getStatusBadge = (status: string) => {
    const statusColors: Record<string, string> = {
      Pending: "bg-yellow-100 text-yellow-700",
      Live: "bg-blue-100 text-blue-700",
      "Sold Out": "bg-cyan-100 text-cyan-700",
      Completed: "bg-green-100 text-green-700",
      Expired: "bg-red-100 text-red-700",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          statusColors[status] || "bg-gray-100 text-gray-700"
        }`}
      >
        {status}
      </span>
    );
  };
  const columns = [
    { key: "itemId", label: "Item ID" },
    { key: "itemName", label: "Item Name" },
    { key: "sellerName", label: "Seller Name" },
    { key: "fmv", label: "FMV" },
    { key: "ticketPrice", label: "Ticket Price" },
    { key: "slotsFilled", label: "Slots Filled" },
    { key: "timeLeft", label: "Time Left" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => getStatusBadge(value),
    },
  ];

  // Filter data based on search
 const filteredData = sellersData.filter(
  (item) =>
    item.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.sellerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.itemId.toLowerCase().includes(searchQuery.toLowerCase())
);

  const activeActions = [
    {
      key: "view",
      icon: <OpenEye />,
      variant: "icon",
      onClick: () => router.push("/seller/items/45"),
      className: "bg-[#497BC6] text-white hover:bg-[#3a6bb0]",
    },
  ];



  return (
    <div className="min-h-screen py-6">
      <div className="mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap mb-2 justify-between">
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveTab("allItems")}
              className={`px-5 bg-White border border-black cursor-pointer rounded-[10px] h-12 ${
                activeTab === "allItems"
                  ? "shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]"
                  : "shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
              } transition-colors ${
                activeTab === "allItems"
                  ? "bg-[#F2482D] text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
             All Items
            </button>
            <button
              onClick={() => setActiveTab("live")}
              className={`px-5 bg-White border border-black cursor-pointer rounded-[10px] h-12 ${
                activeTab === "live"
                  ? "shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]"
                  : "shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
              } transition-colors ${
                activeTab === "live"
                  ? "bg-[#F2482D] text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Live
            </button>
            <button
              onClick={() => setActiveTab("pending")}
              className={`px-5 bg-White border border-black cursor-pointer rounded-[10px] h-12 ${
                activeTab === "pending"
                  ? "shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]"
                  : "shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
              } transition-colors ${
                activeTab === "pending"
                  ? "bg-[#F2482D] text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-5 bg-White border border-black cursor-pointer rounded-[10px] h-12 ${
                activeTab === "completed"
                  ? "shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]"
                  : "shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
              } transition-colors ${
                activeTab === "completed"
                  ? "bg-[#F2482D] text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveTab("soldOut")}
              className={`px-5 bg-White border border-black cursor-pointer rounded-[10px] h-12 ${
                activeTab === "soldOut"
                  ? "shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]"
                  : "shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
              } transition-colors ${
                activeTab === "soldOut"
                  ? "bg-[#F2482D] text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Sold Out
            </button>
            <button
              onClick={() => setActiveTab("expired")}
              className={`px-5 bg-White border border-black cursor-pointer rounded-[10px] h-12 ${
                activeTab === "expired"
                  ? "shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)]"
                  : "shadow-[2px_2px_0px_0px_rgba(153,153,153,1.00)]"
              } transition-colors ${
                activeTab === "expired"
                  ? "bg-[#F2482D] text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Expired
            </button>
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
            onClick={()=> router.push("/seller/items/host-item")}
             className="px-5 text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1.00)] bg-[#272727] cursor-pointer rounded-[10px] h-12">
              Host Item
            </button>
          </div>
        </div>

        {activeTab === "allItems" && (
          <DynamicTable
            columns={columns}
            data={filteredData}
            rowActions={activeActions}
            pagination={{ enabled: true, itemsPerPage: 10 }}
          />
        )}
        {activeTab === "live" && (
          <DynamicTable
            columns={columns}
            data={filteredData}
            rowActions={activeActions}
            pagination={{ enabled: true, itemsPerPage: 10 }}
          />
        )}
        {activeTab === "pending" && (
          <DynamicTable
            columns={columns}
            data={filteredData}
            rowActions={activeActions}
            pagination={{ enabled: true, itemsPerPage: 10 }}
          />
        )}
        {activeTab === "completed" && (
          <DynamicTable
            columns={columns}
            data={filteredData}
            rowActions={activeActions}
            pagination={{ enabled: true, itemsPerPage: 10 }}
          />
        )}
        {activeTab === "soldOut" && (
          <DynamicTable
            columns={columns}
            data={filteredData}
            rowActions={activeActions}
            pagination={{ enabled: true, itemsPerPage: 10 }}
          />
        )}
        {activeTab === "expired" && (
          <DynamicTable
            columns={columns}
            data={filteredData}
            rowActions={activeActions}
            pagination={{ enabled: true, itemsPerPage: 10 }}
          />
        )}
      </div>

    </div>
  );
};

export default ItemsPage;