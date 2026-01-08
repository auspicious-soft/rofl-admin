"use client";

import React from "react";
import DynamicTable from "@/app/utils/DynamicTable";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Edit, OpenEye } from "@/app/utils/icons";
import { useRouter } from "next/navigation";

interface TableColumn {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

// Main Dashboard Page
const DashboardPage = () => {
  const router = useRouter();
  // Active Items Data
  const activeItemsData = [
    {
      id: "12345",
      item: "Name of Item",
      startDate: "January 24, 2025",
      timeLine: "7 days",
    },
    {
      id: "07800",
      item: "Name of Item",
      startDate: "March 6, 2025",
      timeLine: "14 days",
    },
    {
      id: "12345",
      item: "Name of Item",
      startDate: "January 24, 2025",
      timeLine: "30-days",
    },
    {
      id: "07800",
      item: "Name of Item",
      startDate: "March 6, 2025",
      timeLine: "7 days",
    },
    {
      id: "12345",
      item: "Name of Item",
      startDate: "January 24, 2025",
      timeLine: "14 days",
    },
    {
      id: "07800",
      item: "Name of Item",
      startDate: "March 6, 2025",
      timeLine: "30-days",
    },
  ];

  const activeItemsColumns: TableColumn[] = [
    { key: "id", label: "Sr No." },
    { key: "item", label: "Items" },
    { key: "startDate", label: "Start Date" },
    { key: "timeLine", label: "Time Line" },
  ];


  const data = [
    { month: "01", value: 0 },
    { month: "02", value: 90 },
    { month: "03", value: 150 },
    { month: "04", value: 190 },
    { month: "05", value: 170 },
    { month: "06", value: 200 },
    { month: "07", value: 150 },
    { month: "08", value: 180 },
    { month: "09", value: 120 },
    { month: "10", value: 110 },
    { month: "11", value: 140 },
    { month: "12", value: 135 },
  ];

  const activeActions = [
    {
      key: "view",
      icon: <OpenEye />,
      variant: "icon",
      onClick: () => router.push("/admin/sellers/45"),
      className: "bg-[#497BC6] text-white",
    },
    {
      key: "view",
      icon: <Edit />,
      variant: "icon",
      onClick: () => router.push("/admin/sellers/45"),
      className: "bg-[#4FA662] text-white",
    },
  ];

  return (
    <div className="min-h-screen ">
      <div className=" mx-auto">
        {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Card 1 */}
        <div className="bg-white rounded-xl border border-[#E9E9E9] p-5">
          <p className="text-sm font-medium magison text-[#2A2A2A]">
            Verification
          </p>
          <p className="mt-3 text-base font-semibold text-[#F2482D]">Not Yet Verified</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl border border-[#E9E9E9] p-5">
          <p className="text-sm font-medium magison text-[#2A2A2A]">
            Active Listings
          </p>
          <p className="mt-3 text-base font-semibold text-[#F2482D]">
            Dec 24, 2024
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl border border-[#E9E9E9] p-5">
          <p className="text-sm font-medium magison text-[#2A2A2A]">
            Sold Out
          </p>
          <p className="mt-3 text-base font-semibold text-[#F2482D]">
            12,405
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl border border-[#E9E9E9] p-5 flex justify-between items-start">
          <div>
            <p className="text-sm font-medium magison text-[#2A2A2A]">
              Total Earned
            </p>          
              <p className="mt-3 text-base font-semibold text-[#F2482D]">$10,000</p>
          </div>
        </div>
      </div>

        {/* Tables Section */}
        <div className=" gap-6 mb-8">
          <div className="">
            <DynamicTable
              title="Active Items"
              columns={activeItemsColumns}
              data={activeItemsData}
              rowActions={activeActions}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <h2 className="text-[#F2482D]  magison [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] text-xl font-semibold">
                Items Sold
              </h2>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>2025</option>
                <option>2024</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-[#F2482D]  magison [text-shadow:1px_1px_0px_rgb(0_0_0/1.00)] text-xl font-semibold mb-4">
              Shipping & Revenue
            </h2>
            <div className="space-y-3">
              {[
                { name: "To be Shipped", date: "1" },
                { name: "In Transit", date: "12" },
                { name: "Delivered", date: "1" },
                { name: "Monthly Payout Released", date: "$2,500" },
                { name: "Pending Payout", date: "$2,500" },
              ].map((winner, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-gray-700">{winner.name}</span>
                  <span className="text-gray-500">{winner.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
