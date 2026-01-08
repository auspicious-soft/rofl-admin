"use client";
import DynamicTable from "@/app/utils/DynamicTable";
import { OpenEye } from "@/app/utils/icons";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const RevenueOverview = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data for disputes
const revenueData = [
    {
      date: "January 24, 2025",
      item: "Item #12345",
      desiredNet: "$2,700",
      sellerNet: "$2,700",
      payoutStatus: "Refunded",
    },
    {
      date: "January 24, 2025",
      item: "Item #12345",
      desiredNet: "$2,700",
      sellerNet: "$2,700",
      payoutStatus: "Pending",
    },
    {
      date: "January 24, 2025",
      item: "Item #12345",
      desiredNet: "$2,700",
      sellerNet: "$2,700",
      payoutStatus: "Refunded",
    },
    {
      date: "January 24, 2025",
      item: "Item #12345",
      desiredNet: "$2,700",
      sellerNet: "$2,700",
      payoutStatus: "Refunded",
    },
    {
      date: "January 24, 2025",
      item: "Item #12345",
      desiredNet: "$2,700",
      sellerNet: "$2,700",
      payoutStatus: "Pending",
    },
    {
      date: "January 24, 2025",
      item: "Item #12345",
      desiredNet: "$2,700",
      sellerNet: "$2,700",
      payoutStatus: "Refunded",
    },
    {
      date: "January 24, 2025",
      item: "Item #12345",
      desiredNet: "$2,700",
      sellerNet: "$2,700",
      payoutStatus: "Pending",
    },
    {
      date: "January 24, 2025",
      item: "Item #7890",
      desiredNet: "$4,050",
      sellerNet: "$4,050",
      payoutStatus: "Completed",
    },
    {
      date: "January 24, 2025",
      item: "Item #45678",
      desiredNet: "$1,890",
      sellerNet: "$1,890",
      payoutStatus: "Pending",
    },
    {
      date: "January 24, 2025",
      item: "Item #67890",
      desiredNet: "$3,420",
      sellerNet: "$3,420",
      payoutStatus: "Completed",
    },
    {
      date: "January 24, 2025",
      item: "Item #33445",
      desiredNet: "$1,350",
      sellerNet: "$1,350",
      payoutStatus: "Refunded",
    },
  ];
const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      Pending: "bg-[#AFAFAF] text-[#FFFFFF]",
      Completed: "bg-[#4FA662] text-[#FFFFFF]",
      Failed: "bg-[#FDECEA] text-[#FFFFFF]",
      Refunded: "bg-[#4F85A6] text-[#FFFFFF]",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          styles[status] ?? "bg-gray-100 text-gray-700"
        }`}
      >
        {status}
      </span>
    );
  };
  const columns = [
    { key: "date", label: "Date" },
    { key: "item", label: "Item" },
    { key: "desiredNet", label: "Desired Net" },
    { key: "sellerNet", label: "Seller Net" },
    {
      key: "payoutStatus",
      label: "Payout Status",
      render: (value: string) => getStatusBadge(value),
    }
  ];

  // Filter data based on search
  const filteredData = revenueData.filter(
    (row) =>
      row.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.payoutStatus.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-2">
      <div className="flex flex-wrap justify-between gap-2 items-center mb-4">
        <h1 className="text-2xl text-[#F2482D] font-normal magison leading-8 [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)]">
          Key Stats
        </h1>
        <div className="relative inline-block">
          <select className="appearance-none border border-[#b3b1b1] px-4 py-1.5 pr-10 rounded-[99px] text-sm focus:outline-none bg-white">
            <option value="7">Last 7 Days</option>
            <option value="14">Last 14 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="90">Last 3 Months</option>
            <option value="180">Last 6 Months</option>
            <option value="365">Last 1 Year</option>
            <option value="custom">Custom Range</option>
          </select>

          {/* Dropdown Icon */}
          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-xl border border-[#E9E9E9] p-5">
          <p className="text-sm font-medium magison text-[#2A2A2A]">
           Pending Payout
          </p>
          <p className="mt-3 text-base font-semibold text-[#F2482D]">$184,320</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl border border-[#E9E9E9] p-5">
          <p className="text-sm font-medium magison text-[#2A2A2A]">
         Released (Last 30 Days)
          </p>
          <p className="mt-3 text-base font-medium text-[#F2482D]">
           $184,320
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl border border-[#E9E9E9] p-5">
          <p className="text-sm font-medium magison text-[#2A2A2A]">
           Lifetime Earnings
          </p>
          <p className="mt-3 text-base font-semibold text-[#F2482D]">$184,320</p>
        </div>

      </div>

      <div className="mx-auto mt-7">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-between mb-4">
          <div className="hidden md:flex  flex-wrap gap-2 mb-6">
          </div>

          {/* Search Bar */}
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
        </div>


          <DynamicTable
            columns={columns}
            data={filteredData}

            pagination={{ enabled: true, itemsPerPage: 10 }}
          />
       
      </div>
    </div>
  );
};

export default RevenueOverview;
